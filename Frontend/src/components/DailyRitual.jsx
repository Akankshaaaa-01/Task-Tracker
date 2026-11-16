import { useState } from "react";
import "../styles/DailyRitual.css"


function DailyRitual(){

    const [habits,setHabits]= useState([
     {id:1, title:"Morning pages", completed:false},
    { id: 2, title: "Matcha or coffee", completed: true },
    { id: 3, title: "Movement", completed: false },
    { id: 4, title: "Nourishing meal", completed: false },
    { id: 5, title: "Creative time", completed: false },
    { id: 6, title: "Be present", completed: false },
]);

      const completedHabits= habits.filter((h)=> h.completed);
    return (
        <div className="daily-ritual-wrap">
        <section className="daily-ritual" >
             <div className="paper-tape"></div>
                
                <div className="ritual-brand">
                <h3>ATELIER</h3>
                <p>CAFÉ AU QUOTIDIEN</p>
                <span>EST. 2024</span>
                </div>

                <h2>DAILY RITUAL</h2>

       
            {/* <p className="ritual-progress-text">
            {completedHabits.length} / {habits.length} complete
            </p> */}

            <div className="ritual-progress-track">
            <div
                className="ritual-progress-fill"
                style={{
                width: `${(completedHabits.length / habits.length) * 100}%`,
                }}
            />
            </div>
            {
                habits.map((habit)=>{
                    return (
                        <label key={habit.id}>
                            <input type="checkbox" 
                            checked={habit.completed}
                            onChange={()=>{
                                setHabits(
                                    habits.map((h)=>
                                    h.id===habit.id? {...h, completed: !h.completed} :h
                                    )
                                );
                            }}
                        />
                            <span className={habit.completed ? "habit-completed" : ""}>
                                {habit.title}
                                </span>
                        </label>
                    );
                })
            }

            <div className="ritual-footer">
            <p>A KINDER, MORE INTENTIONAL YOU</p>
            <span>✳ MADE WITH INTENTION ✳</span>
            </div>

                        
            <div className="ritual-barcode" aria-label="Decorative vintage barcode">
            <span>MERCI TOI</span>
            </div>

            <img
                className="ritual-seal"
                src="/images/seal.png"
                alt="Progress looks good on you wax seal"
                />

        </section>
        </div>
    );
}

export default DailyRitual;