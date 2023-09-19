import { useState,useEffect} from 'react';
import { Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import axios from 'axios';

import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav.jsx';
import About from './components/about/About'
import Detail from './components/detail/Detail.jsx';
import Form from './components/form/Form.jsx';
import Favorites from './components/favorites/Favorites.jsx';

import styles from './App.module.css'


function App() {

   const [characters,setCharacters] = useState([]);
   const [access,setAccess]=useState(false);

   const EMAIL = "mgabrielasm0119@gmail.com"
   const PASSWORD= "123456"
   

   /*const onSearch = (data)=>{
      setCharacters([...characters, example])
      }*/

   /*function onSearch(id) {
       axios(`https://rickandmortyapi.com/api/character/${id}`)
       .then(({ data }) => {//De toda la info que recibo, sólo me importa data, por eso se desestructura
          if (data.name) {
               setCharacters([...characters, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }*/

   
   function onSearch(id) {
   axios.get(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.id) {
         if(!characters.some((character) => character.id === data.id)) {
         setCharacters((prevCharacters)=> [...prevCharacters, data]) 
      } else {
             window.alert('Este personaje ya esta en la lista') } }
             else {
               window.alert('No hay personajes con este ID!')
             }
            })
            .catch(()=> alert("Hubo un error al cargar los datos de la API."))
         }

   const onClose= (id) =>{
    setCharacters(characters.filter( char => char.id !== Number(id)))  //Filtra personajes con id diferente al que tenemos
   }

   const navigate = useNavigate();
   
   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }

   // App.js
   // eslint-disable-next-line
   useEffect(() => {
      !access && navigate('/');/// ingreso con log
       // eslint-disable-next-line
   }, [access]);

   const location = useLocation();


   return (
      <div className={styles.body}>
        
        
        {location.pathname !== "/" && <Nav onSearch={onSearch}/>}

        {/* //Renderizado condicional de barra de navegación para que aparezca en todas las páginas, menos en el path "/"  */}

          <Routes>
          
            <Route path="/home" element={<Cards
            characters={characters}
            onClose={onClose}
            />} 
            />
            <Route path="/about" element={<About />} />
            <Route path= "/detail/:id" element={<Detail/>} />
            <Route path="/favorites" element={<Favorites />} />
            <Route exact path= "/" element={<Form login={login}/>}/>

          </Routes>
       
      </div>
    );
   }


export default App;