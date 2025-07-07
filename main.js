import express from "express";
import movieRoutes from "./routes/movies.route.js";

const app = express();
const PORT = 7068;

app.get("/", (req,res)=>{
    res.json({msg: "Hello interviewees"});
});

app.use('/movies', movieRoutes);

app.listen(PORT, () => {
    console.log(`The server is running at http://localhost:${PORT}`)
})