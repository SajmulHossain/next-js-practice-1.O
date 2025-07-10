"use client"

import { redirect } from "next/navigation";

const Button = () => {
    return (
        <button onClick={() => redirect("/")}>Go Home</button>
    );
};

export default Button;