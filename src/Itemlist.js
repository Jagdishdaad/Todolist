import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import "./Itemlist.css";

const Itemlist = (props) => {
  return (
    <div className="todo_style">
      <span
        onClick={() => {
          props.onSelect(props.id);
        }}
      >
        <DeleteIcon className="deleteIcon" />
      </span>
      <div className="list">
        <li
          style={{
            textDecoration:
              props.iscomplete === "true" ? "line-through" : "none",
          }}
        >
          {props.text}
        </li>

        <li>{props.deadline}</li>
      </div>
    </div>
  );
};

export default Itemlist;
