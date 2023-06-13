import style from './Card.module.css';
import { NavLink } from 'react-router-dom';
import { addFav, removeFav} from '../Redux/actions';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

function Card({id,name,status,species,gender,origin,image,onClose,removeFav,addFav,myFavorites}) {

   const [isFav,setFav] = useState(false);

   const handleFavorite = () => {
      if(isFav === true){
         setFav(false);
         removeFav(id);
      }else{
         setFav(true);
         addFav({id,name,status,species,gender,origin,image,onClose});
      }
   };

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={style.Card}>
         <button onClick={()=>{
               onClose(id)
               removeFav(id)}} className={style.boton}>X</button>
         {
           isFav ? (
            <button onClick={handleFavorite}>❤️</button>
           ) : (
            <button onClick={handleFavorite}>🤍</button>
            )
         } 
         <h2>name: {<NavLink className={style.navLink} to={`/detail/${id}`}>{name}</NavLink>}</h2>
         <h2>status: {status}</h2>
         <h2>species: {species}</h2>
         <h2>gender: {gender}</h2>
         <h2>origin: {origin}</h2>
         <img src={image} alt='' className={style.img}/>
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
};

const mapDispatchToProps = (dispatch) => {
   return { addFav: (card)=> dispatch(addFav(card)),
         removeFav: (id) => dispatch(removeFav(id))
   };
};

export default connect(mapStateToProps,mapDispatchToProps)(Card);
