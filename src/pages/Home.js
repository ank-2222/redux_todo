import React, { useState } from "react";
import "./Home.css";

import List from "../components/List";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../actions";
function Home() {
  const [input, setInput] = useState(""); 
  
  const dispatch = useDispatch();
  //getting list
  const itemList = useSelector((state) => state.todoReducer.list);
    //add item function
  const addItemFun = () => {
    if (input) {
      dispatch(addTodo(input));
      setInput("");
    } else {
      alert("add Item first!");
    }
  };
  return (
    <div>
      <div className="section1">
        <h2 className="title">Add You Item Here..🔖</h2>
        <div className="addMenu">
          <input
            className="addItem"
            type="text"
            placeholder="Add Item.."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></input>
          <button className="addBtn" onClick={addItemFun}>
            +
          </button>
        </div>
      </div>

      <div>
        {itemList?.map((elem) => {
          return <List title={elem.data} id={elem.id} />;
        })}
      </div>
    </div>
  );
}

export default Home;
