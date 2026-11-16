import "../styles/WeeklyGoals.css";
function WeeklyGoals(){

    const goals=[
    { id: 1, title: "Stay consistent" },
    { id: 2, title: "Create without overthinking" },
    { id: 3, title: "Take care of my mind & body" },
    { id: 4, title: "Find beauty in the ordinary" },
  ];

  return (
    <section className="weekly-goals">
        <div className="weekly-goals-header">
             <h2>Weekly Goals</h2>
            <span>4 / 4 complete</span>
        </div>

        <div className="goals-list">
            {
                goals.map((goal)=>
                    <label key={goal.id} className="goal-item">
                        <input type="checkbox" defaultChecked />
                         <span>{goal.title}</span>
                    </label>
                )
            }
        </div>

    </section>
  );
}

export default WeeklyGoals;