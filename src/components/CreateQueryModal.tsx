import React from "react";
import { CloseIcon } from "src/icons";
import { Button } from "./Button";
import { GroupFilterContainer } from "./GroupFilterContainer";
import { Modal } from "./Modal";

interface props {
    open: boolean;
    setOpen: (x: boolean) => void;
}

export const CreateQueryModal: React.FC<props> = (props) => {
    return (
        <Modal {...props}>
            {/* Header */}
            <div className="pl-8 pr-5 py-4 bg-indigo-500 w-[950px] rounded-t">
                <div className="justify-between w-full mb-2 text-lg font-semibold f">
                    Build a query
                    <button onClick={() => props.setOpen(false)}>
                        <CloseIcon className="p-0.5 bg-indigo-800 bg-opacity-50 rounded-md" />
                    </button>
                </div>
                <div className="items-center w-full f">
                    <div className="flex-1 text-sm max-w-3xl px-2 py-1.5 mr-4 overflow-x-hidden bg-indigo-700 rounded whitespace-nowrap text-ellipsis bg-opacity-90">
                        Query: “(field.theme) == \“Product Feedback”\” &&
                        “(field.theme) == \“Product Feedback”\” &&
                        “(field.theme) ==
                    </div>
                    more...{"   "}
                </div>
            </div>
            {/* Content */}
            <GroupFilterContainer />

            {/* Footer */}
            <div className="justify-between px-4 pt-2 pb-4 mb-4 rounded bg-dark-900 f">
                <Button
                    title="Cancel"
                    btn="custom"
                    className="px-4 py-2 text-sm rounded-md bg-dark-700 hover:bg-dark-600"
                    onClick={() => props.setOpen(false)}
                />
                <Button
                    title="Finish"
                    className="!px-4 !rounded-md"
                    onClick={() => props.setOpen(false)}
                />
            </div>
        </Modal>
    );
};
