import React, {useState, useEffect} from 'react';
import axios from "axios";
import './App.css';
import TarotCard from "./components/TarotCard"
import NameSearch from "./components/NameSearch"


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([]);
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

  return (
    <>
    <div className="App">
      <h1 className="Header">React Wars: Personnel Report</h1>
    </div>
    <NameSearch />
    <div>
      {characters.map((character, id) => {
        return (
          <div>
            <TarotCard 
            name={character.name}
            species={character.species}
            skin_color={character.skin_color}
            hair_color={character.hair_color}
            height={character.height}
            mass={character.mass}
            />
          </div>
        )
      })}
    </div>
    </>
  );
}

export default App;
