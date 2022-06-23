import React from "react";
import '../styles/Card.css';

function Card(props) {
  return(
    <div className="card">
      <img 
        className="icon-card"
        src={require(`../images/icon-${props.image}.svg`)}
        alt='icon'
      />
      <div className="card-text">
        <h1 className="card-title">
          {props.title}
        </h1>
        <p className="card-description">
          {props.description}
        </p>
        <button className="card-button">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Card;