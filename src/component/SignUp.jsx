import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  logo: {
    width: 100,
    height: 50,
    objectFit: "cover",
    cursor: "pointer",
  },
  authBox: {
    // border: "1px solid #DDD",
    border: "1px solid rgba(0,0,0,0.3)",
    borderRadius: theme.spacing(1),
    padding: "20px !important",
  },
}));

const SignUp = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="xs" style={{ padding: "20px 60px" }}>
      <Grid container spacing={5} justify="center">
        <Grid item container justify="center">
          <RouterLink to="/">
            <img
              src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo.png"
              className={classes.logo}
              alt="logo"
            />
          </RouterLink>
        </Grid>
        <Grid item spacing={2} className={classes.authBox} container>
          <Grid item xs={12}>
            <Typography
              gutterBottom
              variant="h5"
              style={{ textAlign: "center", fontSize: 28 }}
            >
              Create Account
            </Typography>
          </Grid>
          <Grid item container>
            <form>
              <Grid item container spacing={2}>
                <Grid item xs={12}>
                  <FormControl fullWidth={true}>
                    <TextField
                      type="text"
                      label="Name"
                      variant="outlined"
                      size="small"
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth={true}>
                    <TextField
                      type="email"
                      label="Email"
                      variant="outlined"
                      size="small"
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth={true}>
                    <TextField
                      type="password"
                      label="password"
                      variant="outlined"
                      size="small"
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    fullWidth={true}
                  >
                    Create
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2">
              By continuing, you agree to Amazon's
              <Link href="#" style={{ color: "blue" }}>
                {" "}
                Conditions of Use
              </Link>{" "}
              and
              <Link href="#" style={{ color: "blue" }}>
                {" "}
                Privacy Notice
              </Link>
              .
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        mt={7}
      >
        <Typography
          variant="body2"
          style={{ marginBottom: 10, color: "rgba(0, 0, 0, 0.77)" }}
        >
          Already have an account?
        </Typography>
        <RouterLink to="/signin" style={{ textDecoration: "none" }}>
          <Button variant="contained">Sign In</Button>
        </RouterLink>
      </Box>
    </Container>
  );
};

export default SignUp;
