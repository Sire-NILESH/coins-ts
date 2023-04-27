import axios from "axios";
import { useEffect, useState } from "react";
import { getCoinList } from "../uitls/api";

const useLoadPageData = (
  urlFunction: (currency: string, pageNumber: number) => string,
  currency: string,
  page: number
) => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [pageNumber, setPageNumber] = useState<number>(page ? page : 1);

  useEffect(() => {
    function fetchAPI() {
      setLoading(true);
      // const abortCont = new AbortController();
      const options = {
        method: "GET",
        //   url: url,
        url: getCoinList(currency),
        // signals: abortCont.signal,
      };
      console.log("in useEffect", options.url);

      axios
        .request(options)
        .then(function (response: any) {
          console.log("in response");
          setData(response.data);
          console.log(response.data);
        })
        .catch(function (error: any) {
          console.error(error);
        });

      setLoading(false);
    }

    fetchAPI();

    return () => {
      // abortCont.abort();
      // fetchAPI();
    };
  }, [currency, pageNumber]);

  return { data, loading, setPageNumber };
};

export default useLoadPageData;
