import { Pagination } from '../../../../models';

type TCalculatePagination = {
  current: number;
  limit: number;
  total: number;
};

export function calculatePagination({
  pageInfo,
  count,
}: Pagination<any | undefined>): TCalculatePagination {
  const { currentPage, perPage } = pageInfo;
  const current = currentPage * perPage - perPage + 1;
  const limit =
    currentPage * perPage - perPage + perPage <= count
      ? currentPage * perPage - perPage + perPage
      : count;
  const total = count;
  return {
    current,
    limit,
    total,
  };
}
