import React, { useState } from "react";

function InputArea(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    newValue && setInputText(newValue);
  }

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} />
      <button
        onClick={() => {
          if (inputText.trim()!==''){
          props.onAdd(inputText);
          setInputText("");}
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
