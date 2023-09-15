
import Character from './Character'
function CharacterList (props){
    const {characters} = props
return (
    <div>
        {
characters.map((element, index) => {
    
    return(
      <div key = {index}>
        <Character character = {element}/>
      </div>
    )
  })
        }
    </div>
)
    
}
export default CharacterList;