import { useNavigate } from "react-router-dom";

interface IProps {
  dimmed?: boolean;
}

export default function Logo({ dimmed = false }: IProps) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/")}
      className={`py-4 px-10 hover:cursor-pointer ${
        dimmed ? "bg-slate-300" : "bg-biru"
      }`}
    />
  );
}
