import style from './About.module.css'
import img from './yo.jpg';
const About = () => {
    return(
        <div className={style.fondo}>
            <img className={style.imgage} src={img} alt="" />
            <br />
            <p>haciendo una prueba para ver si se ve el componente About</p>
        </div>
    );
}

export default About;