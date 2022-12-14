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
import './register.css'




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

const Register = () => {
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
      <img className="MaRoD" src={RacoonD} alt="Mapache Rocco" maxWidth="xs" style={{zIndex: 0}}></img>
      <div  id="FormRegistro" class="card" style={{ border: '1px solid #25a2d5', borderRadius: '3%', backgroundColor: "white" , zIndex: 1}} >
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
                      
                    />
                  </Grid>
                </Grid>
                
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"                
                  sx={{ mt: 3, mb: 2 }}
                >
                  Registrarse
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link href="/iniciarSesion" variant="body2">
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
    </div>
  );
}

export default Register;