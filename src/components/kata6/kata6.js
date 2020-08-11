import React from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles({
  table: {
    minWidth: 400,
  },
  paper: {
    marginTop: "20px",
  },
  icons: {
    "&:hover": {
      color: "#00BFB3",
    },
  },
});

const Kata6 = (props) => {
  const classes = useStyles();
  const data = props.fetchedData === null ? [] : props.fetchedData.data;

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:5000/task/" + id)
      .then((res) => {
        props.setCb(!props.cb);
      })
      .catch((err) => {});
  };

  const handleEdit = (id) => {
    axios
      .get("http://localhost:5000/task/" + id)
      .then((res) => {
        props.setId(res.data._id);
        props.setName(res.data.name);
        props.setDescription(res.data.description);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let content = (
    <TableContainer component={Paper} className={classes.paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Nombre</TableCell>
            <TableCell align="center">Descripción</TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((task) => (
            <TableRow key={task._id}>
              <TableCell align="center">{task.name}</TableCell>
              <TableCell align="center">{task.description}</TableCell>
              <TableCell>
                <IconButton
                  onClick={() => handleDelete(task._id)}
                  color="secondary"
                  className={classes.icons}
                >
                  <DeleteIcon />
                </IconButton>
                <IconButton
                  onClick={() => handleEdit(task._id)}
                  color="secondary"
                  className={classes.icons}
                >
                  <EditIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

  return content;
};

export default Kata6;
