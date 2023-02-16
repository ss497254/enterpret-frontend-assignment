import React from "react";

interface props {
    className?: string;
    value: string;
    buttons: readonly string[];
    onClick: (tab: any) => void;
}

export const TabButtons: React.FC<props> = ({
    buttons,
    onClick,
    value,
    className,
}) => {
    return (
        <div className={"overflow-hidden rounded-md w-fit h-fit " + className}>
            {buttons.map((title, idx) => (
                <button
                    key={idx}
                    onClick={() => {
                        onClick(title);
                    }}
                    className={`py-1.5 px-4 ${
                        value === title ? "bg-indigo-500" : "bg-dark-700"
                    }`}
                >
                    {title}
                </button>
            ))}
        </div>
    );
};
