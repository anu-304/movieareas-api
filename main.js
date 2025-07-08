import express from "express";
import movieRoutes from "./routes/movies.route.js";
import connectDB from "./lib/db.js";

const app = express();
const PORT = 7068;


//data understanding middlerwares
app.use(express.json());
app.use(express.urlencoded({extended: true}));


//connect db
connectDB();

app.get("/", (req,res)=>{
    res.json({msg: "Hello interviewees"});
});

app.use("/movies", movieRoutes);

app.listen(PORT, () => {
    console.log(`The server is running at http://localhost:${PORT}`)
})