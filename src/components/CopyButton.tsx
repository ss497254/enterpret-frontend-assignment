import React, { useState } from "react";
import { Button } from "./Button";

interface props {
    text: string;
}

export const CopyButton: React.FC<props> = ({ text }) => {
    const [isCopied, setIsCopied] = useState(false);
    return (
        <Button
            title={isCopied ? "Copied!" : "Copy"}
            btn="custom"
            onClick={() => {
                setIsCopied(true);
                navigator?.clipboard?.writeText(text);
                setTimeout(setIsCopied, 1000, false);
            }}
            className="px-5 rounded hover:bg-indigo-600 bg-dark-700"
        />
    );
};
