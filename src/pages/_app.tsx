import { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import "../styles/globals.css";

function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Saurabh Singh | Enterpret</title>
                <link
                    rel="icon"
                    href="https://uploads-ssl.webflow.com/620f861c09c079cd155ba23c/6219d2cea2c0381f62a49b14_256.svg"
                    type="image/x-icon"
                />
                <meta name="viewport" content="width=1200, initial-scale=1" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default App;
