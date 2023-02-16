import React from "react";
import { useQueryStore } from "src/stores/useQueryStore";
import { Query } from "./Query";

interface props {}

export const QueryContainer: React.FC<props> = () => {
    const { queries } = useQueryStore();

    return (
        <div className="pb-12">
            {queries.length ? (
                queries.map((query, idx) => <Query key={idx} query={query} />)
            ) : (
                <div className="min-h-[450px] c flex-col font-semibold text-xl">
                    No queries found!
                    <div className="mt-2 text-sm font-light">
                        Create a query by clicking "Build query" button
                    </div>
                </div>
            )}
        </div>
    );
};
