export const ADD_FAV = 'ADD_FAV';
export const REMOVE_FAV = 'REMOVE_FAV';
export const FILTER = 'FILTER';
export const ORDER = 'ORDER';

export const addFav = (card) => {
    return {type: ADD_FAV,payload: card};
};

export const removeFav = (id) => {
    return {type: REMOVE_FAV, payload: id};
};

export const filterCards = (gender) => {
    return {type: FILTER, payload: gender};
};

export const orderCard = (orden) => {
    return {type: ORDER, payload: orden};
}