const regexEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{3,4})+$/;

const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d$@$!%*?&]{6,10}$/;

const validation = (usedata) => {
    const errors = {};

    if(!regexEmail.test(usedata.email) || usedata.email.length > 35){
        errors.email = 'Debe ser un email valido';
    }

    if(!regexPassword.test(usedata.password)){
        errors.password = 'Tu contraseña no cumple los patrones de seguridad';
    }
   return errors;
};

export default validation;