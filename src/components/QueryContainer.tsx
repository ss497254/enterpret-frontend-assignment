import React from "react";
import { Query } from "./Query";

interface props {}

const queries = [];

export const QueryContainer: React.FC<props> = () => {
    return (
        <div className="">
            {queries.length ? (
                <Query />
            ) : (
                <div className="min-h-[500px] c font-semibold text-xl">
                    No queries found!
                </div>
            )}
        </div>
    );
};
