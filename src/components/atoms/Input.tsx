'use client'
import {ReactNode} from "react";
import { InputProps } from "@/types/InputProps";

export default function Input ({value, handleChange}: InputProps):ReactNode {
    return <input type="text" value={value} onChange={handleChange}/>
}