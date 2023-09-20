import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import styles from './Detail.module.css'

export default function Detail() {

  const { id } = useParams();
  
  const [character, setCharacter] = useState({}); // Cambio: inicializar como objeto vacío

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacter(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({});
 }, [id]);

  return (
   <div className={styles.cardContainer}>
   <div className={styles.card}>
     <h2 className={styles.descripcion}>Details</h2>
     <h3 className={styles.descripcion}>Name:{character.name}</h3>
     <h3 className={styles.descripcion}>State:{character.status}</h3>
     <h3 className={styles.descripcion}>Species:{character.species}</h3>
     <h3 className={styles.descripcion}>Gender:{character.gender}</h3>
     <h3 className={styles.descripcion}>Origen:{character.origin?.name}</h3>
     {/*Se pregunta su character.origin existe?. Si existe trae la prop name, sino, no hacer nada */}
     <img src={character.image} alt={character.name} />
   </div>
 </div>
  );

}