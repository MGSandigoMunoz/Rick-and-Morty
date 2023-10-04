import React from "react";
import { useState } from "react";
import validation from "./validation.js";
import imagen from "../../Img/giphy.gif"
import './form.css';



export default function Form (props){
    
    //ESTADOS DE CONTROL DE LOGIN
    
    const [userData,setUserData] = useState({
        email:"",
        password:"",
    })
    
    //ESTADO DE VALIDACIÓN DE ERRORES
    
    const [errors,setErrors] = useState({
        email: "",
        password:""
    })

    //TEXTO INGRESADO EN LOS INPUTS
        // const{name,value} = event.target; Esto lo podría hacer para desestructurar el objeto y mejora el código.

    const handleChange= (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })

        setErrors(
            validation({
                ...userData,
                [event.target.name]: event.target.value
        })
    )//Le paso userData porque es la información que acabo de actualizar con el evento de cambio en el input 
    }

    const handleSubmit= event =>{
        event.preventDefault();
        props.login(userData)
    }



    return(
    <div className="login-background">

        <img src={imagen} alt="Rick and Morty"/>
            <form onSubmit={handleSubmit} className="login-container">

                <label className="login-label">Email</label>
                    <input
                        type="text"
                        name="email"//Los nombres deben ser igual en los estados
                        value= {userData.email}
                        onChange={handleChange}
                        placeholder="Ingresa tu email..."
                        className="login-input"
                    />
            
                <label className="login-label">Password</label>
                    <input className="login-input"
                    type="password"
                    name="password"
                    value= {userData.password}
                    onChange={handleChange}
                    placeholder="Ingresa tu contraseña..."
                    />
                    {/* <p className="login-error" >{errors.email && errors.email}</p> */}
                    
                    {/* <p className="login-error" >{errors.password && errors.password}</p> */}
                    
                <button 
                type="submit"
                disabel={errors.email || errors.password}
                >Submit</button>

            </form>
        
    </div> 
    )
        
}