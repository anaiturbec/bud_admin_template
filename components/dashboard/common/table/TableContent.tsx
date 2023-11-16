import React from 'react';
import { flexRender } from '@tanstack/react-table';
import { useTable } from './Table';

export interface MongooseModel {
  _id?: string;
  active?: boolean;
  createdAt?: string | Date;
  updatedAt?: string | Date;
}

interface TableContentProps {
  onClickRow?: (event: React.MouseEvent<HTMLTableRowElement>) => void;
  onKeyDownOrUpRow?: (event: React.KeyboardEvent<HTMLTableRowElement>) => void;
}

/**
 *
 * @example ```js
 *   const onClick = (e: React.MouseEvent<HTMLTableRowElement, MouseEvent>) => {
    e.preventDefault();
    const { id } = e.currentTarget.dataset;
    if (!id) {
      return;
    }
    if (path) {
      router.push(href, `${path}/${id}`);
    }
  };
  const onKeyDownOrUp = (e: React.KeyboardEvent<HTMLTableRowElement>) => {
    e.preventDefault();
    const { id } = e.currentTarget.dataset;
    if (!id) {
      return;
    }
    if (path) {
      router.push(href, `${path}/${id}`);
    }
  };
 *
 * ```
 */

export default function TableContent<T extends MongooseModel>({
  onClickRow: onClick,
  onKeyDownOrUpRow: onKeyDownOrUp,
}: TableContentProps) {
  const table = useTable<T>();
  return (
    <div className="block w-full overflow-x-auto bg-white">
      <table className="items-center w-full bg-transparent border-collapse">
        <thead className="">
          {table?.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="px-6 align-middle py-3 text-sm uppercase whitespace-nowrap font-semibold text-left bg-text-white text-black"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row, index) => (
            <tr
              key={row.id}
              role="button"
              tabIndex={0}
              className={`cursor-pointer ${
                index % 2 === 0 ? 'bg-systemBackgrounds-300' : 'bg-text-white'
              } hover:bg-neutral-100`}
              data-id={row.original._id}
              onClick={onClick}
              onKeyDown={onKeyDownOrUp}
              onKeyUp={onKeyDownOrUp}
            >
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-s text-black whitespace-nowrap p-4"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
