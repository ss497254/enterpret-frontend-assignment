import React from "react";
import Link from "next/link";

export default function NotFound() {
    return (
        <>
            <section className="h-screen bg-indigo-500 c">
                <div className="container">
                    <div className="flex flex-wrap">
                        <div className="w-full px-4">
                            <div
                                className="wow fadeInUp relative mx-auto max-w-[850px] overflow-hidden rounded-lg bg-white py-20 px-8 text-center shadow-lg sm:px-12 md:px-[60px]"
                                data-wow-delay=".2s"
                            >
                                <h2 className="mb-8 text-3xl font-bold text-dark sm:text-4xl lg:text-[40px] xl:text-[42px]">
                                    404 - We couldn't find that page.
                                </h2>
                                <h3 className="mb-8 text-xl font-normal text-dark-700 md:text-2xl">
                                    Maybe the page has been moved out?
                                </h3>
                                <Link href="/">
                                    <button className="inline-block px-6 py-3 mx-2 my-1 text-base font-medium text-indigo-700 bg-indigo-200 rounded-md hover:bg-indigo-500 hover:text-white">
                                        Go Home
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
