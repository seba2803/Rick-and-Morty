import {Link} from 'react-router-dom';
import { useState } from 'react';
import validation from './validationForm';
import style from './Form.module.css';

const Form = ({login}) => {
   
    const [userdata,setData] = useState({
        email:'',
        password:'',
    });

    const [errors,setErrors] = useState({});

    const handleChange = (event) => {

        const property = event.target.name;
        
        const value = event.target.value;

        setData({...userdata, [property]:value,});

        setErrors(validation({...userdata,[property]:value,}));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        login(userdata);
    };

    return (
        <div className={style.containForm}>

            <form className={style.form}>

                <label className={style.label} htmlFor="email">Email: </label>
                <input className={errors.email ? style.warning : style.succes} type="text" placeholder='Debe colocar su email...' name='email' value={userdata.email} onChange={handleChange} />
                {errors.email && <span className={style.error}>{errors.email}</span>}

                <label className={style.label} htmlFor="password">Password: </label>
                <input className={errors.email ? style.warning : style.succes} type="text" placeholder='Debe colocar su contraseña...' name='password' value={userdata.password} onChange={handleChange} />
                {errors.password && <span className={style.error}>{errors.password}</span>}

                <button className={style.buton} type="submit" onClick={handleSubmit}>Ingresar</button>
                
            </form>

            <Link to="/home">
            <button>Volver</button>
            </Link>

        </div>
    );
}

export default Form;