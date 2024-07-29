import "./App.css";
import Footer from "./components/Footer";
import NumberButton from "./components/NumberButton";
import { numberInformation } from "../constants";
import { useState } from "react";

function App() {
  // const [notEmpty, setNotEmpty] = useState(false);
  const [number, setNumber] = useState(0);
  const [factNumber, setFactNumber] = useState(0);
  const [ready, setReady] = useState(false);

  const handleReady = () => {
    setReady(true);
    setNumber(Math.floor(Math.random() * 10));
    setFactNumber(Math.floor(Math.random() * 8));
  };

  return (
    <div className="bg-[#182421]  max-w-screen">
      <div className="min-h-screen w-full flex flex-col">
        <h1
          className={`text-[#ffc96c] sm:text-9xl text-7xl text-center font-extrabold px-4 sm:pt-28 py-8 w-3/4 mx-auto ${
            ready ? "hidden" : ""
          }`}
        >
          One to Ten
        </h1>
        <p
          className={`text-[#ffebd0] text-4xl text-center font-light p-4 w-3/4 lg:w-1/2 mx-auto ${
            ready ? "hidden" : ""
          }`}
        >
          Guess the number based on the general knowledge question provided.
          When you are ready to receive your clue click ready.
        </p>
        <p
          className={`text-[#ffebd0] text-3xl sm:text-4xl md:text-6xl mt-12 sm:mt-24 text-center font-light p-4 w-3/4 lg:w-1/2 mx-auto ${
            ready ? "flex" : "hidden"
          }`}
        >
          {numberInformation[number].riddles[factNumber]}
        </p>
        <button
          onClick={handleReady}
          className={`${ready ? "hidden" : "flex"} flex-col text-[#ffe2bc] 
          text-center text-3xl p-5 w-auto rounded-3xl hover:bg-[#ffbf4f] hover:text-[#182421] mx-auto mb-2 mt-8 border-[1px] border-[#ffcc74]`}
        >
          Ready
        </button>
        <div
          className={`w-full px-12 sm:px-20 pb-18 ${
            ready ? "flex" : "hidden"
          } flex-col`}
        >
          <NumberButton number={number + 1} handleReady={handleReady} />
        </div>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
