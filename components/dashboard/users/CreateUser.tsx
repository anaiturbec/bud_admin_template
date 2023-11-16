import React from 'react';
import nProgress from 'nprogress';
import { Button, Input, Select } from '../common';
import { useRouter } from 'next/router';
import { useMutation, useQuery } from '@apollo/client';
import { useNotify, useUser } from '../../../hooks';
import { CREATE_USER, UPDATE_USER } from '../../../graphql/mutation';
import { User } from '../../../models';
import { GET_USER } from '../../../graphql/queries';

export default function CreateUser() {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [userType, setUserType] = React.useState('superadmin');
  const [active, setActive] = React.useState(true);
  // hooks
  const [user] = useUser();
  const notify = useNotify();
  const router = useRouter();
  // mutations
  const [createUser] = useMutation(CREATE_USER);
  const [updateUser] = useMutation(UPDATE_USER);
  const { data, loading } = useQuery<{ user: User }>(GET_USER, {
    fetchPolicy: 'network-only',
    variables: {
      filter: { _id: router?.query?.id },
    },
  });

  React.useEffect(() => {
    if (!loading && data && router?.query?.id) {
      setFirstName(data?.user?.firstName);
      setLastName(data?.user?.lastName);
      setEmail(data?.user?.email);
      setUserType(data?.user?.userType);
    }
  }, [data, loading, router?.query?.id]);

  const onClick = async () => {
    try {
      nProgress.start();
      if (router?.query?.id) {
        const { data: updateData } = await updateUser({
          variables: {
            data: {
              _id: router?.query?.id,
              email,
              active,
            },
            filter: {
              email,
            },
          },
        });
        if (updateData) {
          notify('Se ha actualizado el usuario con éxito!', 'success');
          router.push('/dashboard/users');
        }
      } else {
        const { data: createData } = await createUser({
          variables: {
            data: {
              email,
              password,
              userType: 'superadmin',
            },
          },
        });
        if (createData) {
          notify('Se ha creado el usuario con éxito!', 'success');
          router.push('/dashboard/users');
        }
      }
    } catch (err) {
      console.log(err);
    } finally {
      nProgress.done();
    }
  };

  return (
    <section className="p-10 shadow-xl m-20">
      <h2 className="text-neutral-700 font-semibold text-3xl mb-8">
        Crear Admin
      </h2>
      <div className="bg-white rounded-lg w-full flex flex-col gap-y-10 p-10">
        <div className="flex flex-row gap-x-5">
          <Input
            label="Correo Electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {!router?.query?.id && (
            <Input
              label="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          )}
        </div>
        <div className="w-full flex flex-row gap-x-5">
          <Button onClick={onClick} className="w-full bg-primary-400">
            {router?.query?.id ? 'Actualizar' : 'Crear'}
          </Button>
          {router.query?.id && (
            <Button
              className="bg-danger-400 w-full"
              onClick={() => {
                setActive(false);
                onClick();
              }}
            >
              Desactivar
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
