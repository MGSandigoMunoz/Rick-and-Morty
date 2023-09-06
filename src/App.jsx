import './App.css';
import Cards from './components/Cards.jsx';
import axios from 'axios';
import Nav from './components/Nav.jsx';//Importa Nav
import React from 'react';



function App() {

   const [characters,setCharacters] = React.useState([])


   function onSearch(id) {
   axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
   });
}

   const onClose = (id) => {

      const idNumero = parseInt(id)

      setCharacters (characters.filter((character)=>{
         return character.id !== idNumero
      }))
}

 
;// Actualiza el estado local characters con el array filtrado


   return (
      <div className='App'>
         
         <Cards characters={characters} onClose={onClose} />
         <Nav onSearch={onSearch}/>
         
      </div>
   );
}

export default App;
