import React, { useCallback, useState } from "react";
import { Button } from "./Button";
import { Filter } from "./Filter";
import { TabButtons } from "./TabButtons";

interface props {}

export const GroupFilter: React.FC<props> = () => {
    const [filters, addFilters] = useState("0");

    return (
        <div className="p-4 mx-4 my-4 border rounded bg-dark-800 border-dark-700">
            <TabButtons
                className="mb-4"
                buttons={["AND", "OR"]}
                onClick={() => {}}
            />
            {filters.split(",").map((id) => (
                <Filter
                    key={id}
                    id={id}
                    onClick={() => addFilters(filters.replace("," + id, ""))}
                />
            ))}
            <Button
                title="+ Add filter"
                className="!rounded-md"
                onClick={useCallback(() => {
                    addFilters((filters) => {
                        filters += "," + Math.random().toString().substr(3, 8);

                        return filters;
                    });
                }, [])}
            />
        </div>
    );
};
