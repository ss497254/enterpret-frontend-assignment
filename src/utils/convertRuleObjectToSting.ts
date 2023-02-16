import { Rule, RuleGroup } from "src/types/query";

const conditionMap = {
    Equals: "==",
    "Does not equal": "!=",
    Like: "%%",
    "Not like": "!%",
    "Is Empty": "empty",
    Is: "is",
    "Is not": "is not",
};

const stringifyRule = (rule: Rule) => {
    // formating acc. to sample provided in figma design
    return `(field.${rule.field.toLowerCase()}) ${
        conditionMap[rule.condition]
    } \\"${rule.value}\\"`;
};

export const stringifyRuleGroup = (ruleGroup: RuleGroup): string => {
    if (ruleGroup.children.length === 1) {
        if (ruleGroup.children[0].type === "rule")
            return '"' + stringifyRule(ruleGroup.children[0]) + '"';

        return '"' + stringifyRuleGroup(ruleGroup.children[0]) + '"';
    }

    const conjuction = ruleGroup.conjunction === "AND" ? " && " : " || ";

    return ruleGroup.children
        .map((x) => {
            if (x.type === "rule") return '"' + stringifyRule(x) + '"';

            return '"' + stringifyRuleGroup(x) + '"';
        })
        .join(conjuction);
};
