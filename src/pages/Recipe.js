import React, { useEffect, useState } from 'react'
//import Recipes from '../assets/data'
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'
import { Link } from 'react-router-dom'


const Recipe = ({ match, history }) => {
    let RecipeId = match.params.id

    let [Recipe, setRecipe] = useState(null)

    //let Recipe = Recipes.find(Recipe => Recipe.id == RecipeId)

    useEffect(() => {

        getRecipe()
    }, [RecipeId])

    let getRecipe = async () => {
        if (RecipeId === 'new') return
        let response = await fetch(`http://127.0.0.1:5000/Recipes/${RecipeId}`)
        let data = await response.json()
        setRecipe(data)
    }

    const createRecipe = async () => {


        await fetch(`http://127.0.0.1:5000/Recipes/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...Recipe, 'updated': new Date() })
        })
    }


    const updateRecipe = async () => {
        await fetch(`http://127.0.0.1:5000/Recipes/${RecipeId}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...Recipe, 'updated': new Date() })
        })
    }

    const deleteRecipe = async () => {
        await fetch(`http://127.0.0.1:5000/recipes/${RecipeId}/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Recipe)
        })
        history.push('/')
    }

    let handleSubmit = () => {
        if (RecipeId !== "new" && !Recipe.body) {
            deleteRecipe()
        } else if (RecipeId !== "new") {
            updateRecipe()
        } else if (RecipeId === 'new' && Recipe !== null) {
            createRecipe()
        }

        history.push('/')
    }


    return (
        <div className="container recipe">
            <div className="recipe-header">
                <h3>
                    <Link to={'/'}>
                        <ArrowLeft onClick={handleSubmit} />
                    </Link>
                </h3>
                {RecipeId !== 'new' ? (
                    <button onClick={deleteRecipe}>Delete</button>
                ) : (
                    <button onClick={handleSubmit}>Done</button>
                )}

            </div>
            <textarea onChange={(e) => { setRecipe({ ...Recipe, 'body': e.target.value }) }} placeholder="Title" value={Recipe?.body}></textarea>
        </div>
    )
}

export default Recipe
