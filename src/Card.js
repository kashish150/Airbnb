import React, { useState } from 'react';
import './Card.css';

function Card(props) {
 return <div className="card">
    <img src={props.src}></img>
    <div class="cardinfo">
   <h1>{props.title}</h1>
   <h2>{props.des}</h2>
   <h3>{props.price}</h3>
   </div>
</div>
}
export default Card;