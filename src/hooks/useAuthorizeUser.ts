import { setUser } from "../redux/slices/userSlice";
import { setToken } from "../redux/slices/authSlice";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { useEffect } from "react";

export const useAuthorizeUser = async () => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    dispatch(setToken());

    const whoAmI = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/v1/auth/authorize-jwt",
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

        dispatch(setUser(data.data));
      } catch (e) {
        console.log(e);
      }
    };

    isLoggedIn && whoAmI();
  }, []);
};
