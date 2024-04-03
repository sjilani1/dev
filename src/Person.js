import React from 'react';
import image from './Chris_Hemsworth_by_Gage_Skidmore_2_(cropped).jpeg'; 
<img src={require('./Chris_Hemsworth_by_Gage_Skidmore_2_(cropped).jpeg')} />

const Person = ({ person }) => {

    return ( 
        <div> 
            <p> Name: {person.name} </p>
            <p> Location: {person.Location} </p>
            <p> Age: {person.Age} </p>
            <p> Interests: {person.interests} </p>
            <img src={require('./Chris_Hemsworth_by_Gage_Skidmore_2_(cropped).jpeg')} />  




        </div>


    )
}; 
export default Person; 