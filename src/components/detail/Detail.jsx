import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Detail() {

  const { id } = useParams();
  
  const [character, setCharacter] = useState({}); // Cambio: inicializar como objeto vacío

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacter(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({});
 }, [id]);

  return (
    <div>
        <h2>Detalles</h2>
        <h3>Nombre:{character.name}</h3>
        <h3>Estado:{character.status}</h3>
        <h3>Especie:{character.species}</h3>
        <h3>Género:{character.gender}</h3>
        <h3>Origen:{character.origin?.name}</h3>
        {/*Se pregunta su character.origin existe?. Si existe trae la prop name, sino, no hacer nada */}
        <img src={character.image} alt={character.name} />
    </div>
  );

}