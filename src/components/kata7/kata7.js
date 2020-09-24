import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

import { Link as Redirect } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(2),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: "white",
  },
  paperForm: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(4),
  },
}));

const Kata7 = (props) => {
  const classes = useStyles();
  const [view, setView] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("SUBMIT");
  };

  let content = (
    <Container component="main" maxWidth="xs" className={classes.container}>
      <CssBaseline />
      <Paper className={classes.paperForm}>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <ButtonGroup
            variant="text"
            color="primary"
            aria-label="text primary button group"
          >
            <Button
              onClick={() => setView(true)}
              color={view ? "primary" : "secondary"}
            >
              Sign In
            </Button>
            <Button
              onClick={() => setView(false)}
              color={view ? "secondary" : "primary"}
            >
              Sign Up
            </Button>
          </ButtonGroup>
          <form
            className={classes.form}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
            />
            {view ? null : (
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="confirmPassword"
                id="confirmPassword"
              />
            )}
            {view ? (
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
            ) : null}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              id="btn"
            >
              {view ? "Sign In" : "Sign Up"}
            </Button>
            <Grid container>
              <Grid item xs>
                {view ? (
                  <Redirect to="/main">
                    <Link href="#" variant="body2" id="guess">
                      Visitante
                    </Link>
                  </Redirect>
                ) : null}
              </Grid>
            </Grid>
          </form>
        </div>
      </Paper>
    </Container>
  );
  return content;
};

export default Kata7;
