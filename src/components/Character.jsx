export default function Character(props){
    const character = props.character
    console.log(character)
    return (
        <div key = {character.id}>
            <h2>{character.name}</h2>
            <img src = {character.image}/>
        </div>
    )
}