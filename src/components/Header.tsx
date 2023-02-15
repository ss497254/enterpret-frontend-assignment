import { AnalysisIcon, Logo, SettingsIcon } from "src/icons";
import React from "react";
import Image from "next/image";

export const Header = () => {
    return (
        <div className="h-16 f bg-dark-800">
            <div className="items-center w-full max-w-6xl mx-auto space-x-2 f">
                <Logo className="mr-10" />
                <button className="py-1.5 px-2 pr-3 bg-white rounded-full w-fit f bg-opacity-10">
                    <AnalysisIcon className="mr-1" />
                    Themetic Analysis
                </button>
                <button className="py-1.5 px-2 rounded-full w-fit f text-gray-400">
                    <AnalysisIcon className="mr-1" />
                    Nascent Themes
                </button>
                <button className="py-1.5 px-2 rounded-full w-fit f text-gray-400">
                    <SettingsIcon className="mr-2" />
                    Settings
                </button>
                <div className="flex-1" />
                <Image
                    src="/user-1.jpg"
                    className="rounded-full"
                    width={32}
                    height={32}
                />
            </div>
        </div>
    );
};
