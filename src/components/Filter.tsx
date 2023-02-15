import React from "react";
import { Trash } from "src/icons";
import { SelectInput } from "./SelectInput";

interface props {
    id: string;
    onClick?: () => void;
}

export const Filter: React.FC<props> = ({ id, onClick }) => {
    return (
        <div className="space-x-4 f">
            <SelectInput
                name="Field"
                options={[
                    "Theme",
                    "Sub-theme",
                    "Reason",
                    "Language",
                    "Source",
                    "Rating",
                    "Time Period",
                    "Customer ID",
                ]}
            />
            <SelectInput
                name="Condition"
                options={[
                    "Equals",
                    "Does not equal",
                    "Like",
                    "Not like",
                    "Is Empty",
                    "Is",
                    "Is not",
                ]}
            />
            <SelectInput
                name="Criteria"
                options={[
                    "Offers",
                    "Performance",
                    "Platform",
                    "Product Feedback",
                ]}
            />
            {id === "0" ? (
                <div className="w-11" />
            ) : (
                <button
                    onClick={onClick}
                    className="p-3 mt-auto mb-4 text-gray-300 rounded hover:text-red-500 bg-opacity-40 bg-dark-700"
                >
                    <Trash />
                </button>
            )}
        </div>
    );
};
