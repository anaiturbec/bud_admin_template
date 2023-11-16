import React from 'react';
import Layout from '../../components/layout/Layout';
import { useQuery } from '@apollo/client';
import { GET_USER, GET_USERS } from '@/graphql/queries';
import { User } from '@/models';
import dayjs from 'dayjs';

export default function Dashboard() {
  const [users, setUsers] = React.useState<User[]>([]);
  const { data, loading } = useQuery(GET_USERS);

  React.useEffect(() => {
    if (data && !loading) {
      setUsers(data?.users);
    }
  }, [data, loading]);
  return (
    <Layout current="content">
      <div className="p-10 flex flex-col gap-y-10">
        <p className="text-black font-semibold text-xl">Dashboard</p>
        <div className="w-full h-14 flex items-center bg-primary-400 rounded-full">
          <p className="font-semibold text-3xl ml-10">Bienvenid@ de vuelta!</p>
        </div>
        <div className="flex flex-row gap-x-5">
          <div className="bg-white w-48 h-48 rounded shadow-xl p-5 flex flex-col">
            <p className="text-neutral-500 text-center font-light text-sm">
              Hay un total de
            </p>
            <p className="text-3xl font-bold text-primary-400 my-5 text-center">
              {users?.filter((a) => a?.userType !== 'superadmin')?.length}
            </p>
            <p className="text-neutral-500 text-center font-light text-sm">
              usuarios con cuenta actualmente en la plataforma
            </p>
          </div>
          <div className="bg-white w-48 h-48 rounded shadow-xl p-5 flex flex-col">
            <p className="text-neutral-500 text-center font-light text-sm">
              Hay un total de
            </p>
            <p className="text-3xl font-bold text-primary-400 my-5 text-center">
              {
                users?.filter(
                  (a) =>
                    dayjs(a?.createdAt).format('DD/MM/YYYY') == '16/11/2023' &&
                    a?.userType !== 'superadmin'
                )?.length
              }
            </p>
            <p className="text-neutral-500 text-center font-light text-sm">
              nuevos usuarios hoy
            </p>
          </div>
          <div className="bg-white w-48 h-48 rounded shadow-xl p-5 flex flex-col">
            <p className="text-neutral-500 text-center font-light text-sm">
              Hay un total de
            </p>
            <p className="text-3xl font-bold text-primary-400 my-5 text-center">
              {
                users?.filter(
                  (a) => !a?.isVerified
                )?.length
              }
            </p>
            <p className="text-neutral-500 text-center font-light text-sm">
              que no finalizaron la verificación
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
