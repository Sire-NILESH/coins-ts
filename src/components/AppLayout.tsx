import { Outlet } from "react-router-dom";
import AppModal from "./AppModal";

const AppLayout = () => {
  return (
    <div className="bg-secondary text-slate-700 dark-bg flex items-center justify-center min-h-screen font-poppins">
      <Outlet />

      {/* app's modal is handled here. */}
      <AppModal />
    </div>
  );
};

export default AppLayout;
