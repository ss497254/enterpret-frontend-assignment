import React from "react";
import { createPortal } from "react-dom";

interface props {
    open: boolean;
    children: React.ReactNode;
    setOpen: (x: boolean) => void;
}

export const Modal: React.FC<props> = ({ open, children, setOpen }) => {
    if (!open) return null;

    return createPortal(
        <div
            onClick={(e) => {
                !e.defaultPrevented && setOpen(false);
            }}
            className="fixed z-[1000] text-white duration-500 c flex-col inset-0 bg-gray-800 bg-opacity-30 backdrop-blur-sm"
        >
            <div onClick={(e) => e.preventDefault()}>{children}</div>
        </div>,
        document.querySelector("body")!
    );
};
