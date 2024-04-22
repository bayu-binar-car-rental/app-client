import { setUser } from "../states/slices/userSlice";
import { setToken } from "../states/slices/authSlice";
import { useAppSelector, useAppDispatch } from "../states/hooks";
import { useEffect } from "react";

export const useAuthorizeUser = async () => {
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

        dispatch(setUser(data.data));
      } catch (e) {
        console.log(e);
      }
    };

    isLoggedIn && whoAmI();
  }, []);
};
