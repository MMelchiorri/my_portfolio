"use client";

import NavLink from "../atoms/NavLink";
import { NavBarProps } from "@/types/NavBarProps";

export default function Navbar({ items }: NavBarProps) {
    return (
        <nav>
            <ul>
                {items.map((elem, index) => (
                    <li key={index}>
                        <NavLink name={elem.name} link={elem.link} />
                    </li>
                ))}
            </ul>
        </nav>
    );
}
