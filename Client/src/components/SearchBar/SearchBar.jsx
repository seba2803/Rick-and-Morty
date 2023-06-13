import style from './searchBar.module.css';
import { useState } from 'react';
export default function SearchBar(props) {

   const [id,setId] = useState('');

   const handleChange = (event) => {
      setId(event.target.value);
   };

   return (
      <div className={style.position}>
      <div className={style.divBar}>
         <input type='number' max='826' className={style.Input} onChange={handleChange} value={id}/>
         <button onClick={()=>props.onSearch(id)} className={style.boton}>Agregar</button>
      </div>
      </div>
   );
}
