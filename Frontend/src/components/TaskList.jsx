import "../styles/TaskList.css";

const taskImages = {
  1: "/images/planning.jpg",
  2: "/images/journaling.jpg",
  3: "/images/reading.jpg",
};

function TaskList({ tasks }) {
  return (
    <div className="task-list">
      {tasks.map((task) => {
        return (
          <article className="task-card" key={task.id}>
            <div className="task-card-image">
              <img
                src={taskImages[task.id] || "/images/moodboard.jpg"}
                alt=""
              />

              <span className="task-number">
                {String(task.id).padStart(2, "0")}
              </span>
            </div>

            <div className="task-card-content">
              <h3>{task.title}</h3>

              <div className="task-card-footer">
                <span>
                  {task.completed ? "Completed" : "In progress"}
                </span>

                <span
                  className={`task-check ${task.completed ? "checked" : ""}`}
                  aria-label={task.completed ? "Completed" : "Not completed"}
                >
                  {task.completed ? "✓" : ""}
                </span>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default TaskList;
