import { NavLink } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

import styles from './Card.module.css';



function Card (props) {

//Estado local favoritos
    const [isFav, setIsFav] = useState(false);

//Hace el seteo en el estado que es favorito cada que entre al componente card y no se pierda cuando entre a otro componente como about
// eslint-disable-next-line   
useEffect(() => {
        props.myFavorites.forEach((fav) => {
           if (fav.id === props.id) {
              setIsFav(true);
           }
        });
        // eslint-disable-next-line  
     }, [props.myFavorites]);

//Manejo de favoritos

    const handleFavorite = (event) => {//Si el character era favorito, se remueve, sino, se agrega

        if (isFav) {
        setIsFav(false);
        props.removeFav(props.id);
         // Llama a la función removeFav con el ID como argumento
        } else {
        setIsFav(true);
        props.addFav(props);
        }
    };
    
  return(

        <div className={styles.card}>

            {/* BOTÓN DE FAVORITO */}
            {isFav ? (
                <button className={styles.button} onClick={handleFavorite}>❤️</button>
                ) : (
                <button className={styles.button} onClick={handleFavorite}>🤍</button>
            )}
            
            
            <button className={styles.button} onClick={() => props.onClose(props.id)}>X</button>
            
            <div className={styles.cardsContainer}>

                <div className={styles.descripcion}>  
                    <h2><NavLink className={styles.nav} to={`/detail/${props.id}`}>{props.name}</NavLink></h2>
                    <hr/>
                    <h2>{props.status}</h2>
                    <h2>{props.species}</h2>
                    <h2>{props.gender}</h2>
                    <h2>{props.origin}</h2> 
                </div>
                <img src={props.image} alt={props.name} className={styles.img}/>   

            </div>

        </div>
   );
}

const mapStateToProps= (state) => {//Es lo que tomo del estado global y entran por props a card, por meido de estado del reducer
    return {
        myFavorites: state.myFavorites,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addFav: (character) => {
            dispatch(addFav(character)); // Despacha  addFav con el personaje como argumento
        },
        removeFav: (id) => {
            dispatch(removeFav(id)); // Llama a removeFav con el ID como argumento
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card); //Conecta función con componente




