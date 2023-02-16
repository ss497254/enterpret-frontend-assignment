import React, { useCallback, useRef, useState } from "react";
import { ruleGroupStore } from "src/stores/RuleGroupStore";
import { Button } from "./Button";
import { Filter } from "./Filter";
import { TabButtons } from "./TabButtons";

interface props {
    id: string;
}

const conjunctions = ["AND", "OR"] as const;

export const GroupFilter: React.FC<props> = ({ id }) => {
    const [filters, setFilters] = useState("0");
    const [conjunction, setConjunction] = useState<"AND" | "OR">(
        conjunctions[0]
    );
    const rules = useRef(new Map());

    const updateRuleGroup = () => {
        ruleGroupStore.set(id, {
            conjunction,
            type: "rule_group",
            not: false,
            children: [...rules.current.values()],
        });
    };

    return (
        <div className="p-4 mx-4 my-4 border rounded bg-dark-800 border-dark-700">
            <TabButtons
                className="mb-4"
                buttons={conjunctions}
                value={conjunction}
                onClick={setConjunction}
            />
            {filters.split(",").map((id) => (
                <Filter
                    key={id}
                    id={id}
                    onRuleChange={(rule) => {
                        rules.current.set(id, rule);
                        updateRuleGroup();
                    }}
                    onDelete={() => setFilters(filters.replace("," + id, ""))}
                />
            ))}
            <Button
                title="+ Add filter"
                className="!rounded-md"
                onClick={useCallback(() => {
                    setFilters((filters) => {
                        filters += "," + Math.random().toString().substr(3, 8);

                        return filters;
                    });
                }, [])}
            />
        </div>
    );
};
