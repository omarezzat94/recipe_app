import React, { useState, useEffect } from "react";
import "./App.css";
import Recipe from "./Recipe.js";
import { Button, Navbar, Form, CardColumns } from "react-bootstrap";

function App() {
  const APP_ID = "dc3d691f";
  const APP_KEY = "d5cd505cbe187512f8889563afdffbb0";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };
  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">Recipe App</Navbar.Brand>

        <Form inline fixed="top" onSubmit={getSearch} onChange={updateSearch}>
          <Form.Control
            type="text"
            placeholder="Search"
            value={search}
            className="mr-sm-3"
          />
          <Button variant="dark" className="search-button" type="submit">
            Search
          </Button>
        </Form>
      </Navbar>
      <CardColumns className="mt-5">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </CardColumns>
    </div>
  );
}

export default App;
