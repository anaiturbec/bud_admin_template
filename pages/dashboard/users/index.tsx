import React from 'react';
import { Pagination } from '../../../models';
import { useQuery } from '@apollo/client';
import { Layout } from '../../../components/layout';
import { GET_CLIENT, USER_PAGINATION } from '../../../graphql/queries';
import { User } from '../../../models';
import UserTable from '../../../components/dashboard/users/UserTable';
import { useUser } from '@/hooks';

export default function UsersPage() {
  const [user] = useUser();
  const [userPagination, setUserPagination] =
    React.useState<Pagination<User>>();
  const [pagination, setPagination] = React.useState({
    currentPage: 1,
    perPage: 10,
  });
  const { data, loading } = useQuery<{
    userPagination: Pagination<User>;
  }>(USER_PAGINATION, {
    fetchPolicy: 'network-only',
    variables: {
      page: pagination?.currentPage ?? 1,
      perPage: pagination?.perPage ?? 10,
    },
  });


  React.useEffect(() => {
    if (data && !loading) {
      setUserPagination(data?.userPagination);
    }
  }, [data, loading]);

  return (
    <Layout current="users">
      <UserTable
        data={userPagination}
        pagination={pagination}
        setPagination={setPagination}
      />
    </Layout>
  );
}
