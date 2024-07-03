const express = require('express');
const app = express();

app.use(express.json());

let course = [
    {id: "1", name: "java"},
    {id: "2", name: "python"},
    {id: "3", name: "nodejs"},
    {id: "4", name: "reactjs"}
];

app.get('/courses',(req,res)=> {
    res.json(course);
})
app.post("/courses",(req,res)=>{
    console.log(req.body);
    let singleCourse = {
        id: course.length + 1,
        name: req.body.name
    }

    course.push(singleCourse);
    res.send(course);
})

app.listen(3000,()=>{
    console.log("server is running on port 3000");
})