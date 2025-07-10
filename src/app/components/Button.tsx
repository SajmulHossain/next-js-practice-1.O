"use client"


import { useRouter } from "next/navigation";
import React from "react";


const Button = ({children, path}: {children: React.ReactNode, path:string}) => {
    const router = useRouter();
    return (
        <button onClick={() => router.push(path)}>{children}</button>
    );
};

export default Button;