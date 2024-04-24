import { useNavigate } from "react-router-dom";

export default function Transaction({ id }: { id: number }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/payment/${id}`)}
      className="border rounded-md p-1 px-3 hover:cursor-pointer"
    >
      {id}
    </div>
  );
}
