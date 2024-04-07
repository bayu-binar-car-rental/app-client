import { useNavigate } from "react-router-dom";

import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from "react";
import Button from "../../../../ui/Button";

interface IProps {
  isLoggedIn: string;
  username: string;
}

export default function LaptopNavbar({ isLoggedIn, username }: IProps) {
  const [toggle, setToggle] = useState<boolean>(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="items-center space-x-8 hidden sm:visible sm:flex">
        <a href="/#features">Our Services</a>
        <a href="/#services">Why Us</a>
        <a href="/#testimonial">Testimoni</a>
        <a href="/#faq">FAQ</a>
        {!isLoggedIn ? (
          <Button onclick={() => navigate("/auth/sign-up")}>Register</Button>
        ) : (
          username && (
            <div className="flex items-center space-x-2 relative">
              <div className="py-2 px-4  bg-blue-700 flex justify-center items-center rounded-full text-white">
                <p className="">{username[0].toUpperCase()}</p>
              </div>
              <RiArrowDropDownLine
                onClick={() => setToggle((prevToggle) => !prevToggle)}
                className={`transition ease-in-out duration-100 text-2xl hover:cursor-pointer ${
                  toggle && "rotate-180"
                }`}
              />
              {toggle && (
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
          )
        )}
      </div>
    </>
  );
}
