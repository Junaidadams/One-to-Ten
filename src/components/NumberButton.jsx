import { useState } from "react";
import PropTypes from "prop-types";

const NumberButton = ({ number, handleReady }) => {
  const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [correct, setCorrect] = useState(false);
  const [correctBlockValue, setCorrectBlockValue] = useState(null);
  const [incorrect, setIncorrect] = useState(null);
  // const [choice, setChoice] = useState(0);

  const handleChoiceSelect = (value) => {
    // console.log(`Choice: ${value}, Number: ${number}`);
    // setChoice(value);
    // You can perform your comparison here
    if (value === number) {
      // console.log("Selected number matches the prop number.");
      setCorrect(true);
      setCorrectBlockValue(value);
    } else if (value != number) {
      // console.log("Selected number does not match the prop number.");
      setIncorrect(value);
    }
  };

  const handleReset = () => {
    handleReady();
    setCorrect(false);
    setIncorrect(null); // Reset incorrect button value
    setCorrectBlockValue(null);
  };

  return (
    <div>
      <div className="max-w-full grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-10 2xl:gap-8 grid-flow-row gap-4 sm:gap-12 md:gap-16 sm:p-12 sm:m-auto mt-12 lg:mt-16">
        {values.map((value, index) => (
          <button
            disabled={correct}
            key={index}
            onClick={() => handleChoiceSelect(value)} // Pass the value to handleChoiceSelect
            className={`h-20 w-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-34 lg:h-34 lg:text-6xl text-5xl text-[#0c373c] font-extrabold mx-auto ${
              incorrect === value
                ? "bg-none border-[1px] border-[#ffdca1] text-[#ffedcd]"
                : correctBlockValue === value
                ? "bg-green-400 text-black hover:bg-green-300"
                : "bg-[#ffdca1]"
            } block text-center p-2 rounded-full hover:bg-[#ffedcd] hover:text-[#12292b] shadow-2xl`}
          >
            {incorrect === value ? "X" : value}
          </button>
        ))}
      </div>
      <div
        className={`${
          correct ? "flex" : "hidden"
        } flex-col text-[#182421] rounded-3xl p-4 w-1/4 h-54 sm:w-1/4 md:w-1/6 xl:w-1/12 mx-auto`}
      >
        <button className="text-3xl" onClick={handleReset}>
          <svg
            viewBox="0 0 21 21"
            xmlns="http://www.w3.org/2000/svg"
            fill="#ffffff"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g
                fill="none"
                fillRule="evenodd"
                stroke="#ffedcd"
                strokeLinecap="round"
                strokeLinejoin="round"
                transform="matrix(0 1 1 0 2.5 2.5)"
              >
                {" "}
                <path d="m3.98652376 1.07807068c-2.38377179 1.38514556-3.98652376 3.96636605-3.98652376 6.92192932 0 4.418278 3.581722 8 8 8s8-3.581722 8-8-3.581722-8-8-8"></path>{" "}
                <path d="m4 1v4h-4" transform="matrix(1 0 0 -1 0 6)"></path>{" "}
              </g>{" "}
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
};

NumberButton.propTypes = {
  number: PropTypes.number.isRequired, // Define 'number' prop type as a number and required
  handleReady: PropTypes.func.isRequired,
};

export default NumberButton;
