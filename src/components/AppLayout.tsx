import { Outlet } from "react-router-dom";
import AppModal from "./AppModal";

const AppLayout = () => {
  return (
    <div className="bg-secondary text-secondary-foreground flex items-center justify-center min-h-screen font-poppins">
      <Outlet />

      {/* app's modal is handled here. */}
      <AppModal />
    </div>
  );
};

export default AppLayout;
