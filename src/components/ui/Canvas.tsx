import { PropsWithChildren } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  selectToggle,
  setToggleNavbarCanvas,
} from "../../redux/slices/toggleSlice";

export default function Canvas({ children }: PropsWithChildren) {
  const dispatch = useAppDispatch();
  const { toggleNavbarCanvas } = useAppSelector(selectToggle);

  if (toggleNavbarCanvas) {
    return (
      <>
        <div
          onClick={() => dispatch(setToggleNavbarCanvas(false))}
          className="z-10 h-full w-full fixed top-0 right-0 left-0 bottom-0 bg-gray-600 bg-opacity-50"
        />
        {children}
      </>
    );
  }
}
