// Imports
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../../states/hooks";
import { setToggleProfileCanvas } from "../../../../../states/slices/toggleSlice";

import Button from "../../../../ui/Button";
import Avatar from "../../../../ui/Avatar";
import ProfileCanvas from "./ProfileCanvas";

export default function NavAuth() {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <div>
      {isLoggedIn ? (
        <>
          <button onClick={() => dispatch(setToggleProfileCanvas(true))}>
            <Avatar />
          </button>
          <ProfileCanvas />
        </>
      ) : (
        <Button onclick={() => navigate("/auth/sign-up")}>Register</Button>
      )}
    </div>
  );
}
