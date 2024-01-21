import { fetchExchanges } from "../redux/exchangesSlice";
import { useAppDispatch } from "../redux/store";

const useReloadExchanges = () => {
  const dispatch = useAppDispatch();

  function reloadState() {
    dispatch(fetchExchanges());
  }
  return reloadState;
};

export default useReloadExchanges;
