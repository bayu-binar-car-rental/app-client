import { useNavigate } from "react-router-dom";
import { setIsToggle } from "../../../../../redux/slices/toggleSlice";
import { useAppSelector, useAppDispatch } from "../../../../../redux/hooks";

import { RiArrowDropDownLine } from "react-icons/ri";
import { useEffect } from "react";

interface IProps {
  isLoggedIn: string;
  username: string;
}

export default function LaptopNavbar({ isLoggedIn, username }: IProps) {
  const navigate = useNavigate();

  const isToggle = useAppSelector((state) => state.toggle.isToggle);
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log(isLoggedIn);
  }, [isLoggedIn]);

  return (
    <>
      <div className="items-center space-x-8 hidden sm:visible sm:flex">
        <a href="/#features">Our Services</a>
        <a href="/#services">Why Us</a>
        <a href="/#testimonial">Testimoni</a>
        <a href="/#faq">FAQ</a>
        {!isLoggedIn ? (
          <button
            onClick={() => navigate("/auth/sign-up")}
            className="p-1 px-5 bg-[#5CB85F] text-white"
          >
            Register
          </button>
        ) : (
          <div className="flex items-center space-x-2 relative">
            <div className="py-2 px-4  bg-blue-700 flex justify-center items-center rounded-full text-white">
              <p className="">{username}</p>
            </div>
            <RiArrowDropDownLine
              onClick={() => dispatch(setIsToggle(!isToggle))}
              className={`transition ease-in-out duration-100 text-2xl hover:cursor-pointer ${
                isToggle && "rotate-180"
              }`}
            />
            {isToggle && (
              <div className="flex flex-col shadow-md space-y-2 py-3 bg-white absolute z-50 -bottom-28 right-0">
                <button className="py-1 ps-2 pe-10 text-left hover:bg-slate-300">
                  Profile
                </button>
                <button
                  className="text-nowrap py-1 ps-2 pe-10 text-left hover:bg-slate-300"
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
        )}
      </div>
    </>
  );
}
