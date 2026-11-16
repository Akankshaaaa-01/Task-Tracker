
import { useState, useEffect } from "react";
import TaskList from "./TaskList";
import DailyRitual from "./DailyRitual";
import WeeklyGoals from "./WeeklyGoals";
import QuoteCard from "./QuoteCard";
import Moodboard from "./Moodboard";
import "../styles/Dashboard.css";

function Dashboard() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/tasks")
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch((err) => {
        console.error("Error fetching tasks: ", err);
      });
  }, []);

  return (
    <main className="main-content">

      {/* Welcome header */}
      <header className="welcome-header">
        <div>
          <p className="eyebrow">YOUR PERSONAL WORKSPACE</p>
          <h2>Good morning.</h2>
          <p className="page-description">
            A little progress each day adds up to something beautiful.
          </p>
        </div>

        <p className="welcome-date">A DAY TO MAKE YOURS</p>
      </header>

      {/* Main workspace */}
      <div className="workspace-layout">

        {/* Left side: Banner + Tasks */}
        <div className="workspace-left">

          <section className="focus-banner">
            <div className="focus-image">
              <img
                src="/images/focus-banner.jpg"
                alt="A quiet, inspiring café"
              />

              <div className="focus-banner-overlay">
                <p>A LITTLE SPACE FOR YOURSELF</p>
                <h2>Make room for what matters.</h2>
                <span>Slow down. Focus. Begin again.</span>
              </div>
            </div>

            <div className="focus-date">
              <p>TUE</p>
              <h3>APR 23</h3>
              <span>SLOWER</span>
              <span>BRIGHTER</span>
              <span>KINDER</span>
            </div>
          </section>

          <section className="tasks-section">
            <div className="section-header">
              <div>
                <p className="eyebrow">YOUR DAILY FOCUS</p>
                <h2>Today's Tasks</h2>
              </div>

              <button className="add-task-button">
                + Add task
              </button>
            </div>

            <TaskList tasks={tasks} />
          </section>

        </div>

        {/* Right side: Daily Ritual */}
        <DailyRitual />

      </div>

      {/* Bottom scrapbook row */}
      <section className="scrapbook-bottom">
        <WeeklyGoals />
        <QuoteCard />
        <Moodboard />
      </section>

    </main>
  );
}

export default Dashboard;
