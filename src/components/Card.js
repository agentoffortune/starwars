import React from "react";
import "./Card.css";

const Card = ({name, birth_year, gender, homeworld, height, mass, hair_color, eye_color, films}) => {

        return (
           <div className='card'>
            <h2>{ name }</h2>
            <p>
                Born: { birth_year } <br />
                
                Gender: { gender } <br />
                Height: { height } cm <br />
                Weight: { mass } kg <br />
                Hair Color: { hair_color } <br />
                Eye Color: { eye_color } <br />
                
            </p>
        </div> 
        )

}
export default Card;