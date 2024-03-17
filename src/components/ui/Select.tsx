interface IProps {
  title: string;
  options: string[];
  inputValue: string;
  setInput: (input: string) => void;
}

export default function Select({
  title,
  options,
  inputValue,
  setInput,
}: IProps) {
  return (
    <div className="flex justify-between items-center">
      <p>
        {title}
        <span className="text-red-500">*</span>
      </p>
      <select
        value={inputValue}
        onChange={(e) => setInput(e.target.value)}
        className="p-2 bg-white basis-3/4 border border-slate-300 focus:outline-none"
      >
        {options.map((option, index) => {
          return (
            <option key={index} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
}
