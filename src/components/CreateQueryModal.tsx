import React, { useEffect } from "react";
import { CloseIcon } from "src/icons";
import { useQueryStore } from "src/stores/useQueryStore";
import { ruleGroupStore, getRuleGroups } from "src/stores/RuleGroupStore";
import { Button } from "./Button";
import { GroupFilterContainer } from "./GroupFilterContainer";
import { Modal } from "./Modal";

interface props {
    open: boolean;
    setOpen: (x: boolean) => void;
}

export const CreateQueryModal: React.FC<props> = ({ open, setOpen }) => {
    const { addQuery } = useQueryStore();

    useEffect(() => {
        // reseting the store
        ruleGroupStore.clear();
    }, []);

    const onFinish = () => {
        const ruleGroups = getRuleGroups();

        // checking for multiple rule groups
        if (ruleGroups.length === 1) addQuery(ruleGroups[0]);
        else if (ruleGroups.length > 1)
            // if has multiple rule groups then combine them.
            addQuery({
                children: ruleGroups,
                type: "rule_group",
                conjunction: "AND",
                not: false,
            });

        setOpen(false);
    };

    return (
        <Modal open={open} setOpen={setOpen}>
            {/* Header */}
            <div className="pl-8 pr-5 py-4 bg-indigo-500 w-[950px] rounded-t">
                <div className="justify-between w-full text-lg font-semibold f">
                    Build a query
                    <button onClick={() => setOpen(false)}>
                        <CloseIcon className="p-0.5 bg-indigo-800 bg-opacity-50 rounded-md" />
                    </button>
                </div>
                <p className="text-sm text-white text-opacity-75">
                    The query you build will be saved in your active view
                </p>
            </div>

            {/* Content */}
            <GroupFilterContainer />

            {/* Footer */}
            <div className="justify-between px-4 pt-2 pb-4 mb-4 rounded bg-dark-900 f">
                <Button
                    title="Cancel"
                    btn="custom"
                    className="px-4 py-2 text-sm rounded-md bg-dark-700 hover:bg-dark-600"
                    onClick={() => setOpen(false)}
                />
                <Button
                    title="Finish"
                    className="!px-4 !rounded-md"
                    onClick={onFinish}
                />
            </div>
        </Modal>
    );
};
