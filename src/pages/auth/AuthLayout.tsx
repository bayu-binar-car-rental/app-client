import Title from "../../components/ui/Title";
import authCover from "../../assets/Landing page - Desktop.png";
import { Outlet, useNavigate } from "react-router-dom";

export default function AuthLayout() {
  const navigate = useNavigate();

  return (
    <>
      <div className="h-screen lg:grid lg:grid-cols-2 overflow-hidden">
        <div id="form" className="p-5 py-10 lg:px-32 lg:my-auto relative">
          <div className="space-y-10">
            <div
              onClick={() => navigate("/")}
              className="inline py-2 px-12 bg-slate-300"
            />
            <Outlet />
          </div>
        </div>
        <div
          id="cover"
          className="bg-biru p-20 relative space-y-10 collapse lg:visible"
        >
          <Title title="Binar Car Rental" sx={["text-white"]} variant="h2" />
          <img
            className="absolute -bottom-100 -right-100"
            src={authCover}
            alt=""
          />
        </div>
      </div>
    </>
  );
}
