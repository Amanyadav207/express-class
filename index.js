const express = require('express');
const app = express();

let course = [
    {id: "1", name: "java"},
    {id: "2", name: "python"},
    {id: "3", name: "nodejs"},
    {id: "4", name: "reactjs"}
];

app.get('/courses',(req,res)=> {
    res.json(course);
})

app.listen(3000,()=>{
    console.log("server is running on port 3000");
})