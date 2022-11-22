import React from "react";
import ToDo from "./ToDo";

const ToDoList = ({ toDoList, handleToggle, handleFilter }) => {
  const handleClick = (id) => {
    console.log(id);
    handleToggle(id);
  };
  return (
    <div>
      {toDoList.map((todo) => {
        return (
          <div  className="tasks" >
            <p style={{margin:"3px"}}>{todo.id}.</p>
            <p  style={{margin:"3px"}} className={todo.complete ? "todo strike" : "todo"}>
              {todo.task}
            </p>
            <button  style={{margin:"3px"}} className="btn" onClick={() => handleClick(todo.id)}>
            {
                todo.complete ? "Untick" : "Tick"
            }
            </button>
          </div>
        );
      })}
      {/* <button style={{margin: '20px'}} onClick={handleFilter}>Clear Completed</button> */}
    </div>
  );
};

export default ToDoList;
