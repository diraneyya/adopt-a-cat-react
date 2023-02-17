import React from 'react';
import ReactDOM from 'react-dom/client';

// React component
function Card() {
  console.log("I am rendering a Card using React");

  return (
    <div className="card">
        <h4>Lucky</h4>
        <img src="https://placekitten.com/200/287" alt="" />
    </div>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  [
    <Card />,
    <Card />,
    <Card />,
    <Card />,
  ]
)
