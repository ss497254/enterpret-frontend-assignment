import * as React from "react";

export default function CaretIcon(props: any) {
    return (
        <svg
            width={props.size || 12}
            height={props.size || 12}
            fill="currentColor"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
            viewBox="0 0 11 6"
        >
            <path d="M0.996262 0.00187683L5.99626 5.00188L10.9963 0.00187683H0.996262Z" />
        </svg>
    );
}
