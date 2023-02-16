import React, { useState } from "react";
import { RuleGroup } from "src/types/query";
import { CopyButton } from "./CopyButton";
import { TabButtons } from "./TabButtons";

interface props {
    query: RuleGroup;
}

const outputTypes = ["String", "Rule object"];

export const Query: React.FC<props> = ({ query }) => {
    const [outputType, setOutputType] = useState(outputTypes[0]);

    const text =
        outputType === outputTypes[0]
            ? JSON.stringify(query)
            : JSON.stringify(query, null, 2);

    return (
        <div className="p-4 my-6 border rounded bg-dark-800 border-dark-700">
            <div className="justify-between mb-4 f">
                <TabButtons
                    buttons={outputTypes}
                    value={outputType}
                    onClick={setOutputType}
                />
                <CopyButton text={text} />
            </div>
            <pre className="overflow-x-hidden text-ellipsis">{text}</pre>
        </div>
    );
};
