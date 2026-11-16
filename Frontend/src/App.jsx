import {useState} from "react";
import "./App.css"
import Sidebar from "./components/Sidebar"
import Dashboard from "./components/Dashboard";



function TaskCard({task, isCompleted, onToggle}){
  return(
    <article className="task-card">
      {/* photo section */}

      <div className="task-photo">
        <img src={task.image} alt={task.title} 
        />

        <span className="photo-number">0{task.id}</span>

        {/* clicking on button compltes or repons the task */}

        <button className={
          isCompleted? "fav fav-active": "fav"
        }
        onClick={onToggle} aria-label={isCompleted? "Mark task as incomplete": "Mark task as complete"}
        >
          {isCompleted ? "✓" : "♡"}
        </button>
      </div>

      {/* text and details below photo */}

      <div className="task-content">
        <h3 className={isCompleted?"completed-title" : "" }> {task.title}</h3>

        {/* categorly labels */}
        <div className="tag-row">
          <span className="tag sage">{task.category}</span>
           <span className="tag blush">{task.type}</span>
        </div>

        <p>{task.description}</p>

        {/* bottom row of card */}

        <div className="task-footer">
          <span>
           
          </span>
        </div>
      </div>
    </article>
  )
}

function App() {
  return (
    <div className="app">
     <Sidebar/>
     <Dashboard/>
    </div>
  );
}

export default App;