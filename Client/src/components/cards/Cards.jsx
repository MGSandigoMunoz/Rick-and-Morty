import Card from '../card/Card';

import styles from './Cards.module.css';

export default function Cards({characters,onClose}) {//characters es un arreglo con los personajes.La envía app
   return (
   
      <div className={styles.cardsContainer}> 
      {characters.map((character)=>(
         <Card 
            key = {character.id}
            name = {character.name}
            status = {character.status}
            species= {character.species}
            gender={character.gender}
            origin={character.origin.name}
            image = {character.image}
            onClose={()=> onClose(character.id)}
            id = {character.id}
         />
      ))}
      </div>
   );
}

