import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { setIsToggle } from "../../redux/slices/toggleSlice";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(setIsToggle(false));
  }, [pathname]);

  return null;
}
