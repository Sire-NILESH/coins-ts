import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Button from "./Button";
import { ModalProps } from "../../../typing";

const Modal = ({
  isModalOpen,
  onCloseModalHandler,
  modalContent,
}: ModalProps) => {
  return (
    <Transition appear show={isModalOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onCloseModalHandler}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md min-h-[14rem] flex flex-col justify-between transform overflow-hidden rounded-2xl bg-popover dark:bg-secondary p-6 text-left align-middle shadow-xl transition-all">
                <div className="">
                  <Dialog.Title
                    as="h3"
                    className="!text-xl font-semibold leading-6 text-popover-foreground/90"
                  >
                    {modalContent.title}
                  </Dialog.Title>

                  <div className="mt-2">
                    <p className="text-base text-popover-foreground/70">
                      {modalContent.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 ml-auto">
                  <Button onClick={onCloseModalHandler}>
                    <p className="text-popover-foreground/90 text-base font-semibold py-2 px-5">
                      Okay
                    </p>
                  </Button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
