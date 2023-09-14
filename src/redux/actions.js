import {ADD_FAV, REMOVE_FAV, FILTER, ORDER} from './action-types'

export function addFav (character){
    return {
        type: ADD_FAV,
        payload: character,
    };
};

export function removeFav (id){
    return {
        type:REMOVE_FAV,
        payload: id,
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