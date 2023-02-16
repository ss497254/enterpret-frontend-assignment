import React, { useState } from "react";
import { Trash } from "src/icons";
import { Rule } from "src/types/query";
import { SelectInput } from "./SelectInput";

interface props {
    id: string;
    onDelete?: () => void;
    onRuleComplete: (x: Rule) => void;
}

export const Filter: React.FC<props> = ({ id, onDelete, onRuleComplete }) => {
    const [rule, setRule] = useState<Partial<Rule>>({});

    const onChange = (field: keyof Rule) => (value: string) => {
        setRule((r) => {
            //@ts-ignore
            r[field] = value;

            if (r.condition && r.field && r.value) onRuleComplete(r);

            return { ...r };
        });
    };

    return (
        <div className="space-x-4 f">
            <SelectInput
                value={rule.field}
                onChange={onChange("field")}
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
                value={rule.condition}
                onChange={onChange("condition")}
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
                value={rule.value}
                onChange={onChange("value")}
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
                    onClick={onDelete}
                    className="p-3 mt-auto mb-4 text-gray-300 rounded hover:text-red-500 bg-opacity-40 bg-dark-700"
                >
                    <Trash />
                </button>
            )}
        </div>
    );
};
