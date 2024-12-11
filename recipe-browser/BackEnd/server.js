const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');
app.use(cors());
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Connecting to MongoDatabase
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@recipebrowser.r4ajv.mongodb.net/?retryWrites=true&w=majority&appName=RecipeBrowser');

const recipeSchema = new mongoose.Schema({
    name: String,
    time: String,
    ingredients: String,
    instructions: String
});

const Recipe = mongoose.model('Recipe', recipeSchema)

app.post('api/recipes', async (req,res)=>{
    const {name, time, ingredients, instructions} = req.body;

    const newRecipe = new Recipe({name, time, ingredients, instructions});
    await newRecipe.save();

    res.status(201).json({ message: 'Recipe Added', recipe: newRecipe });
});

app.get('api/recipes', async(req, res)=>{
    const recipes = await Recipe.find({});
    res.json(recipes);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});