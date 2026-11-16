import express from "express";
import cors from "cors";

const app=express();
const PORT=5000;

app.use(cors({
    origin:"http://localhost:5173"
}));

app.get("/",(req,res)=>{
    res.send("Backend is running");
});

app.get("/api/tasks",(req,res)=>{
    const tasks=[
    {
      id: 1,
      title: "Complete project documentation",
      completed: false,
    },
    {
      id: 2,
      title: "Review today's priorities",
      completed: true,
    },
    {
      id: 3,
      title: "Practice React components",
      completed: false,
    },
];

res.json(tasks);
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);

})