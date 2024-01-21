import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import appIcons from "../config/appIcons";
import useLogout from "../hooks/useLogout";
import { authSelectors } from "../redux/authSlice";
import { useAppSelector } from "../redux/store";
import Avatar from "./ui/Avatar";

const UserAvatarPopover = () => {
  const user = useAppSelector(authSelectors.authUser);

  const { logoutHandler } = useLogout();

  return (
    <div className="flex-1">
      <Popover className="h-full w-full p-1">
        {({ open }) => (
          <>
            <Popover.Button
              className={`h-full w-full flex items-center justify-center rounded-2xl text-primary transition-colors duration-200 ease-in-out text-white ${
                open
                  ? "bg-blue-50 !text-blue-900"
                  : "bg-transparent hover:bg-blue-300/60"
              }`}
            >
              <Avatar
                avatarSize="md"
                className={`mt-1 ${open ? "!text-blue-900" : "!text-blue-100"}`}
                src={user?.photoURL ? user.photoURL : ""}
                alt={user?.displayName ? user.displayName : "user"}
              />
              {open ? appIcons.chevronUp : appIcons.chevronDown}
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute right-0 z-10 mt-3 w-screen max-w-[16rem] bottom-24 transform px-4 sm:px-0">
                <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-white">
                  <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                    {/* PROFILE */}
                    <div className="flex flex-col items-center mb-4">
                      <span className="text-sm font-medium text-gray-700 mb-5">
                        My Account
                      </span>

                      <Avatar
                        avatarSize="lg"
                        className={"mt-1 !text-blue-900 !border-blue-900"}
                        src={user?.photoURL ? user.photoURL : ""}
                        alt={user?.displayName ? user.displayName : "user"}
                      />

                      <h4 className="mt-2 mx-2 font-medium text-gray-700 hover:underline line-clamp-1">
                        {user?.displayName ? user.displayName : "user"}
                      </h4>
                      <p className="mx-2 mt-1 text-xs text-gray-500 hover:underline line-clamp-1">
                        {user?.email ? user.email : "user@exapmle.com"}
                      </p>
                    </div>
                  </div>
                  <footer className="bg-blue-50">
                    {/* LOGOUT BTN */}
                    <button
                      type="button"
                      onClick={logoutHandler}
                      className="w-full p-4 flex items-center justify-center space-x-3 text-gray-700 hover:bg-blue-100 transition-colors ease-in-out duration-200"
                    >
                      {appIcons["logout"]}
                      <span className="mx-4 font-medium">{"Logout"}</span>
                    </button>
                  </footer>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
};

export default UserAvatarPopover;
