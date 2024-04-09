import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { setToggleCanvas } from "../../redux/slices/toggleSlice";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(
      setToggleCanvas({
        toggleNavbarCanvas: false,
        toggleProfileCanvas: false,
      })
    );
  }, [pathname]);

  return null;
}
