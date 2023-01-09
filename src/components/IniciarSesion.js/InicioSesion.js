import React, {} from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Racoon from "../../assets/img/Roccoizq.png"
import "./inicioSesion.css"


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


const InicioSesion = () => {

  return (
    <div id="InicioSesion">
      <div id="FormInicio" class="card" style={{ border: '1px solid #25a2d5', borderRadius: '3%', backgroundColor: "white"}} >
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
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}> {/* Icono morado */}
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Iniciar Sesión
            </Typography>
            <Box component="form" noValidate sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="Correo"
                    label="Direccion de correo"
                    autoComplete="email"
                    name="email"                   

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
                    name="contraseña"
                  />
                </Grid>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link href="#" variant="body2">
                      Olvide mi contraseña.
                    </Link>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="Recuerdame."
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                href="/dashboard"
              >
                Ingresar
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/registro" variant="body2">
                    Aun no tienes una cuenta? Registrate.
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </div>
      <img className="RoccoIzqrd" src={Racoon} alt="Mapache Rocco" style={{zIndex: -1 }}></img>
    </div>
  )

}
export default InicioSesion;