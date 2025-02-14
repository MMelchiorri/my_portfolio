import { ReactNode } from "react";

type ButtonFieldProps = {
    children: ReactNode;
    onClick: () => void
};

export default function Button({ children }: ButtonFieldProps) {
    return <button>{children}</button>;
}
