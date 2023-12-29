import { useMemo, useState } from "react";

type Props<T> = {
  dataList: T[] | null;
  searchFilterResolver: (value: T, searchQuery: string) => boolean;
};

export default function useSearch<T = unknown>({
  dataList,
  searchFilterResolver,
}: Props<T>) {
  const [search, setSearch] = useState<string | undefined>(undefined);

  const searchFilteredData = useMemo(
    function () {
      if (search && search.length > 0) {
        const temp = dataList?.filter((coin) =>
          searchFilterResolver(coin, search)
        );

        if (temp && temp.length > 0) {
          // page number will be reset to 1 inside the usePagination.
          return temp;
        }
      } else if (dataList) {
        return dataList;
      } else if (!search && dataList) {
        return dataList;
      }
      return [];
    },
    //   eslint-disable-next-line
    [dataList, search]
  );

  return { search, setSearch, searchFilteredData };
}
