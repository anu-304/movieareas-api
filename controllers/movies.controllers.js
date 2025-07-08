import Movie from "../models/movies.model.js";

export const MovieIndex = async(req,res) => {
    //res.send("Gett all movie list");

    try {
        const movies = await Movie.find({});
        res.json(movies);
    } catch (error) {
        res.status(500).json({message : error.message});
    }
};

export const MovieCreate = async(req,res) => {
    //res.send("Create a movie");
    //console.log(req.body);

    const newMovie = new Movie({  //called as constructor  , new keyword is used only while creating a new obj
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

export const MovieDeatail = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if(movie == null){
            return res.status(404).json({ message : "cannot find movie"});
        }
        else{
            res.json(movie);
        }
    } catch (error) {
        return res.status(500).json({ message : error.message });
    }
}

export const MovieUpdate = async (req,res) =>{
    //res.send("Update a movie");

    try {
        const updatedMovie = await Movie.findOneAndUpdate(
            {_id : req.params.id},
            {
                title: req.body.title,
                desc : req.body.desc,
            },
            {
                new:true,
            }
        );
        res.status(200).json(updatedMovie);
        
    } catch (error) {
        res.status(400).json({message : error.message});
        
    }

};

export const MovieDelete = (req,res) =>{
     res.send("Delete a movie");
};