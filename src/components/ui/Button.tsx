import { PropsWithChildren } from "react";

interface IProps {
  variant?: "primary" | "secondary";
  type?: "submit" | "reset" | "button" | undefined;
  onclick?: (state?: any) => void;
}

export default function Button({
  children,
  variant = "primary",
  type,
  onclick,
}: PropsWithChildren<IProps>) {
  return (
    <button
      type={type}
      onClick={onclick}
      className={`p-1 px-5 font-bold ${
        variant === "primary"
          ? "bg-hijau text-white"
          : "border-2 border-biru text-biru"
      }`}
    >
      {children}
    </button>
  );
}
