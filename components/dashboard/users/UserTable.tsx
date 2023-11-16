/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Table from '../common/table';
import { createColumnHelper } from '@tanstack/react-table';
import { PlusIcon } from '../common';
import { useRouter } from 'next/router';
import { PageInfo, Pagination, User } from '../../../models';
import SetPrivilege from './SetPrivilege';

const columnHelper = createColumnHelper<User>();

const columns = [

  columnHelper.accessor('email', {
    header: 'Correo',
    cell: (info) => info.row.original.email,
  }),

  columnHelper.accessor('userType', {
    header: 'Role',
    cell: (info) => info.row.original.userType,
  }),

  columnHelper.accessor('active', {
    header: 'Estatus',
    cell: (info) => (
      <p className="flex gap-2 items-center">
        {info?.getValue() ? 'Activo' : 'Desactivado'}
      </p>
    ),
  }),
];

interface UserTableProps {
  data: Pagination<User>;
  pagination: Partial<PageInfo>;
  setPagination: React.Dispatch<React.SetStateAction<Partial<PageInfo>>>;
}

export default function UserTable({
  data,
  pagination,
  setPagination,
}: UserTableProps) {
  const router = useRouter();
  const onClickRow = (e: React.MouseEvent<HTMLTableRowElement, MouseEvent>) => {
    e.preventDefault();
    const { id } = e.currentTarget.dataset;
    router.push(`/dashboard/users/create?id=${id}`);
  };

  const handleGoToPage = (value: number) => {
    setPagination({ ...pagination, currentPage: value });
  };
  return (
    <section className="p-20">
      <h2 className="text-neutral-700 font-semibold text-3xl mb-8">
        Usuarios
      </h2>
      <div className="w-full flex flex-row justify-end items-center gap-x-5 mb-5 mt-20">
        <button
          type="button"
          className="text-primary-400 flex flex-row gap-x-3 font-medium hover:text-orange-600"
          onClick={() => router.push('/dashboard/users/create')}
        >
          <PlusIcon className="w-5" />
          <p>Crear Admin</p>
        </button>
      </div>
      <div className="bg-white py-6 rounded-lg shadow-[0_4px_6px_4px_rgba(211,211,211,0.2)]">
        <Table
          href=""
          columns={columns}
          data={data?.items ?? []}
          manualPagination
        >
          <div className="px-8">
            <Table.Header>
              <Table.SearchInput />
              {/* <Table.Button title="Cliente" action={onClickAddButton} /> */}
            </Table.Header>
          </div>
          <Table.Content<User> onClickRow={onClickRow} />
          <div className="px-8">
            <Table.Footer>
              <Table.Pagination
                handleGoToPage={handleGoToPage}
                paginationInfo={{
                  count: data?.count,
                  pageInfo: { ...data?.pageInfo },
                  items: [...(data?.items ?? [])],
                }}
              />
            </Table.Footer>
          </div>
        </Table>
      </div>
    </section>
  );
}
