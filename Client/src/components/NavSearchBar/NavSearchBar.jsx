import SearchBar from "../SearchBar/SearchBar";
import style from './NavSearch.module.css';
import { Link } from "react-router-dom";

const NavSearchBar = (props) =>{

    return(
        <div className={style.nav}>
      <div className={style.butons}>
        
        <Link to="/home">
        <button className={style.home}>
            Home
        </button>
        </Link>

        <Link to="/about">
      <button className={style.about}>
            About
        </button>
        </Link>

        <Link to='/favorites'>
            <button className={style.about}>
                Favorites
            </button>
        </Link>

        <Link to="/">
        <button className={style.home}>
            LogIn
        </button>
        </Link>
        
        </div>

        <SearchBar className={style.searchBar} onSearch = {props.onSearch}/>

        </div>
    );
}
export default NavSearchBar;