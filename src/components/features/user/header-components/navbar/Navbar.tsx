import React, { PropsWithChildren } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useAuthorizeUser } from "../../../../../hooks/useAuthorizeUser";

import Logo from "../../../../ui/Logo";
import Canvas from "../../../../ui/Canvas";
import { setToggleNavbarCanvas } from "../../../../../states/slices/toggleSlice";
import { useAppDispatch } from "../../../../../states/hooks";
import NavbarCanvas from "./NavbarCanvas";

export default function Navbar({ children }: PropsWithChildren) {
  const dispatch = useAppDispatch();
  useAuthorizeUser();

  return (
    <>
      <div className="flex justify-between items-center py-5">
        <div className="flex gap-5 items-center">
          {/* Mobile Navbar */}
          <div className="md:hidden">
            <RxHamburgerMenu
              onClick={() => dispatch(setToggleNavbarCanvas(true))}
            />
            <Canvas>
              <NavbarCanvas />
            </Canvas>
          </div>
          <Logo />
        </div>

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
