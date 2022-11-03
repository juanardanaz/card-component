import React from "react";
import '../styles/Card.css';

function Card(props) {
  return(
    <div className={props.className}>
      <img 
        className='icon-card'
        src={require(`../images/icon-${props.image}.svg`)}
        aria-hidden="true"
        alt=''
      />
      <div className='card-text'>
        <h2 className='card-title'>
          {props.title}
        </h2>
        <p className='card-description'>
          {props.description}
        </p>
        <a href="#" className='card-button button'>
          Learn More
        </a>
      </div>
    </div>
  );
}

export default Card;