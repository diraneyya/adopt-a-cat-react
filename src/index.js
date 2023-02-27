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

// The Card React Function component, expects two props: "name" and "picture"
const Card = ({name , picture}) => {
  // "hidden" is a state variable that will continue to exist through the lifetime
  // of the component. It has an initial value of "false" and can have its value
  // changed at any time using the setter function "setHidden"
  let [hidden, setHidden] = React.useState(false);
  
  function makeCardHidden() {
    // TODO: implement me, use the "hidden" state to hide card, do not assign
    // directly, use the setter function instead
  }

  // TODO: add conditional logic to hide card according to the value of the state
  // variable "hidden"
  return (
    <div className="card">
      <h4>{name}</h4>
      <img src={picture} alt={name}></img>
      <br /><button onClick={makeCardHidden}>hide me</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

// this is the callback for the map expression in "render" below
function animalToComponentMapping(object) {
  return <Card name={object.name} picture={object.picture} />
}

root.render(
  // the container with a class of deck will render the cards as flex items
  // leading them to wrapping when the screen width is not enough.
  // the content of the deck div React element can be one of th following:
  // - a series of React elements/objects such as <h1> and <p> in JSX
  // - an array of React elements/objects by mapping the array of objects using
  //   a callback that takes the object and returns a JSX expression
  <>
    <h1>Adopt a Cat</h1>
    <div className="deck">
      { animalsToAdopt.map( animalToComponentMapping ) }
    </div>
  </>
);
