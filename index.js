import express from "express";
import routeNotif from "./routes/index.js";
import mongoose  from "mongoose";

const app = express()
const port = 3030
mongoose.connect("mongodb://localhost:27017/Ilkom",{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error',(error)=>console.log(error));
db.once('open',()=>console.log("Database Connceted"));
app.use(express.json());
app.use('/student',routeNotif);

app.listen(port, () =>{
    console.log(`Example app listening at http://localhost:${port}`)
})