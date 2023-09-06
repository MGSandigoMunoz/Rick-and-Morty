import React from 'react';


export default function SearchBar({onSearch}) {

   const [id,SetId] = React.useState(''); //Creación estado local llamado id

   const handleChange = (event) =>{
      SetId(event.target.value) //Guarda el valor del input en el estado local id
   }

  

   return (
      <div>
          <input
           type='search'
           onChange={handleChange}
           value={id}
           />
         <button onClick={()=>onSearch(id)}>Agregar</button> 
      </div>
   );
}
