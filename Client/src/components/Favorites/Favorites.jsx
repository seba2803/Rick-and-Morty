import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import Card from "../Card/Card";
import style from './Favorites.module.css';
import { filterCards, orderCard } from "../Redux/actions";

const Favorites = () => {

    const myfavorites = useSelector(state => state.myFavorites)

    const dispatch = useDispatch();

    const handleOrder = (event) => {
        dispatch(orderCard(event.target.value));
        // setAux(true);
    };

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value));
    };

    const [aux, setAux] = useState(false);

    return (
            <div className={style.divCard}>
                <select onChange={handleOrder}>
                    <option value="A">Asendente</option>
                    <option value="D">Desendente</option>
                </select>

                <select onChange={handleFilter}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">unknown</option>
                </select>

        {myfavorites?.map(({id,name,status,species,gender,origin,image,onClose}) => {
                return( 
                <div className={style.card}>
                <Card
                 id = {id}
                 name = {name}
                 status = {status}
                 species = {species}
                 gender = {gender}
                 origin = {origin}
                 image = {image}
                 onClose={onClose}
                />
                </div>
                )
        })}
        </div>
    )
};
export default Favorites;