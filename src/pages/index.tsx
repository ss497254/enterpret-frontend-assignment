import React from "react";
import { ActionBar } from "src/components/ActionBar";
import { Header } from "src/components/Header";
import { QueryContainer } from "src/components/QueryContainer";
import { SideBar } from "src/components/SideBar";

export default function Home() {
    return (
        <main className="min-h-screen text-white bg-dark-900">
            <Header />
            <div className="max-w-6xl mx-auto f">
                <SideBar />
                <div className="w-full pt-8" style={{ maxWidth: "916px" }}>
                    <ActionBar />
                    <QueryContainer />
                </div>
            </div>
        </main>
    );
}
