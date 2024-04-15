import { useAppSelector } from "../../states/hooks";

export default function Avatar() {
  const user = useAppSelector((state) => state.user);

  return (
    <>
      <div className="bg-biru min-w-8 min-h-8 rounded-full flex items-center justify-center hover:cursor-pointer overflow-hidden">
        {user.image ? (
          <img src={user.image} alt="Avatar" />
        ) : (
          <p className="text-white font-bold">{user.username[0]}</p>
        )}
      </div>
    </>
  );
}
