import React, { /* useEffect, */} from "react";
import {
  BarraNavegacion,
   Register
  } from "../components";

/* import { getAllUsers, addUser } from "../services/Usuario"; */


const Registro = () =>{

/* 
  useEffect(()=>{
    getUsers();
  },[])

  const getUsers = async()=> {
    await getAllUsers();
  }

  const userAdd = async(usuarioAgregado)=>{//agregamus un usario a la BD
    await addUser(usuarioAgregado);
    //actualizar tabla de usuarios con el usuario nuevo
  } */

    return(
        <div>
        <div>
            <BarraNavegacion/>
        </div>
        <section >
            <Register/>
        </section>
        </div>
    );

};

export default Registro;