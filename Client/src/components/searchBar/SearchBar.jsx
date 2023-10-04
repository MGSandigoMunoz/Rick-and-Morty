import React from "react";

import styles from './SearchBar.module.css'


export default function SearchBar(props) {//Entra la función onSearch como props
   //props = {onSearch}

   const [id, setId] = React.useState('');

   const handleChange = event => {
      setId(event.target.value) //Guarda el valor del input en el estado local id
   }

   const handleClick = event => {
      event.preventDefault();//Para que no recarge la página
      props.onSearch(id);
      setId('')    
   }

   const handleRandom = event => {

      const min = 1; // Valor mínimo
      const max = 826; // Valor máximo

      // Generar un número aleatorio dentro del rango
      const idAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;

      event.preventDefault();//Para que no recarge la página
      props.onSearch(idAleatorio);  
   }

   //Para limpiar el input

   return (
      <div>
         <input 
            className={styles.input}
            value={id}
            type="search"
            name="search"
            id = "search"
            onChange={handleChange}//Cada vez que el usuario hace un cambio se ejecuta la función
         />
         
         <button className={styles.button} onClick={handleClick}>Agregar</button> 
         {/* button recibe un callback de onSearch */}
         <button className={styles.button} onClick={handleRandom}>Random</button> 

      </div>
   );
}


    
