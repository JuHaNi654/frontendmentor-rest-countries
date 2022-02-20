import { useState, KeyboardEvent } from "react";

const KEY_CODE = {
  ARROW_DOWN: "ArrowDown",
};

const REGIONS = [
  "Asia",
  "Europe",
  "Africa",
  "Oceania",
  "Americas",
  "Polar",
  "Antarctic Ocean",
  "Antarctic",
];

interface Props {
  cb: Function;
}

const Select = ({ cb }: Props): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(
    "Filter By Region"
  );

  const handleKeyPress = (e: KeyboardEvent): void => {
    if (e.code === KEY_CODE.ARROW_DOWN) {
      setIsOpen(true);
    }
  };

  const selectRegion = (value: string | null) => {
    setSelectedRegion(value || "Filter By Region");
    setIsOpen(false);
    cb({ value: value, type: "region" });
  };

  return (
    <div className="relative dark:text-white min-w-[200px] max-w-[275px]">
      <button
        aria-haspopup="true"
        aria-expanded={isOpen}
        onKeyDown={(e) => handleKeyPress(e)}
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        className="
          dark:bg-primary-blue-600 flex flex-row justify-between gap-5 
          items-center shadow py-3 px-5 rounded-md w-full "
      >
        <span className="block p-1 mr-5">{selectedRegion}</span>
        <svg
          className="dark:stroke-white"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#2c3e50"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <div
        className={`absolute top-[105%] left-0 w-full overflow-hidden shadow z-10 ${
          isOpen ? "max-h-fit" : "max-h-0"
        }`}
      >
        <ul className="bg-white dark:bg-primary-blue-600 w-full my-1 py-3 rounded-md ">
          <li>
            <button
              onClick={() => selectRegion(null)}
              className="px-6 py-1 w-full text-left hover:bg-primary-gray-500 dark:hover:bg-primary-blue-800"
            >
              Filter By Region
            </button>
          </li>
          {REGIONS.map((region, i) => {
            return (
              <li key={i}>
                <button
                  onClick={() => selectRegion(region)}
                  className="px-6 py-1 w-full text-left hover:bg-primary-gray-500 dark:hover:bg-primary-blue-800"
                >
                  {region}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Select;
