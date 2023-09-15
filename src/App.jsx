import { useEffect, useState} from "react"
import CharacterList from './components/CharacterList'
function App() {
  
  const [characters, setCharacters] = useState([]);

  useEffect( () => {

    async function getData (){
      const response = await fetch('https://rickandmortyapi.com/api/character')
      const data = await response.json();
      setCharacters(data.results);
      
    }

    getData();
  }, [])
  
  
  return (
    
    <div>
      <CharacterList characters = {characters}/>
    </div>
  )
}

export default App
