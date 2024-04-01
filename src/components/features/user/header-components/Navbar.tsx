import { setToken } from "../../../../redux/slices/authSlice";
import { useAppSelector, useAppDispatch } from "../../../../redux/hooks";

import MobileNavbar from "./navbar-variants/MobileNavbar";
import LaptopNavbar from "./navbar-variants/LaptopNavbar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [username, setUsername] = useState<string>("");

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    dispatch(setToken());

    const whoAmI = async () => {
      try {
        const response = await fetch(
          "https://binar-car-rental-api-bayu.fly.dev/api/v1/auth/authorize-jwt",
          {
            method: "POST",
            headers: { Authorization: isLoggedIn as string },
          }
        );

        const data = await response.json();
        if (data.message === "Token Expired. Please login") {
          localStorage.removeItem("token");
          dispatch(setToken());
          alert(data.message);

          return;
        }

        setUsername(await data.data.username[0].toUpperCase());
      } catch (e) {
        console.log(e);
      }
    };

    if (isLoggedIn) {
      whoAmI();
    }
  }, []);

  return (
    <>
      <div className="flex justify-between items-center py-5">
        <div
          className="py-4 px-10 bg-biru hover:cursor-pointer"
          onClick={() => navigate("/")}
        />
        <div>
          <MobileNavbar isLoggedIn={isLoggedIn as string} username={username} />
          <LaptopNavbar isLoggedIn={isLoggedIn as string} username={username} />
        </div>
      </div>
    </>
  );
}
