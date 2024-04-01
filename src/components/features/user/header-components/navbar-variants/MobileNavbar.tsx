import { useNavigate } from "react-router-dom";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

import Title from "../../../../ui/Title";
import { setIsToggle } from "../../../../../redux/slices/toggleSlice";
import { useAppSelector, useAppDispatch } from "../../../../../redux/hooks";

interface IProps {
  isLoggedIn: string;
  username: string;
}

export default function MobileNavbar({ isLoggedIn, username }: IProps) {
  const navigate = useNavigate();
  const isToggle = useAppSelector((state) => state.toggle.isToggle);
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="sm:hidden">
        <RxHamburgerMenu
          className="text-xl"
          onClick={() => dispatch(setIsToggle(true))}
        />

        {/* OffCanvas */}
        <div
          className={`w-1/2 bg-white h-full z-50 absolute top-0 right-0 p-7 space-y-3 flex flex-col ${
            !isToggle && "hidden overflow-hidden"
          }`}
        >
          <div className="flex items-center justify-between">
            <Title title="BCR" variant="h6" />
            <RxCross2 onClick={() => dispatch(setIsToggle(false))} />
          </div>
          {isLoggedIn && (
            <div className="py-2 px-4 bg-blue-700 flex justify-center items-center rounded-full text-white">
              <p className="">{username}</p>
            </div>
          )}
          <a href="/#features" onClick={() => dispatch(setIsToggle(false))}>
            Our Services
          </a>
          <a href="/#services" onClick={() => dispatch(setIsToggle(false))}>
            Why Us
          </a>
          <a href="/#testimonial" onClick={() => dispatch(setIsToggle(false))}>
            Testimoni
          </a>
          <a href="/#faq" onClick={() => dispatch(setIsToggle(false))}>
            FAQ
          </a>
          <div>
            {!isLoggedIn ? (
              <button
                className="p-1 px-5 bg-[#5CB85F] text-white"
                onClick={() => navigate("/auth/sign-up")}
              >
                Register
              </button>
            ) : (
              <div className="flex flex-col space-y-2">
                <hr />
                <a href="/#faq" onClick={() => dispatch(setIsToggle(false))}>
                  Profile
                </a>
                <button
                  type="button"
                  className="text-left"
                  onClick={() => {
                    localStorage.removeItem("token");
                    location.reload();
                  }}
                >
                  Log Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
