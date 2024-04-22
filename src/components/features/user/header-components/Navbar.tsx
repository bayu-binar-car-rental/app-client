import { useAppSelector } from "../../../../states/hooks";
import { useAuthorizeUser } from "../../../../hooks/useAuthorizeUser";

import Logo from "../../../ui/Logo";
import MobileNavbar from "./navbar-variants/MobileNavbar";
import LaptopNavbar from "./navbar-variants/LaptopNavbar";

export default function Navbar() {
  const { username } = useAppSelector((state) => state.user);
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);

  useAuthorizeUser();

  return (
    <>
      <div className="flex justify-between items-center py-5">
        <Logo />
        <div>
          <MobileNavbar isLoggedIn={isLoggedIn as string} username={username} />
          <LaptopNavbar isLoggedIn={isLoggedIn as string} username={username} />
        </div>
      </div>
    </>
  );
}
