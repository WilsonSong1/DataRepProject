//Adding Recipes to Website
import React, {useState} from 'react';
import axios from 'axios';

const Post = () =>{

    const [name, setName] = useState('');
    const [time, setTime] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');


    const handleSubmit = (e) =>{
        e.preventDefault();
        const recipe = {name, time, ingredients, instructions};
        console.log(recipe);//DELETE
        axios.post('http:localhost:4000/api/recipes', recipe)
        .then(() => alert("Recipe Successfully added!"))
        .catch((error)=> console.error(error));
    };

    return(
        <form onSubmit={handleSubmit}>
        <input name="name" value={name} onChange={(e) =>{setName(e.target.value)}} placeholder="Name" />
        <input name="time" value={time} onChange={(e) =>{setTime(e.target.value)}} placeholder="Time to make" />
        <input name="ingredients" value={ingredients} onChange={(e) =>{setIngredients(e.target.value)}} placeholder="Ingredients" />
        <textarea name="instructions" value={instructions} onChange={(e) =>{setInstructions(e.target.value)}} placeholder="Instructions"></textarea>
        <button type="submit">Add Recipe</button>
      </form>
    );

};
export default Post;