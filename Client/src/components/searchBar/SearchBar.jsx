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

   //Para limpiar el input

   return (
      <div>
         <input 
            className={styles.searchBar}
            value={id}
            type="search"
            name="search"
            id = "search"
            onChange={handleChange}//Cada vez que el usuario hace un cambio se ejecuta la función
         />
         
         <button onClick={handleClick}>Agregar</button> 
         {/* button recibe un callback de onSearch */}
         <hr className={styles.hr}/>

      </div>
   );
}


    
