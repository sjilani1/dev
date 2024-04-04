
import React from "react";
import Person from "./Person.js"; 
<img src={require('./Chris_Hemsworth_by_Gage_Skidmore_2_(cropped).jpeg')} />


// import { Card, CardBody,  CardFooter, Image, Heading, Text, Divider, Button, ButtonGroup, Box, VStack} from '@chakra-ui/react'

function Card({ person, addToMatch }) {
  return (

    <div className="card">
        <div className="card-content"> 
         <div className="info"> 
             <h1> {person.name} </h1>
             <p> {person.Location} </p>
             <p> {person.Age} </p>
             <p> {person.interests} </p>
         </div>
         <div className="back"> 
         
         <img src={require('./Chris_Hemsworth_by_Gage_Skidmore_2_(cropped).jpeg')} />
          {/* <img src={person.image} className="pic" /> */}
          </div>
        </div>
    <div className="card-footer"> 
    <button onClick={() => addToMatch(person)}>Add to Match List</button>
   
   
    </div>
  </div>
);
}


export default Card;