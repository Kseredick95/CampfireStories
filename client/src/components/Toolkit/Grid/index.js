import React from "react";

// Export the container div
export function Container({ fluid, children }) {
    return <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>;
}

// Export the row div
export function Row({ fluid, children }) {
    return <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>;
}

// Export the row mt div
export function RowMt({ size, children }) {
    return (
        <div
            className={size
                .split(" ")
                .map(size => "row mt-" + size)
                .join(" ")}
        >
            {children}
        </div>
    );
}

// Export the col div
// export for the col that does not use dash i.e. <div classname={col justify-center}> or div <classname={col}>
export function Column({ classType, children }) {
    return <div className={`col${(classType) ? ` ${classType}` : ""}`}>{children}</div>;
}

// This Col component lets us size bootstrap columns with less syntax
export function Col({ size, children }) {
    return (
        <div
            className={size
                .split(" ")
                .map(size => "col-" + size)
                .join(" ")}
        >
            {children}
        </div>
    );
}