import React, {useState, useEffect} from "react";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import RacoonD from "../../assets/img/Roccoder.png"




function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="?">
        Nuestro sitio
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

/* const initialUsuario = {
  nombre: "",
  contrasena: "",
  correo: "",
  fechaNac: "",
} */

const Register = ({ /* userAdd, usuarioEditado */ }) => {
  /*  const [usuario, setUsuario] = useState(initialUsuario);
  const { nombre, contrasena, correo, fechaNaciomiento } = usuario; */

  /* useEffect(() => {      //funcion de edicion de usuarios
    if (usuarioEditado !== null) {
        setUsuario(usuarioEditado)
    } else {
        setUsuario(
            {
                nombre: "",
                contrasena: "",
                correo: "",
                fechaNaciomiento: "",
            }
        )
    }
}, [usuarioEditado]);
  
  const handleInputChange = (e) => {
    const changedFormValue = {
      ...usuario,
      [e.target.name]: e.target.value
    }
    setUsuario(changedFormValue);
  } */
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  }; 
  return (
    <div className="Register">
      <div class="card" style={{ border: '1px solid black', borderRadius: '3%', position: 'fixed', top: "25%", left: "51%", backgroundColor: "white" , zIndex: 1}} >
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography component="h1" variant="h5">
                BIENVENIDO A TENSEÑAS
              </Typography>
              <Typography component="h1" variant="h5">
                Registrarse
              </Typography>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="Correo"
                      label="Direccion de correo"
                      autoComplete="email"
                      name="correo"
                    /*   value={correo} 
                      onChange={handleInputChange}  */
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      required
                      fullWidth
                      id="firstName"
                      label="Nombre"
                      autoFocus
                      name="nombre"
                    /*   value={nombre} 
                      onChange={handleInputChange} */
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="date"
                      label="Fecha Nacimiento(dd/MM/yyyy)"
                      autoComplete="date"
                      name="fechaNaciomiento"
                   /*   value={fechaNaciomiento} 
                      onChange={handleInputChange} */
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="contraseña"
                      type="password"
                      id="Contraseña"
                      autoComplete="new-contraseña"
                      name="contrasena"
                      /* value={contrasena} 
                      onChange={handleInputChange} */
                    />
                  </Grid>
                </Grid>
                {/* {usuarioEditado !== null ? ( */}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                 /*  onClick={() => userAdd(usuario)} */
                  sx={{ mt: 3, mb: 2 }}
                >
                  Registrarse
                </Button>{/* ):(
                  <></>
                )} */}
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link href="#" variant="body2">
                      Ya tienes cuenta Inicia Sesion.
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Copyright sx={{ mt: 5 }} />
          </Container>
        </ThemeProvider>
      </div>
      <img src={RacoonD} alt="Mapache Rocco" style={{ position: 'fixed', top: "15%", left: "17%", zIndex: 0 }}></img>
    </div>
  );
}

export default Register;