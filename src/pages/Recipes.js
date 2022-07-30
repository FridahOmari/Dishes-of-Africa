import React, { useState, useEffect } from "react";
import ListItem from "../components/ListItem";
import AddButton from "../components/AddButton";
import Container from "react-bootstrap/Container";
import { Row, Col, Grid } from "react-bootstrap";

const Recipes = () => {
  let [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  let getRecipes = async () => {
    let response = await fetch("http://127.0.0.1:5000/recipes/");
    let data = await response.json();
    setRecipes(data);
  };

  return (
    <div className="container">
      <div className="row">
        {recipes.map((recipe, index) => (
          <div key={index} className="col-4">
            <ListItem key={index} recipe={recipe} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Recipes;
