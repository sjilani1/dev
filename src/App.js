import "./App.css";
import { useState } from "react";
import people from "./people.json";
import Person from "./Person.js"; 
import Card from './Person-Card.js';
import removeCard from "./Remove-Card.js";


/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
people.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [match, setMatch] = useState([]); 
  const [ageFilter, setageFilter] = useState(''); 
  const [locFilter, setlocFilter] = useState(''); 
  const [intFilter, setintFilter] = useState(''); 
  const [sortBy,setSortBy ] = useState(''); 
 
 



  // const addToMatch = (person) => {
  //   setMatch([...match,person]);
  // }; 

  const addToMatch = (person) => {
    if (!match.some(item => item.name === person.name)) {
      setMatch([...match, person]);
      
    } 
  };


  const removeFromlist = (person) => { 
    const updatedmatch = match.filter((item) => item.name != person.name); 
    setMatch(updatedmatch)
  }

  const SortPeople = (criteria) => {
    const sortedPeople = [...people]; 
    if (criteria === 'Age') { 
      sortedPeople.sort((a,b) => a.Age - b.Age)
    }
    else if (criteria === 'A to Z') { 
      sortedPeople.sort((a,b) => a.name.localeCompare(b.name));
    }
    return sortedPeople; 
  }; 

  

  const filteredPeople = SortPeople(sortBy).filter((person) => { 

    if (ageFilter && person.Age != parseInt(ageFilter)) { 
    return false; }
  

    if (locFilter && person.Location.toLowerCase() != locFilter.toLowerCase()) {
    return false; } 

    if (intFilter && !person.interests.toLowerCase().includes(intFilter.toLowerCase())) {
      return false; 
    }
    return true; } 
  ); 

  const resetFilters = () => {
    setageFilter('');
    setlocFilter('');
    setintFilter('');
    setSortBy('');
  };

  return (
    <div className="App">
      <h1>Dating Profile</h1> 

      <div className="filters"> 
      
      <input type="text" 
        placeholder="filter by age"
        aria-label="filter by age input"
        value={ageFilter}
        onChange={(e) => setageFilter(e.target.value)} />

      <input type="text" 
        placeholder="filter by location"
        aria-label="filter by location input"
        value={locFilter}
        onChange={(e) => setlocFilter(e.target.value)} />

      <input type="text" 
        placeholder="filter by interest"
        aria-label="filter by interest input"
        value={intFilter}
        onChange={(e) => setintFilter(e.target.value)} />
    

      <div className="sort-dropdown"> 
        <label htmlFor="Sort" aria-label="Sort by dropdown"> Sort By: </label>
        <select id="sort" value={sortBy} onChange={(e) => setSortBy(e.target.value)}> 
          <option value="" aria-label="none"> None </option>
          <option value="Age" aria-label="age"> Age </option>
          <option value="A to Z" aria-label="A to Z"> A to Z </option>
        
    
        </select>

      </div>
      <button className="reset" aria-label="reset filter button" onClick={resetFilters}> Reset Filters </button>
      </div>

      <div className="match-sort"> 
      

      <div className="matches"> 
        <h2> Matches</h2>
        <div className="match-card"> 

       {filteredPeople.map((person, index) => ( 
       
        <Card aria-label={person} key={index} person={person} addToMatch={addToMatch}  />
        
       
        // <Card maxW='sm'> 
        //     <Image
        //      src='/Users/merziajilani/Desktop/cs1300/dev/images/anika.png'
        //       borderRadius='lg' width={40} height={40}/>  
        //     <Box display={'flex'} flex={1} justifyContent={'space-between'}> 
        //       <VStack aligh={'stretch'} textAlign={'left'} padding={'5%'} mt='6' spacing='3'>
        //           <Heading size='md'>{person.name}</Heading>
        //            <Text> {person.Location} </Text>
        //           <Text> {person.Age} </Text>
        //           <Text> {person.interests} </Text>
          
        //        </VStack>
        //   <Divider />
        //   <CardFooter>
        //       <ButtonGroup spacing='2'>
        //       <Button variant='solid' colorScheme='blue' onClick={addToMatch} >
        //          Add To Match 
        //       </Button>
        //       </ButtonGroup> 
        //   </CardFooter>
        //   </Box>
         
        //   </Card>
  
        
      )) }
      </div>
       </div>

      <div className="match-aggregator">
        <h2>Match-List</h2>
        <ul> 
          {match.map((person,index) => ( 
            <div className="removeCard"> 

            <div className="card-content"> 
            <div className="info"> 
           
            <h1> {person.name} </h1>
            
             </div>
             <div className="back"> 
             <p> {person.Location} </p>
             <p> {person.Age} </p>
             <p> {person.interests} </p>
             </div>
             </div>

             <div className="card-footer" aria-label="remove from list button"> 
             <button onClick = {() => removeFromlist(person)}> Remove Match</button>
             </div>
   
   
      
            
            
            
            </div>
           
           

            // <li key={index}> 
            // <Person person= {person}  />
            // <button onClick = {() => removeFromlist(person)}> Remove Match</button>
            // </li>
          ) )}
         
        </ul>
        <p> Total matches: {match.length} </p>
        {/* TODO: render a list of people in the match-list */}
      </div>
      </div>
    </div>
  );
}

export default App;


