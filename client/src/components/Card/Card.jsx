import React from "react";
import "../Card/card.css"


export const Card =({text})=> {
  return (
   <ul className="card-container" style={{ flexShrink: 1 }} >{text}</ul>
  )
}

export default Card
