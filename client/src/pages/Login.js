// @mui
import { Container, Typography, Grid, TextField, Button, InputAdornment } from '@mui/material';
import { AccountCircle, LockRounded } from '@mui/icons-material';
// hooks
import useSettings from '../hooks/useSettings';
// components
import Page from '../components/Page';
import image from '../images/pexels-ashutosh-sonwani-2016145.jpg';
import Logo from '../components/Logo';

const enigma = require('enigma.js');
const schema = require('enigma.js/schemas/12.20.0.json');

// ----------------------------------------------------------------------

export default function Login() {
  const { themeStretch } = useSettings();

  const getTicket = () =>
    fetch('/get-ticket')
      .then((res) => res.json())
      .then((data) => data.ticket)
      .then((ticket) => {
        console.log('TICKET! ', ticket);
        return enigma.create({
          schema,
          url: `wss://sense-motor.adviseinc.co.uk/motor-ticket/app/engineData?QlikTicket=${ticket}`,
          createSocket: (url) => new WebSocket(url),
        });
      })
      .then((session) => session.open())
      .then((global) => console.log('GLOBAL: ', global));

  // const useStyles = makeStyles({
  //   color: {
  //     backgroundColor: 'black',
  //   },
  // });

  // const classes = useStyles();

  return (
    <Page title="Login">
      {/* <Container maxWidth={themeStretch ? false : 'xl'}> */}
      <Grid container style={{ minHeight: '100vh' }}>
        <Grid item xs={12} sm={6}>
          <img src={image} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="" />
        </Grid>
        <Grid
          item
          container
          xs={12}
          sm={6}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ padding: 10 }}
        >
          <div>
            <Grid container justifyContent={'center'}>
              <Logo />
            </Grid>
            <Grid container direction="column" style={{ maxWidth: 400, minWidth: 300 }}>
              {/* <Grid item> */}
              <TextField
                label="Username"
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />
              {/* </Grid> */}
              {/* <Grid item> */}
              <TextField
                label="Password"
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockRounded />
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                onClick={getTicket}
                type="submit"
                color="primary"
                varaint="contained"
                style={{ outline: 'auto', marginTop: 20 }}
              >
                Sign In
              </Button>
              {/* </Grid> */}
            </Grid>
          </div>
        </Grid>
      </Grid>
      {/* </Container> */}
    </Page>
  );
}
