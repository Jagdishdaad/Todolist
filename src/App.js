import "./App.css";
import React, { useState } from "react";
import Itemlist from "./Itemlist.js";

function App() {
  const [inputList, setinputList] = useState("");
  const [inputdate, setinputdate] = useState("");
  const [Items, setItems] = useState([]);

  const store = (e) => {
    setinputList(e.target.value);
  };

  const store2 = (e) => {
    setinputdate(e.target.value);
  };

  const listOfItems = () => {
    if (inputList === "") return;
    else
      setItems((oldItems) => {
        return [
          ...oldItems,
          { text: inputList, iscomplete: "false", deadline: inputdate },
        ];
      });

    setinputList("");
  };

  const deleteIt = (id) => {
    let newArr = [...Items];
    newArr[id].iscomplete = "true";
    return setItems(newArr);
  };

  return (
    <div className="full_page">
      <div className="main_page">
        <h1>ToDo List</h1>
        <div className="Add_to_list">
          <input
            type="text"
            value={inputList}
            placeholder="Add a item"
            onChange={store}
          ></input>
        </div>

        <div className="Deadline_date">
          <span>Deadline :-</span>
          <input type="date" onChange={store2}></input>
          <button onClick={listOfItems}>+</button>
        </div>

        <ol>
          {Items.map((e, index) => {
            return (
              <Itemlist
                key={index}
                id={index}
                text={e.text}
                deadline={e.deadline}
                iscomplete={e.iscomplete}
                onSelect={deleteIt}
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default App;
