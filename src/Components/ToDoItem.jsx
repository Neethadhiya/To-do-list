import React from "react";

function ToDoItem(props) {
  return (
    <div>    
    
      <div>
        <li style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span>{props.text}</span>
        <div>
          <i className="fa fa-trash" aria-hidden="true" onClick={() => {
            props.onChecked(props.id);
          }}></i>
        </div>
        </li>

</div>


    </div>
  );
}

export default ToDoItem;

