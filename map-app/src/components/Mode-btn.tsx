import { useEffect, useRef } from "react";
import "../style-components/mode-btn.css";

type Props = {
  darkMode: boolean;
  toggle: Function;
};

const ModeBtn = ({ darkMode, toggle }: Props): JSX.Element => {
  const toggleBtn = useRef(null);
  useEffect(() => {}, []);

  return (
    <>
      <button
        ref={toggleBtn}
        onClick={() => toggle()}
        className="dark:text-white flex justify-between items-center gap-1 px-2 lg:text-lg lg:gap-3 overflow-hidden show-icon"
      >
        {darkMode ? (
          <>
            <svg
              className="stroke-white"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#2c3e50"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="12" cy="12" r="4" />
              <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
            </svg>
            <span className="font-semibold">Light Mode</span>
          </>
        ) : (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#2c3e50"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
            </svg>
            <span className="font-semibold">Dark Mode</span>
          </>
        )}
      </button>
    </>
  );
};

export default ModeBtn;
