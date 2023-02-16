import { Rule } from "src/types/query";
import { create } from "zustand";

interface Queries {
    queries: Rule[];
    addQuery: (x: Rule) => void;
}

export const useQueryStore = create<Queries>()((set) => ({
    queries: [],
    addQuery: (query) => {
        set(({ queries }) => {
            queries.push(query);
            return { queries };
        });
    },
}));
