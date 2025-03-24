import { useState } from "react";
import { CirclePlus, CircleMinus } from "lucide-react";

interface IncrementingInputProps {
    value: number;
    onChange: (newValue: number) => void;
  }

export function IncrementingInput({ value, onChange }: IncrementingInputProps) {

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newValue = event.target.value.replace(/[^0-9]/g, "");
    onChange(newValue === "" ? 0 : parseInt(newValue, 10));
  }

  function increment() {
      onChange(value + 1);
  }

  function decrement() {
      onChange(value > 0 ? value - 1 : 0);
  };

  return (
    <div className="flex flex-row items-center cursor-pointer">
      <CircleMinus className="w-5 h-5 mx-2 text-gray-500 hover:opacity-60" onClick={decrement} />
      <div className="flex items-center border rounded-lg px-2 py-1 shadow-sm space-x-2">
        <input
          type="text"
          value={value}
          onChange={handleChange}
          className="cursor-pointer flex-1 outline-none border-none bg-transparent px-2 py-1 text-gray-900 max-w-[40px]"
          placeholder="0"
        />
      </div>
      <CirclePlus className="w-5 h-5 mx-2 text-gray-500 hover:opacity-60" onClick={increment} />
    </div>
  );
}