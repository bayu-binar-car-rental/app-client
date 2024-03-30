interface IProps {
  options: string[];
  inputValue: string;
  setInput: (input: string) => void;
}

export default function SelectInput({ options, inputValue, setInput }: IProps) {
  return (
    <select
      value={inputValue}
      onChange={(e) => setInput(e.target.value)}
      className="text-sm p-2 bg-white border border-slate-300 focus:outline-none"
    >
      {options.map((option, index) => {
        return (
          <option key={index} value={option}>
            {option}
          </option>
        );
      })}
    </select>
  );
}
