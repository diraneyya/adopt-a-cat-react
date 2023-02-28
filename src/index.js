import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

// the array of animals to adopt which are objects with two properties
// each, a name and a picture
const animalsToAdopt = [
  {
    name: "Lucky",
    picture: "https://placekitten.com/200/287",
  },
  {
    name: "Symba",
    picture: "https://placekitten.com/200/139",
  },
  {
    name: "Léo",
    picture: "https://placekitten.com/200/90",
  },
  {
    name: "Milo",
    picture: "https://placekitten.com/200/194",
  },
  {
    name: "Charly",
    picture: "https://placekitten.com/200/179",
  },
];

// The Card React Function component
// expects two props: name and picture
const Card = ({ name, picture }) => (
  <div className="card">
    <h4>{name}</h4>
    <img src={picture} alt={name}></img>
  </div>
);

// testing :))))
const root = ReactDOM.createRoot(document.getElementById("root"));

// this is the callback for the map expression in "render" below
const animalToComponentMapping = ({ name, picture }) => (
  <Card name={name} picture={picture} />
);

root.render(
  // the container with a class of deck will render the cards as flex items
  // leading them to wrapping when the screen width is not enough.
  // the content of the deck div React element can be one of th following:
  // - a series of React elements/objects such as <h1> and <p> in JSX
  // - an array of React elements/objects by mapping the array of objects using
  //   a callback that takes the object and returns a JSX expression
  <>
    <h1>Adopt a Cat</h1>
    <div className="deck">{animalsToAdopt.map(animalToComponentMapping)}</div>
  </>
);
