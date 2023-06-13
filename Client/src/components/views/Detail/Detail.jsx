import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import style from './Detail.module.css';

const Detail = () => {
    
    const {id} = useParams();

    const [character,setCharacter] = useState({});

    useEffect(() => {
        const URL = 'http://localhost:3001/rickandmorty/character';

        fetch(`${URL}/${id}`)
        .then(res=> res.json())
        .then((data) => {
            console.log(data);
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return(
        <div className={style.container2}>
        <div className={style.container}>
          <div className={style.detail}>
            <ul className={style.ul}>
                <li className={style.li}>Name: {character?.name}</li> {/*character?.name pregunta si hay algo en character me mostras lo que hay en character.name*/}
                <li className={style.li}>Status: {character?.status}</li>
                <li className={style.li}>Species: {character?.species}</li>
                <li className={style.li}>Gender: {character?.gender}</li>
                <li className={style.li}>Origin: {character?.origin?.name}</li>
            </ul>
           </div>
           <img className={style.img} src={character?.image} alt={character?.name}/>
         </div>
         </div>
    );
}

export default Detail;