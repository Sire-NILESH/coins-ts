import NoDataErr from "../components/NoDataErr";
import Reports from "../components/Reports";
import TopCoinsInfoAtGlance from "../components/TopCoinsInfoAtGlance";
import Header from "../components/ui/Header";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import useIsOverallDataError from "../hooks/useIsOverallDataError";
import useReloadData from "../hooks/useReloadData";
import { selectInitDataStatusSlice } from "../redux/initDataStatusSlice";
import { useAppSelector } from "../redux/store";
import { selectTopCoinsData } from "../redux/topCoinsSlice";

const Overview = () => {
  const { initDataStatus } = useAppSelector(selectInitDataStatusSlice);

  // checking the exisitance of any one of the initial data (topcoins, exchanges, trending) is fine as we are only interested in checking if the error is from initial data fetch (and show NoDataErr component) or from the reload data fetch (in that case show show old state ). Rest we can rely on the isOverallErr
  const topCoins = useAppSelector(selectTopCoinsData);

  const { overallDataError } = useIsOverallDataError();
  const reloadDataState = useReloadData();

  // if (initDataStatus === "loading") {
  //   return (
  //     <div className="h-full w-full overflow-hidden flex items-center justify-center">
  //       <LoadingSpinner />
  //     </div>
  //   );
  // }

  return (
    <div className="">
      <div className="pb-1 overflow-hidden">
        <Header title="Dashboard Overview" />
      </div>

      <div className="mt-5 w-full h-full flex flex-col items-center pb-10 xl:pb-0 space-y-20">
        <TopCoinsInfoAtGlance />

        {/* coins reports */}
        <Reports />

        {/* spacer */}
        <div className="xl:hidden h-1" />
      </div>
    </div>
  );
};

export default Overview;
