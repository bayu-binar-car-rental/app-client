import { useAppDispatch } from "../../../../../redux/hooks";
import { setToggleNavbarCanvas } from "../../../../../redux/slices/toggleSlice";

export default function NavbarCanvas() {
  const dispatch = useAppDispatch();

  const setToggleFalse = () => {
    dispatch(setToggleNavbarCanvas(false));
  };

  return (
    <div className="w-2/3 z-30 p-5 fixed left-0 top-0 bottom-0 bg-white shadow-md space-y-5 rounded-e-xl">
      <div className="flex flex-col gap-3">
        <a href="#features" onClick={setToggleFalse}>
          Our Services
        </a>
        <a href="#services" onClick={setToggleFalse}>
          Why Us
        </a>
        <a href="#testimonial" onClick={setToggleFalse}>
          Testimonial
        </a>
        <a href="#faq" onClick={setToggleFalse}>
          FAQ
        </a>
      </div>
    </div>
  );
}
