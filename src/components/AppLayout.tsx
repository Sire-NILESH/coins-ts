import { PropsWithChildren } from "react";
import useAuthUser from "../hooks/useAuthUser";

const AppLayout = ({ children }: PropsWithChildren) => {
  // check initial auth user here
  useAuthUser();

  return (
    <div className="bg-secondary text-slate-700 dark-bg flex items-center justify-center h-screen w-screen font-poppins">
      {children}
    </div>
  );
};

export default AppLayout;
