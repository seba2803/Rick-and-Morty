import Card from '../Card/Card';
import style from './Cards.module.css';

export default function Cards({characters, onClose}) {
   
   return (<div className={style.Cardsdiv}>
      {characters.map(({id,name,status,species,gender,origin,image}) => {
         return ( <Card
         id = {id}
         name = {name}
         status = {status}
         species = {species}
         gender = {gender}
         origin = {origin.name}
         image = {image}
         onClose = {onClose}
          />
         );
      })}
   </div>
   );
}