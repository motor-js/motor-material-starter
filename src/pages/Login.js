// @mui
import { Container, Typography, Grid, TextField, Button, InputAdornment } from '@mui/material';
import { AccountCircle, LockRounded } from '@mui/icons-material';
// hooks
import useSettings from '../hooks/useSettings';
// components
import Page from '../components/Page';
import image from '../images/pexels-ashutosh-sonwani-2016145.jpg';
import Logo from '../components/Logo';

// ----------------------------------------------------------------------

export default function Login() {
  const { themeStretch } = useSettings();

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
