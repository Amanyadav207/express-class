const express = require('express');
const app = express();

app.use(express.json());
app.use(middleware);
app.use(logger);

function middleware(req, res, next) {
    console.log("called");
    next();
}

function logger(req,res,next){
    console.log(req.method,res.bowser,req.url);
    next();
}


// Using the middleware
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

app.put("/courses/:id",(req,res)=>{
    let singleCourse = course.find(c => c.id === req.params.id);
    singleCourse.name = req.body.name;
    res.send(course);
})
app.delete("/courses/:id",(req,res)=>{
    let singleCourse= course.find(c => c.id === req.params.id);
    let index = course.indexOf(singleCourse);
    course.splice(index,1);
    res.send(course);
})



app.listen(3000,()=>{
    console.log("server is running on port 3000");
})