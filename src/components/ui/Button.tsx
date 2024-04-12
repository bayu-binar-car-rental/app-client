import { PropsWithChildren } from "react";

interface IProps {
  variant?: "primary" | "secondary";
  fullWidth?: boolean;
  type?: "submit" | "reset" | "button" | undefined;
  disabled?: boolean;
  onclick?: (state?: any) => void;
}

export default function Button({
  children,
  variant = "primary",
  type,
  fullWidth,
  onclick,
  disabled,
}: PropsWithChildren<IProps>) {
  return (
    <button
      type={type}
      onClick={onclick}
      disabled={disabled}
      className={`p-1 px-5 font-bold ${
        variant === "primary"
          ? "bg-hijau text-white"
          : "border-2 border-biru text-biru"
      } ${fullWidth && "w-full"} ${disabled && "opacity-50"}`}
    >
      {children}
    </button>
  );
}
