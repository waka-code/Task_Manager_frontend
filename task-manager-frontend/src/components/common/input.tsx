import { useRef } from "react";
import { SearchIcon } from "../../assets/svg/searchIcon";

type Props = {
  onchange: (n: string) => void;
  inputValue: string;
};

export function Input(props: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleIconClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="flex gap-2 p-2 items-center rounded-xl bg-slate-100 cursor-pointer">
      <input
        type="text"
        placeholder="Search anything..."
        className="border-none p-1 w-80 bg-transparent focus:outline-none"
        value={props.inputValue}
        onChange={(e) => props.onchange(e.target.value)}
        ref={inputRef}
      />
      <div onClick={handleIconClick}>
        <SearchIcon />
      </div>
    </div>
  );
}
