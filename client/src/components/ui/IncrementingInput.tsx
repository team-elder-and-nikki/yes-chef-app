import { useState } from "react";
import { CirclePlus, CircleMinus } from "lucide-react";

interface IncrementingInputProps {
    value: number;
    onChange: (newValue: number) => void;
  }

export function IncrementingInput({ value, onChange }: IncrementingInputProps) {
    const [inputValue, setInputValue] = useState(value);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newValue = event.target.value.replace(/[^0-9]/g, "");
    setInputValue(newValue === "" ? 0 : parseInt(newValue, 10));
    onChange(newValue === "" ? 0 : parseInt(newValue, 10));
  }

  function increment() {
    setInputValue((prev) => {
      const newValue = prev + 1;
      onChange(newValue);
      return newValue;
    });
  }

  function decrement() {
    setInputValue((prev) => {
      const newValue = prev > 0 ? prev - 1 : 0;
      onChange(newValue);
      return newValue;
    });
}

  return (
    <div className="flex flex-row items-center">
      <CircleMinus className="w-5 h-5 mx-2 text-gray-500" onClick={decrement} />
      <div className="flex items-center border rounded-lg px-2 py-1 shadow-sm space-x-2">
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          className="flex-1 outline-none border-none bg-transparent px-2 py-1 text-gray-900 max-w-[40px]"
          placeholder="0"
        />
      </div>
      <CirclePlus className="w-5 h-5 mx-2 text-gray-500" onClick={increment} />
    </div>
  );
}