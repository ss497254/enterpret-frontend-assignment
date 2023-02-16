export interface Rule {
    field:
        | "Theme"
        | "Sub-theme"
        | "Reason"
        | "Language"
        | "Source"
        | "Rating"
        | "Time Period"
        | "Customer ID";
    condition:
        | "Equals"
        | "Does not equal"
        | "Like"
        | "Not like"
        | "Is Empty"
        | "Is"
        | "Is not";
    value: string;
    type: "rule";
}

export interface RuleGroup {
    children: (RuleGroup | Rule)[];
    conjunction: "AND" | "OR";
    not: boolean;
    type: "rule_group";
}
