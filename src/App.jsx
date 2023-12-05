import "./index.css";
import React, { useState, useEffect, useRef } from "react";
const App = () => {
  const inputRef = useRef(null)
  const handleCopy = () => {
    inputRef.current.select();
    document.execCommand('copy');
  }
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  useEffect(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "1234567890";
    if (characterAllowed) str += "!@#$%^&*(){}";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(randomIndex);
    }

    setPassword(pass);
  }, [length, numberAllowed, characterAllowed]);

  return (
    <>
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-md-6 mx-auto bg-dark shadow rounded  p-5 text-secondary ">
            <h3 className="text-center">Password Generator</h3>
            {/* <hr className="" /> */}
            <div className="content mt-5">
              <div className="password">
                <input
                  type="text"
                  ref={inputRef}
                  className="my_password bg-dark border text-info border-info w-75"
                  value={password}
                  readOnly
                />
                <button  className="btn mb-2  btn-info" onClick={handleCopy}>Copy</button>
              </div>
              <div className="d-flex justify-end mt-4 ">
                <input
                  type="range"
                  value={length}
                  onChange={(e) => setLength(e.target.value)}
                  className=""
                  min={8}
                  max={50}
                />
                <h5 className="mx-2">Length : {length}</h5>

              <div className="px-2">
              <input
                  type="checkbox"
                  className=""
                  onChange={() => setNumberAllowed((prev) => !prev)}
                  value={numberAllowed}
                />
                <label htmlFor="" className="px-2">Number </label>

              </div>
              <div className="px-2">
              <input
              
                  type="checkbox"
                  onChange={() => setCharacterAllowed((prev) => !prev)}
                  value={characterAllowed}
                />
                <label htmlFor="" className="px-2">Character</label> 
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
