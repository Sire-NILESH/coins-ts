import { useEffect, useState } from "react";

type Props<T> = {
  dataList: T[];
  pageEnteries: number;
};

export default function usePagination<T = unknown>({
  dataList,
  pageEnteries,
}: Props<T>) {
  const [page, setPage] = useState<number>(1);

  const pageHandler = (page: number) => {
    if (page <= Math.ceil(dataList.length / 10) && page >= 1) {
      setPage(page);
    }
  };

  useEffect(() => setPage(1), [dataList]);

  return {
    currentPage: page,
    pageData: dataList.slice(
      (page - 1) * pageEnteries,
      (page - 1) * pageEnteries + pageEnteries
    ),
    pageSetter: pageHandler,
    pageEnteries,
    totalEnteries: dataList.length,
    totalPages: Math.ceil(dataList.length / 10),
  };
}
