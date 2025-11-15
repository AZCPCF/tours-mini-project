import type { ReactNode } from "react";
import { createPortal } from "react-dom";

export const Modal = ({ children }: { children: ReactNode }) => {
  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-white p-4 w-11/12 rounded-[18px]">{children}</div>
    </div>,
    document.getElementById("modal")!
  );
};
