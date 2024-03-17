interface IToggle {
  toggle: boolean;
  setToggle: (state: boolean) => void;
}

export default function ToggleButton({ toggle, setToggle }: IToggle) {
  return (
    <button
      onClick={() => setToggle(!toggle)}
      type="button"
      className={`w-full rounded-full border border-slate-300 flex items-center ${
        toggle ? "justify-end bg-green-500" : "justify-start bg-slate-300"
      }`}
    >
      <div className="p-3 m-1 bg-white rounded-full shadow-lg border border-slate-300" />
    </button>
  );
}
