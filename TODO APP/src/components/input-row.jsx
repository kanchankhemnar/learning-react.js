import { useState } from "react";

function Input({ handleChange }) {
  //text change
  let [text, textState] = useState([]);
  const OnTextChange = (event) => {
    textState(event.target.value);
  };
  //date change
  let [date, dateState] = useState([]);
  const OnDateChange = (event) => {
    dateState(event.target.value);
  };

  const addItem = () => {
    if (text!="" && date!="") {
    handleChange(text, date);
    
    textState("");
    dateState("");
    }
  };
  return (
    <>
      <div className="container text-center ">
        <div className="row">
          <div className="col">
            <input
              type="text"
              placeholder="Enter task"
              id="inp123"
              onChange={OnTextChange}
              value={text}
            />
          </div>

          <div className="col">
            <input
              type="date"
              id="date123"
              onChange={OnDateChange}
              value={date}
            />
          </div>

          <div className="col">
            <button
              type="button"
              className="btn btn-success my-button"
              onClick={addItem}
            >
              Add
            </button>
          </div>
        </div>
      </div>
      <br />
    </>
  );
}

export default Input;
