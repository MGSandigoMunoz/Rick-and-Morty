import { useState } from "react";
import { connect } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions";
import { useDispatch } from "react-redux"; // Importa useDispatch

import Card from "../card/Card";

import styles from './Favorites.module.css'

function Favorites({ myFavorites, onClose }) {

  const [aux, setAux] = useState(false);

  const dispatch = useDispatch(); // Obtiene useDispatch

    const handleOrder= (event) =>{
    // Usa dispatch para despachar la acción y pasa el valor seleccionado
    dispatch(orderCards(event.target.value));
    setAux(!aux); // Cambia el estado auxiliar
  }

  function handleFilter(event) {
    // Usa dispatch para despachar la acción y pasa el valor seleccionado
    dispatch(filterCards(event.target.value));
  }

  return (
    <div className={styles.favoritebackground}>
      <div >
        <select className={styles.filter} onChange={handleOrder}>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
        
        <select className={styles.filter} onChange={handleFilter}>
        <option value="All">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>

      <div  >
      <div className={styles.cardsContainer}>
        {myFavorites.map((character) => (
          <Card
            key={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin}
            image={character.image}
            onClose={() => onClose(character.id)}
            id={character.id}
          />
        ))}
        </div>
        
      </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { myFavorites: state.myFavorites };
};

export default connect(mapStateToProps, null)(Favorites);
