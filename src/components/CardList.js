import React from "react";
import Card from "./Card";
//import "./CardList.css";

const CardList = ({characters}) => {

  const cardArray = characters.map((character, i) => {
    
    return (
      <Card
        key={i}
        name={characters[i].name}
        birth_year={characters[i].birth_year}
        gender={characters[i].gender}
        homeworld={characters[i].homeworld}
      
        height={characters[i].height}
        mass={characters[i].mass}
        hair_color={characters[i].hair_color}
        eye_color={characters[i].eye_color}
        films={characters[i].films}
      />
    );
  });
  return <div className='container'>{cardArray}</div>;
};
export default CardList;
