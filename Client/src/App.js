import style from './DivCard.module.css';
import NavSearchBar from './components/NavSearchBar/NavSearchBar';
import Cards from './components/Cards/Cards.jsx';
import About from './components/views/About/About'
import Detail from './components/views/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate  } from 'react-router-dom';
import axios from 'axios';

function App() {

   const navigate = useNavigate();

   const [access,setAccess] = useState(false);

   function login(userData) {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      });
   }

   // const EMAIL = 'sebav@mail.com';

   // const PASSWORD = 'Jardin2003';

   // const login = (userData) => {

   //    if (userData.password === PASSWORD && userData.email === EMAIL) {
   //       setAccess(true);

   //       navigate('/home');
   //    }else{

   //       alert('tu email o contraseña no son correctas');
   //    }
   // };

   // useEffect(() => {
      
   //    !access && navigate('/');

   // }, [access]);

   const [characters,setCharacters] = useState([]);

   const onSearch = (id) =>{
     const URL = `http://localhost:3001`;
     fetch(`${URL}/rickandmorty/character/${id}`)
     .then(res => res.json())
     .then(data => {
      if(data.name && !characters.find((char)=> char.id === data.id)){
         setCharacters([...characters,data])
      }else{
       alert('no se encontro el personaje o el personaje ya se añadió');  
      }
      });
   };
   
   const onClose = (id) => {
      setCharacters(characters.filter(character => character.id !== id));
   };

   const {pathname} = useLocation();

   return (
         <div className={style.div}>

         {pathname !== '/' && <NavSearchBar onSearch = {onSearch}/>}

         <Routes>

            <Route path="/" element={<Form login={login}/>} />

            <Route path='/favorites' element={<Favorites />} />

            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
            
            <Route path='/about' element={<About />}/>
            
            <Route path='/detail/:id' element={<Detail />}/>
               
         </Routes>
         </div>   
   );
}

export default App;
