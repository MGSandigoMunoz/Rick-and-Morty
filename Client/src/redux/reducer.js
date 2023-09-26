import {ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types";

const initialState = {
    myFavorites:[],//En este array guardo personajes en forma de objetos
    allCharacters:[]
}

export default function reducer (state = initialState, {type,payload}){
//*action={ type,payload}

    switch (type) {

    //?CONEXIÓN CON BACK
        case ADD_FAV:
            return { ...state,
                 myFavorites: payload,
                 allCharacters: payload
                 };

    //?CONEXIÓN CON BACK
        case REMOVE_FAV:
            return { ...state,
                 myFavorites: payload 
                }; //Retorna array sólo con los favoritos que no tengan el id que entra por payload. Elimina el char con el id ingresado. Debo convertir lo que retorna payload a number, porque viene como string que tomamos de URL
            
        case FILTER:
            if(payload === "All")return{//Si selecciona todos los personajes, entonces muestra todos los que están en favoritos
                ...state,
                myFavorites:state.allCharacters
            }
            let copy2=[...state.allCharacters.filter(char => char.gender === payload)]
            return{
                ...state,
                myFavorites:copy2
            }

            case ORDER:
                let copy3=[...state.allCharacters];
              
                // Ordenar los personajes favoritos según su ID
                if (payload === "A") {
                    copy3.sort((a, b) => a.id - b.id); // Orden ascendente
                } else if (payload === "D") {
                    copy3.sort((a, b) => b.id - a.id); // Orden descendente
                }
              
                // Actualizar la propiedad "myFavorites" con la lista ordenada 
                return {
                    ...state,
                    myFavorites:copy3
                };            

        default:
            return {...state}
        }
};