import React from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    marginTop: "20px",
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  margin: {
    marginTop: "10px",
  },
}));

const Kata5 = (props) => {
  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (props.id === null) {
      axios
        .post("http://localhost:5000/task", {
          name: props.name,
          description: props.description,
        })
        .then((res) => {
          props.setName("");
          props.setDescription("");
          props.setCb(!props.cb);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .put("http://localhost:5000/task/" + props.id, {
          name: props.name,
          description: props.description,
        })
        .then((res) => {
          props.setId(null);
          props.setName("");
          props.setDescription("");
          props.setCb(!props.cb);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  let content = (
    <Paper className={classes.paper}>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        {props.title}
      </Typography>
      <form onSubmit={handleSubmit}>
        <div>
          <TextField
            label="Nombre"
            fullWidth
            className={classes.margin}
            onChange={(event) => props.setName(event.target.value)}
            value={props.name}
          />
        </div>
        <div>
          <TextField
            label="Descripción"
            fullWidth
            className={classes.margin}
            onChange={(event) => props.setDescription(event.target.value)}
            value={props.description}
          />
        </div>
        <div className={classes.buttons}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
          >
            {props.id === null ? "Crear" : "Actualizar"}
          </Button>
          <Button
            color="primary"
            className={classes.button}
            onClick={() => {
              props.setId(null);
              props.setName("");
              props.setDescription("");
            }}
          >
            Borrar
          </Button>
        </div>
      </form>
    </Paper>
  );
  return content;
};

export default Kata5;
