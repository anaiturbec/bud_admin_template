import React from 'react';
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';
import { Pagination } from '../../../../models';
import { useTable } from './Table';
import { calculatePagination } from '../utils/calculatePagination';

interface TablePaginationProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  handleGoToPage?: (value: number) => void;
  paginationInfo?: Pagination<any>;
}

export default function TablePagination({
  className = '',
  handleGoToPage = () => {},
  paginationInfo,
  ...props
}: TablePaginationProps) {
  const table = useTable();

  const [isManualPagination] = React.useState(
    table.options.manualPagination ?? false
  );

  const paginationRange = React.useMemo(
    () => calculatePagination(paginationInfo),
    [paginationInfo]
  );

  const handleGoToFirstPage = () => {
    if (isManualPagination) {
      handleGoToPage(1);
    } else {
      table.setPageIndex(0);
    }
  };

  const handleGoToLastPage = () => {
    const { pageInfo } = paginationInfo;
    if (isManualPagination) handleGoToPage(pageInfo.pageCount);
    else if (!isManualPagination) {
      table.setPageIndex(table.getPageCount() - 1);
    }
  };

  const handleGoToNextPage = () => {
    const { pageInfo } = paginationInfo;
    if (isManualPagination && pageInfo.hasNextPage)
      handleGoToPage(pageInfo.currentPage + 1);
    else if (!isManualPagination) {
      table.nextPage();
    }
  };

  const handleGoToPrevPage = () => {
    const { pageInfo } = paginationInfo;
    if (isManualPagination && pageInfo.hasPreviousPage)
      handleGoToPage(pageInfo.currentPage - 1);
    else if (!isManualPagination) {
      table.previousPage();
    }
  };

  return (
    <div
      className={`py-2 mt-6 flex w-full justify-end ${className}`}
      {...props}
    >
      <nav className="block">
        <ul className="flex pl-0 rounded list-none flex-wrap items-center">
          <li className="text-gray-500">
            {paginationRange.current} al {paginationRange.limit} de{' '}
            {paginationRange.total}
          </li>
          {/* <li className="">
            <button
              type="button"
              className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative text-slate-500"
              onClick={handleGoToFirstPage}
              disabled={
                isManualPagination
                  ? !paginationInfo.pageInfo.hasPreviousPage
                  : !table.getCanPreviousPage()
              }
            >
              <ChevronDoubleLeftIcon className="w-4 h-4" />
            </button>
          </li> */}
          <li className="">
            <button
              type="button"
              className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0  items-center justify-center leading-tight relative  text-slate-500"
              onClick={handleGoToPrevPage}
              disabled={
                isManualPagination
                  ? !paginationInfo.pageInfo.hasPreviousPage
                  : !table.getCanPreviousPage()
              }
            >
              <ChevronLeftIcon className="w-4 h-4" />
            </button>
          </li>
          <li className="">
            <button
              type="button"
              className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0  items-center justify-center leading-tight relative  text-slate-500 "
              onClick={handleGoToNextPage}
              disabled={
                isManualPagination
                  ? !paginationInfo.pageInfo.hasNextPage
                  : !table.getCanNextPage()
              }
            >
              <ChevronRightIcon className="w-4 h-4" />
            </button>
          </li>
          {/* <li className="">
            <button
              type="button"
              className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative  text-slate-500"
              onClick={handleGoToLastPage}
              disabled={
                isManualPagination
                  ? !paginationInfo.pageInfo.hasNextPage
                  : !table.getCanNextPage()
              }
            >
              <ChevronDoubleRightIcon className="w-4 h-4" />
            </button>
          </li> */}
        </ul>
      </nav>
    </div>
  );
}
