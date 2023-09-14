export default function validation (input) {
    //input va a ser email || password del usuario. Es decir el estado de userData
    
        const error={}
        const regexEmail = /\S+@\S+\.\S+/; //Expresión regular
        const regexPassword = new RegExp("[0-9]")//Clase de JS para crear una expresión regular. En este caso, esta indica que debe tener un valor entre 0 a 9
    
        //VALIDACIONES EMAIL
    
        
            if(!regexEmail.test(input.email)){
                error.email = "Debe ingresar un email"
            }
    
            if(!input.email){
                error.email = "El nombre de usuario no puede estar vacío"
            }
    
            if(input.email.length>35){
                error.email = "El email no debe ser mayor a 35 caracteres"
            }
       
        //VALIDACIONES PASSWORD
    
            if(!regexPassword.test(input.password)){
                error.password= "Debe contener al menos un número"
            }
    
            if(input.password.length < 6 || input.password > 10){
                error.password = "La contraseña debe tener entre 6 y 10 caracteres"
            }
                  
       
    
        return error
    
    }