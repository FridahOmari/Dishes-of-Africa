import React from "react";
import { Link } from "react-router-dom";

let getDish = (recipe) => {
  let dish = recipe.dish;
  console.log(dish);
  return dish;
};

let getImage = (recipe) => {
  let image = recipe.image;
  console.log(image);
  return <img src={image} />;
};

let getIngredients = (recipe) => {
  let ingredients = recipe.ingredients;
  console.log(ingredients);
  return (
    <div className="container">
      {ingredients.map((ingredients, i) => (
        <div className="row" key={i}>
          {console.log(ingredients)}
          <p className="mb-0">{ingredients}</p>
        </div>
      ))}
    </div>
  );
};

let getPreparations = (recipe) => {
  let preparations = recipe.preparations;
  console.log(preparations);

  return (
    <div>
      {preparations.map((steps, i) => (
        <div key={i}>
          {console.log(steps.step)}
          <p>{steps.step}</p>
        </div>
      ))}
    </div>
  );
};

const ListItem = ({ recipe }) => {
  console.log(recipe);
  return (
    <div className="item">
      <Link className="item-link" to={`/recipe/${recipe.id}`}>
        <div className="recipes-list-item">
          <div className="dish-name">
            <h4>{getDish(recipe)}</h4>
          </div>
        </div>
      </Link>
      <div className="dish-image">
        <div>{getImage(recipe)}</div>
      </div>
      <div className="ingredients">
        <h4>Ingredients</h4>
        <div>{getIngredients(recipe)}</div>
      </div>
      <div className="preparations">
        <h4>Preparations</h4>
        <div>{getPreparations(recipe)}</div>
      </div>
    </div>
  );
};
export default ListItem;
