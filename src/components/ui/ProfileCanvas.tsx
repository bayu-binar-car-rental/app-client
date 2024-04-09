import { setIsToggle } from "../../redux/slices/toggleSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { IoCloseOutline } from "react-icons/io5";
import Avatar from "./Avatar";
import { PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";

interface IProfileCanvasItemProps {
  onClick: () => void | null;
}

function ProfileCanvasHeader() {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-4">
        <Avatar />
        <p>{user.username}</p>
      </div>
      <div
        className="p-1 hover:bg-slate-200 hover:cursor-pointer"
        onClick={() => dispatch(setIsToggle(false))}
      >
        <IoCloseOutline className="text-xl" />
      </div>
    </div>
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
  const isToggle = useAppSelector((state) => state.toggle.isToggle);

  const handleSignOut = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  if (isToggle) {
    return (
      <>
        <div className="w-1/4 z-30 p-5 fixed right-0 top-0 bottom-0 bg-white shadow-md space-y-5">
          <ProfileCanvasHeader />
          <div className="border-t-2 py-2">
            <ProfileCanvasItem onClick={() => navigate("/profile")}>
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
