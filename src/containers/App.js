import React from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
//import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      searchField: ""
    };
  }
  
  componentDidMount() {
    let characterList = this.state.characters;
    for (let i = 0; i < 16; i++) {
      async function getCharacter(){
        const character = await fetch(`https://swapi.co/api/people/${i + 1}/`);
        const characterInfo = await character.json();

        characterList.push(characterInfo);
      }
      getCharacter();
      
    }
  
    this.setState({ searchField: '' });
  
  }

  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };
  render() {
    const { characters, searchField } = this.state;

    const filterCharacters = characters.filter(character => {
      
      return character.name.toLowerCase().includes(searchField.toLowerCase());
    });
    
    
    return !characters ? (
      <h1>Loading, please wait...</h1>
    ) : (
      <div className="container">
        <h1>Star Wars Characters</h1>

        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList characters={filterCharacters} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
  
}
export default App;
