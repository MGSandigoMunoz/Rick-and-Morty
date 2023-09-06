import Card from './Card';

export default function Cards({characters,onClose}) {//characters es un arreglo con los personajes.La envía app
   return (
   <div>
      {characters.map((character)=>(
         <Card 
            key = {character.id}
            name = {character.name}
            status = {character.status}
            species= {character.species}
            gender={character.gender}
            origin={character.origin.name}
            image = {character.image}
            onClose={onClose}
            id = {character.id}
         />
      ))}
   </div>
   );
}
