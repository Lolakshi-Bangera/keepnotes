const express= require('express')
const notes=require('./data/note')
const dotenv=require("dotenv")

const PORT=process.env.PORT||5000;
const app= express()
app.get("/",(req,res)=>{
   res.send("API is running...")
})
app.get('/api/notes',(req,res)=>{
   res.json(notes)
})

app.get("/api/notes/:id",(req,res)=>{
   const note=notes.find((n)=>n._id===req.params.id)
   res.json(note)
})
app.listen(PORT, console.log(`Server started at port ${PORT}`))