import React, { useCallback, useState } from "react";
import { Button } from "./Button";
import { GroupFilter } from "./GroupFilter";

interface props {}

export const GroupFilterContainer: React.FC<props> = () => {
    // using string to render list of group filter, as array is not primitive
    const [groupFilters, addGroupFilters] = useState("0");

    return (
        <div className="bg-dark-900 w-[950px] h-[60vh] rounded scrollbar-tiny overflow-y-scroll">
            {groupFilters.split(",").map((id) => (
                <GroupFilter key={id} id={id} />
            ))}
            <Button
                title="+ Add new group filter"
                className="ml-4 mb-6 !px-4 !rounded-md relative custom-top-bar"
                onClick={useCallback(() => {
                    addGroupFilters((gf) => {
                        // adding a random id with ',' to seperate it
                        gf += "," + Math.random().toString().substr(3, 8);

                        return gf;
                    });
                }, [])}
            />
        </div>
    );
};
