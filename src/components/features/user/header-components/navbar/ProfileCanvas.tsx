import { PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";

import Avatar from "../../../../ui/Avatar";
import { useAppDispatch, useAppSelector } from "../../../../../states/hooks";
import {
  selectToggle,
  setToggleProfileCanvas,
} from "../../../../../states/slices/toggleSlice";

interface IProfileCanvasItemProps {
  onClick: () => void | null;
}

function ProfileCanvasHeader() {
  const { username } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="flex bg-white justify-between items-center z-20">
        <div className="flex items-center gap-4">
          <Avatar />
          <p>{username}</p>
        </div>
        <div
          className="p-1 hover:bg-slate-200 hover:cursor-pointer"
          onClick={() => dispatch(setToggleProfileCanvas(false))}
        >
          <IoCloseOutline className="text-xl" />
        </div>
      </div>
    </>
  );
}

function ProfileCanvasItem({
  children,
  onClick,
}: PropsWithChildren<IProfileCanvasItemProps>) {
  return (
    <p
      onClick={onClick}
      className="p-1 px-2 rounded-md hover:bg-slate-200 hover:cursor-pointer"
    >
      {children}
    </p>
  );
}

export default function ProfileCanvas() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { toggleProfileCanvas } = useAppSelector(selectToggle);
  const { id } = useAppSelector((state) => state.user);

  const handleSignOut = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  const handleProfileNavigate = () => {
    navigate(`/profile/${id}`);
    dispatch(setToggleProfileCanvas(false));
  };

  if (toggleProfileCanvas) {
    return (
      <>
        <div
          onClick={() => dispatch(setToggleProfileCanvas(false))}
          className="z-10 h-full w-full fixed top-0 right-0 left-0 bottom-0 bg-gray-600 bg-opacity-50"
        />
        <div className="w-2/3 md:w-1/4 z-30 p-5 fixed right-0 top-0 bottom-0 bg-white shadow-md space-y-5 rounded-s-xl">
          <ProfileCanvasHeader />
          <div className="border-t-2 py-2">
            <ProfileCanvasItem onClick={handleProfileNavigate}>
              Profile
            </ProfileCanvasItem>
            <ProfileCanvasItem onClick={handleSignOut}>
              Sign Out
            </ProfileCanvasItem>
          </div>
        </div>
      </>
    );
  }
}
