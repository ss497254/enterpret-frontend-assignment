import { RuleGroup } from "src/types/query";

export const ruleGroupStore = new Map<string, RuleGroup>();

export const getRuleGroups = () => {
    return [...ruleGroupStore.values()];
};
