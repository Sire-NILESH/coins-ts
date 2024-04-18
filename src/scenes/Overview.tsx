import Reports from "../components/Reports";
import TopCoinsInfoAtGlance from "../components/TopCoinsInfoAtGlance";
import Header from "../components/ui/Header";

const Overview = () => {
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
