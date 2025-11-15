import { AddIcon, CloseIcon } from "@/assets/icons";
import { Modal } from "@/components/common/modal";
import { useState } from "react";
import { AddSupportForm } from "./form";

const AddSupport = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setOpen(true);
        }}
        className="bg-primary fixed bottom-4 right-3 py-[14px] px-8 rounded-[18px] flex items-center justify-center gap-1 text-lg"
      >
        <span>تیکت جدید</span>
        <AddIcon />
      </button>
      {open ? (
        <Modal>
          <div className="direction-rtl text-neutral-900">
            <div className="w-full flex items-center px-3 justify-between border-b-2 pb-4 border-b-gray-100">
              <h1 className="text-xl">ارتباط با پشتیبانی</h1>
              <button
                onClick={() => {
                  setOpen(false);
                }}
                className="w-max"
              >
                <CloseIcon />
              </button>
            </div>
            <AddSupportForm />
          </div>
        </Modal>
      ) : undefined}
    </div>
  );
};
export default AddSupport;
