import React, { useState } from "react";
import { CaretIcon } from "src/icons";

interface props {
    options: string[];
    name: string;
}

export const SelectInput: React.FC<props> = ({ options, name }) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");

    return (
        <div className="relative w-72">
            <span className="text-sm"> {name}</span>
            <button
                className="items-center justify-between w-full h-10 px-3 mt-2 mb-4 border border-solid rounded-md outline-none f bg-opacity-40 border-dark-700 bg-dark-700"
                onClick={() => setOpen(!open)}
            >
                {value.length ? (
                    value
                ) : (
                    <span className="text-dark-600">
                        Select {name.toLowerCase()}
                    </span>
                )}
                <CaretIcon className="mr-1 text-dark-600" />
            </button>
            <div
                className={`absolute z-10 p-2 duration-1000 border rounded-md bg-dark-800 border-dark-700 ${
                    open ? "" : "hidden"
                }`}
            >
                {options.map((option, idx) => (
                    <button
                        onClick={() => {
                            setOpen(false);
                            setValue(option);
                        }}
                        className="w-full px-3 py-2 text-left rounded-md hover:bg-dark-700"
                        key={idx}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
};
