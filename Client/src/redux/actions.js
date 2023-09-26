import axios from "axios";

import {ADD_FAV, REMOVE_FAV, FILTER, ORDER} from './action-types'

//?CONEXIÓN CON BACK
export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return (dispatch) => {
       axios.post(endpoint, character).then(({ data }) => {
          return dispatch({
             type: ADD_FAV,
             payload: data,
          });
       });
    };
 }

//?CONEXIÓN CON BACK
 export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return (dispatch) => {
       axios.delete(endpoint).then(({ data }) => {
          return dispatch({
             type: REMOVE_FAV,
             payload: data,
       });
       });
    };
 };

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