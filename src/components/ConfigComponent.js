import { borderTop } from "@mui/system";
import React, { useState, useEffect } from "react";
import avatar from "../assets/img/avatar.svg";
import "./Config.css";

const initialUsuario = {
    nombreUsuario: "usuario",
    nombre: "",
    apellido: "",
    correo: "",
    password: "",
    fechaNacimiento: ""
}
const ConfigComponent = ({ usuarioEditado, setUsuarioEditado, userEdit }) => {
    /* 
    const [state, setState] = useState(initialUsuario);
    const { nombreUsuario,nombre, apellido, correo, password,fechaNacimiento } = state;
    //el hook useEffect siempre está pendiende de si la variable que viene dentro
    //de sus corchetes cambia, él deberá hacer todo lo que tiene en su funcion dentro
    //consideracion es que useEfect siempre corre al menos 1 vez cuando la pagina carga por primera vez
    useEffect(() => {
        if (usuarioEditado !== null) {
            setState(usuarioEditado)
        } else {
            setState({
                nombre: "",
                apellido: "",
                correo: "",
                password: "",
                fechaNacimiento:"",
            })
        }
    }, [usuarioEditado]);
    const handleInputChange = (e) => {
        //esta funcion se llama cada vez que nosotros escribimos algo
        // en algun input de nuestra pagina 
        const changedFormValue = {
            //va a mantener los 
            ...state,
            [e.target.name]: e.target.value
        }
        setState(changedFormValue); 
    }
    */
    function removeActiveClass() {
        const dashboard = document.querySelector('.nav_link');
        dashboard.className = dashboard.className.replace('active', '');
      }
    
      // agregamos la clase active a la pagiga de config
      function addActiveClass() {
        const config = document.querySelector('.config_nav');
        config.classList.add('active');
      }
      useEffect(removeActiveClass, []);
      useEffect(addActiveClass, []);
    return (
        <div className="fondo">
            <div class="card" className="config" style={{ border: '2px solid', borderColor: '#25a5d5', borderRadius: '1%' }}>
                <div className="a ">
                    <h4>Foto de perfil</h4>
                    <div class="container"
                        style={{
                            display: 'flex',
                            alignItems: 'start'
                        }}>
                        <img
                            src={avatar}
                            position={"relative"}
                            width={"120px"}
                        />
                        <div >
                            <h5 class="card-title">Nombre de usuario</h5>
                            <br />
                            <button type="button"style={{backgroundColor: '#25a5d5'}}
                                class="btn"
                        /*onClick={() => userEdit(state)}*/              
                            >Cambiar foto
                            </button>
                        </div>
                    </div>
                </div>
                <br /><br /><br />
                <form className="formulario" >
                    <div class="row">
                        <div class="col" >
                            <div class="mb-3 " id="NombreUsuario" >
                                <label for="Nombre" class="form-label">
                                    Nombre de Usuario
                                </label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="NombreUsuario"
                                    placeholder="NombreUsuario"
                                    //para que mi formulario sea capaz de crear un usuario debemos agregarle a los input
                                    //lo siguiente
                                    /* 
                                    name="nombreUsuario"
                                    value={nombreUsuario}
                                    onChange={handleInputChange} */
                                ></input>
                            </div>
                            <div class="mb-3 " id="Nombre" >
                                <label for="Nombre" class="form-label">
                                    Nombre
                                </label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="Nombre"
                                    placeholder="Nombre"
                                //para que mi formulario sea capaz de crear un usuario debemos agregarle a los input
                                //lo siguiente
                                /* 
                                name="nombre"
                                value={nombre}
                                onChange={handleInputChange} */
                                ></input>
                            </div>
                            <div class="mb-3">
                                <label for="Apellido" class="form-label">
                                    Apellido
                                </label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="apellido"
                                    placeholder="Apellido"
                                    name="apellido"/* 
                                value={apellido}
                                onChange={handleInputChange} */
                                ></input>
                            </div>
                            <button
                                type="button"
                                class="btn btn-success"
                            // onClick={() => userEdit(state)}
                            >Cancelar
                            </button>
                        </div>
                        <div class="col">
                            <div class="mb-3">
                                <label for="Correo" class="form-label">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    class="form-control"
                                    id="Correo"
                                    placeholder="email@ejemplo.com"
                                    name="correo"
                                /*value={correo}
                                onChange={handleInputChange} */
                                ></input>
                            </div>
                            <div class="mb-3">
                                <label for="Password" class="form-label">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    class="form-control"
                                    id="Password"
                                    name="password">
                                    {/* 
                                value={password}
                            onChange={handleInputChange}  */}
                                </input>
                            </div>
                            <div class="mb-3" id="">
                                <label for="fechaNacimiento" class="form-label">
                                    Fecha de Nacimiento
                                </label>
                                <input
                                    type="date"
                                    class="form-control"
                                    id="fechaNacimiento"
                                    placeholder="fechaNacimiento"
                                //para que mi formulario sea capaz de crear un usuario debemos agregarle a los input
                                //lo siguiente
                                /* 
                                name="FechaNacimiento"
                                value={fechaNacimiento}
                                onChange={handleInputChange} */
                                ></input>
                            </div>
                            <button
                                type="button"
                                class="btn btn-success"
                                /*                 onClick={() => userEdit(state)}
                                */              >
                                Continuar
                            </button>
                        </div>
                    </div>
                    {/* 
                        <button
                        type="button"
                        class="btn btn-success"
                        onClick={() => userEdit(state)}
                        >
                        Editar usuario
                        </button> 
                        {usuarioEditado !== null ? (
                            <button
                            type="button"
                            class="btn btn-danger"
                            onClick={() => setUsuarioEditado(null)}
                            >
                            Cancelar
                            </button>
                            ) : (
                                <></>
                                </div>
                                )} */}
                </form>
            </div>
        </div>
    );
};
export default ConfigComponent;
