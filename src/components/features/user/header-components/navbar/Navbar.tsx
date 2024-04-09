import { PropsWithChildren } from "react";
// import { useAppSelector } from "../../../../redux/hooks";
import { useAuthorizeUser } from "../../../../../hooks/useAuthorizeUser";

import Logo from "../../../../ui/Logo";
import React from "react";

export default function Navbar({ children }: PropsWithChildren) {
  useAuthorizeUser();

  return (
    <>
      <div className="flex justify-between items-center py-5">
        <Logo />

        {/* Laptop */}
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-7">
          {React.Children.map(children, (child) => {
            return child;
          })}
        </div>
      </div>
    </>
  );
}
