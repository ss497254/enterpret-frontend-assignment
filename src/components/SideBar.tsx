import React, { useState } from "react";
import FunnelIcon from "src/icons/FunnelIcon";
import { Button } from "./Button";
import { CreateQueryModal } from "./CreateQueryModal";

interface props {}

export const SideBar: React.FC<props> = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="w-60">
            <div className="items-center w-full mt-12 f">
                <FunnelIcon size={24} className="mr-2" />
                Build Your Query
            </div>
            <p className="my-3 text-sm text-gray-500">
                Narrow your search further by adding some filters.
            </p>
            <Button title="Build query" onClick={() => setOpen(!open)} />
            <CreateQueryModal open={open} setOpen={setOpen} />
        </div>
    );
};
