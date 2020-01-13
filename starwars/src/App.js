import React, {useState, useEffect} from 'react';
import axios from "axios";
import './App.css';
import TarotCard from "./components/TarotCard"
import NameSearch from "./components/NameSearch"


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([]);
  var searchCharacters= ''
  useEffect(() => {
    axios
      .get('https://swapi.co/api/people/')
      .then(response => {
        console.log(response.data.results);
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  //this will be the imput area method and passed by props
  //right now it runs but when I input anything it breaks and says
  //that my character.map function is not a function suddenly
  function handleInput (e) {
    console.log(e.target.value)
    setCharacters({ searchCharacters: e.target.value })
  }

  let filteredCharacters = characters.filter((character) => {
    return character.name.toLowerCase().includes(searchCharacters.toLowerCase())
  })

  return (
    
    <>
    <div className="App">
      <h1 className="Header">React Wars: Personnel Report</h1>
    </div>
    <NameSearch handleInput = {handleInput} />
    <div>
      {filteredCharacters.map((character, id) => {
        return (
          
            <TarotCard 
            key={id} //don't know if this is working or not.
            name={character.name}
            species={character.species}
            skin_color={character.skin_color}
            hair_color={character.hair_color}
            height={character.height}
            mass={character.mass}
            />
         
        )
      })}
    </div>
    </>
  );
}

export default App;