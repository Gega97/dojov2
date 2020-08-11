import React, { useState } from "react";
import { makeStyles, createGenerateClassName } from "@material-ui/core/styles";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import Kata4 from "../kata4/kata4";
import Kata5 from "../kata5/kata5";
import Kata6 from "../kata6/kata6";

import { useHttpGet } from "../../hooks/useHttpGet";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
}));

const Main = (props) => {
  const classes = useStyles();
  const [cb, setCb] = useState(true);
  const [id, setId] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, fetchedData] = useHttpGet("http://localhost:5000/task", [
    cb,
  ]);

  let content = (
    <div className={classes.root}>
      <Kata4 />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8} lg={6}>
              <Kata5
                name={name}
                setName={setName}
                description={description}
                setDescription={setDescription}
                title={"Formulario de tareas"}
                cb={cb}
                setCb={setCb}
                id={id}
                setId={setId}
              />
            </Grid>
            <Grid item xs={12} md={4} lg={6}>
              <Kata6
                fetchedData={fetchedData}
                id={id}
                setId={setId}
                cb={cb}
                setCb={setCb}
                name={name}
                setName={setName}
                description={description}
                setDescription={setDescription}
              />
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
  return content;
};

export default Main;
