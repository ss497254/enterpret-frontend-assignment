import React from "react";

const ButtonType = {
    default:
        "bg-indigo-600 hover:bg-indigo-700 text-white py-2 font-medium rounded px-6 text-sm",
    success:
        "bg-emerald-500 hover:bg-emerald-400 text-white py-2 font-medium rounded px-6 text-sm",
    danger: "bg-red-500 hover:bg-red-600 text-white py-2 font-medium rounded px-6 text-sm",
    custom: "",
};

interface props {
    loading?: boolean;
    btn?: keyof typeof ButtonType;
}

export const Button: React.FC<
    React.ButtonHTMLAttributes<HTMLButtonElement> & props
> = ({ title, loading, btn = "default", className, ...props }) => {
    return (
        <button className={`c ${ButtonType[btn]} ${className}`} {...props}>
            {loading ? "..." : title}
        </button>
    );
};
