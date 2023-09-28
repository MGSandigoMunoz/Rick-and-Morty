import axios from "axios";

import {ADD_FAV, REMOVE_FAV, FILTER, ORDER,ERROR} from './action-types'

//?CONEXIÓN CON BACK 
//! ASYNC AWAY
export const addFav = (character) => {//No puede ser asíncrono esta action, sino el CB adentro de esta

   return async (dispatch) => {

      try {
         const endpoint = 'http://localhost:3001/rickandmorty/fav';
         const {data} = await axios.post(endpoint, character);
         return dispatch({
            type: ADD_FAV,
            payload: data,
         });
      } catch (error) {
         return dispatch({
            type: ERROR,
            payload: error.message,
         })
         
      }
   }
};

//!PROMISES
   //  const endpoint = 'http://localhost:3001/rickandmorty/fav';
   //  return (dispatch) => {
   //     axios.post(endpoint, character).then(({ data }) => {
   //        return dispatch({
   //           type: ADD_FAV,
   //           payload: data,
   //        });
   //     });
   //  };
 

//?CONEXIÓN CON BACK
//! ASYNC AWAY
 export const removeFav = (id) => {

   return async (dispatch) => {
      try {
         const endpoint = 'http://localhost:3001/rickandmorty/fav/'+id;
         const {data} =  await axios.delete(endpoint);
         return dispatch({
                     type: REMOVE_FAV,
                     payload: data,
               });
            
      } catch (error) {
         return dispatch({
            type: ERROR,
            payload: data,
         })
         
      }
   }
 }

// //!PROMISES
//     const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
//     return (dispatch) => {
//        axios.delete(endpoint).then(({ data }) => {
//           return dispatch({
//              type: REMOVE_FAV,
//              payload: data,
//        });
//        });
//     };
//  };

//Filtro de género
export function filterCards(gender){
    return{
        type:FILTER,
        payload: gender,
    };
};
//Ordenar por ide
export function orderCards(order){
    //order puede ser A:Ascendente o D:Descendente
    return{
        type:ORDER,
        payload:order,
    };
};