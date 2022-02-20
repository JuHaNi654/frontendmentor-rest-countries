import Select from "./Select";
import { ChangeEvent, useState, useCallback } from "react";
import { debounce } from "lodash";

interface Props {
  fc: Function;
}

const Filters = ({ fc }: Props): JSX.Element => {
  const [countryInput, setCountryInput] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCountryInput(e.target.value);
    debounceHandle(e.target.value);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceHandle = useCallback(
    debounce((val) => fc({ value: val, type: "countryInput" }), 500),
    []
  );

  return (
    <div className="flex flex-col gap-7 md:flex-row md:gap-0 justify-between">
      <div className="dark:bg-primary-blue-600 flex flex-row gap-5 items-center shadow rounded py-3 px-8 w-full max-w-lg">
        <svg
          className="stroke-primary-blue-900 dark:stroke-white"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="10" cy="10" r="7" />
          <line x1="21" y1="21" x2="15" y2="15" />
        </svg>
        <input
          className="dark:text-white flex-1 py-1 px-2 bg-transparent"
          type="text"
          placeholder="Search for a country..."
          onChange={handleChange}
          value={countryInput}
        />
      </div>
      <Select cb={fc} />
    </div>
  );
};

export default Filters;
