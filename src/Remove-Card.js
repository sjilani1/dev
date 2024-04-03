
import React from "react";
import Person from "./Person.js"; 



// import { Card, CardBody,  CardFooter, Image, Heading, Text, Divider, Button, ButtonGroup, Box, VStack} from '@chakra-ui/react'

function removeCard({ person, removeFromlist }) {
  return (

    <div className="card">
        <div className="card-content"> 
         <div className="info"> 
             <h1> {person.name} </h1>
             <p> {person.Location} </p>
             <p> {person.Age} </p>
             <p> {person.interests} </p>
         </div>
       
          {/* <img src={person.image} className="pic" /> */}
        </div>
    <div className="card-footer"> 
    <button onClick = {() => removeFromlist(person)}> Remove Match</button>
   
   
    </div>
  </div>
);
}


export default removeCard;