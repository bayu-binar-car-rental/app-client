import { PropsWithChildren } from "react";

interface IProps {
  variant?: "primary" | "secondary";
  onclick: () => void;
}

export default function Button({
  children,
  variant = "primary",
  onclick,
}: PropsWithChildren<IProps>) {
  return (
    <button
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
