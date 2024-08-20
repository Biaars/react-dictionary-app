import { useContext, useState } from "react";
import { InputContext } from "../App";

const InputButton = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const { inputValue, setInputValue } = useContext(InputContext);

  const handleInputChange = (event: any) =>
    setValue(event.target.value);

  const handleSubmit = () => {
    setInputValue(value);
    setValue("");
  };

  const handleInputKeyDown = (e:any) => {
    if(e.key === 'Enter') {
      setInputValue(value);
      setValue("");
    }
  }
  return (
    <div>
      <div className="flex items-center justify-center mt-5">
        <div className="flex border-2 border-gray-100 rounded">
          <input
            className="px-4 py-2 md:w-80"
            type="text"
            placeholder="Search"
            value={value}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
          />
          <button
            className="bg-slate-200 hover:bg-blue-100/75 border- px-4 py-2"
            onClick={handleSubmit}
          >
            Search
          </button>
        </div>
      </div>
      {inputValue && (
        <h3 className="text-center text-slate-100 font-thin mx-auto pt-4">
          Result for:
          <span className="font-bold"> {inputValue}</span>
        </h3>
      )}
      </div>
  );
};

export default InputButton;
