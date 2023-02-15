import * as React from "react";

export default function Logo(props: any) {
    return (
        <svg
            width={props.size || 36}
            height={props.size || 36}
            fill="currentColor"
            viewBox="0 0 300 269"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 29.9004H254.944V56.7366H0V29.9004ZM0 116.496H161.616V143.811H0V116.496ZM254.944 202.994H0V229.83H254.944V202.994Z"
                fill-opacity="0.3"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M207.951 40.2395L167.712 0L139.031 28.6812L95.0984 28.6812L66.4172 0L26.1777 40.2395L54.6308 68.6926V102.104L26.1777 130.558L54.6308 159.011V188.603L26.1777 217.056L66.4172 257.296L94.2633 229.45H138.222L167.712 258.94L207.951 218.7L167.712 178.461L143.811 202.362H91.9622L77.3937 187.794V159.821L93.8081 143.406H162.527V116.318L92.4173 116.318L77.3937 101.295V69.5024L89.5337 57.3624L144.595 57.3624L167.712 80.4789L207.951 40.2395Z"
            />
            <defs>
                <linearGradient
                    id="paint0_linear"
                    x1="60.5"
                    y1="-1.75121e-06"
                    x2="198.5"
                    y2="279"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#E43EFF" />
                    <stop offset="1" stopColor="#785BEF" />
                </linearGradient>
            </defs>
        </svg>
    );
}
