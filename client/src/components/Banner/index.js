import React from "react";
import "./style.css";

export function Banner({ children }) {
    return <div className={"cover"}>{children}</div>;
}