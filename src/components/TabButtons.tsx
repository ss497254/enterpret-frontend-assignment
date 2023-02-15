import React, { useState } from "react";

interface props {
    className?: string;
    buttons: string[];
    onClick: (tab: string, idx: number) => void;
}

export const TabButtons: React.FC<props> = ({
    buttons,
    onClick,
    className,
}) => {
    const [active, setActive] = useState(0);

    return (
        <div className={"overflow-hidden rounded-md w-fit h-fit " + className}>
            {buttons.map((title, idx) => (
                <button
                    key={idx}
                    onClick={() => {
                        onClick(title, idx);
                        setActive(idx);
                    }}
                    className={`py-2 px-4 ${
                        active === idx ? "bg-indigo-500" : "bg-dark-700"
                    }`}
                >
                    {title}
                </button>
            ))}
        </div>
    );
};
