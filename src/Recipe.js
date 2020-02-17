import React from "react";
import { Card } from "react-bootstrap";
const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <Card className="shadow-sm rounded" style={{ width: "20rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title className="mb-2">{title}</Card.Title>
        <Card.Text>
          {ingredients.map(ingredient => (
            <li>{ingredient.text}</li>
          ))}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Recipe;
