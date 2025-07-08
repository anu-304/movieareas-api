import Movie from "../models/movies.model.js";

export const MovieIndex = (req,res) => {
    res.send("Gett all movie list");
};

export const MovieCreate = async(req,res) => {
    //res.send("Create a movie");
    //console.log(req.body);

    const newMovie = new Movie({  //called as constructor
        title: req.body.title,
        desc: req.body.desc,
    });

    try {
        const movie = await newMovie.save();
        return res.status(201).json(movie); //201 - create  
    } catch (error) {
        return res.status(400).json({ message : error.message});
    }

   

    //return res.json(req.body);
};

export const MovieUpdate = (req,res) =>{
    res.send("Update a movie");
};

export const MovieDelete = (req,res) =>{
     res.send("Delete a movie");
};