import React from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { User } from '../models';

interface IUserContext {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

export const UserContext = React.createContext<IUserContext>({
  user: null,
  setUser: () => {},
});

interface UserContextProviderProps {
  children: React.ReactNode;
}

export function UserContextProvider({ children }: UserContextProviderProps) {
  const session = useSession();
  console.log('session', session);
  const [user, setUser] = React.useState<User | null>(null);
  const router = useRouter();
  React.useEffect(() => {
    if (session.status === 'authenticated') {
      setUser(session.data.user as User);
    } else if (session.status === 'unauthenticated') {
      router.push('/');
      setUser(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session?.data?.user, session?.status]);
  const value = React.useMemo(() => ({ user, setUser }), [user]);
  if (session.status === 'loading') {
    return null;
  }
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
