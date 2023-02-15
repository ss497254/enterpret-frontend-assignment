import React, { useCallback, useState } from "react";
import { Button } from "./Button";
import { GroupFilter } from "./GroupFilter";

interface props {}

export const GroupFilterContainer: React.FC<props> = () => {
    const [groupFilters, addGroupFilters] = useState("0");

    return (
        <div className="bg-dark-900 pt-4 w-[950px] h-[60vh] rounded scrollbar-tiny overflow-y-scroll">
            {groupFilters.split(",").map((id) => (
                <GroupFilter key={id} />
            ))}
            <Button
                title="+ Add new group filter"
                className="ml-4 mb-6 !px-4 !rounded-md relative custom-top-bar"
                onClick={useCallback(() => {
                    addGroupFilters((gf) => {
                        gf += "," + Math.random().toString().substr(3, 8);

                        return gf;
                    });
                }, [])}
            />
        </div>
    );
};
