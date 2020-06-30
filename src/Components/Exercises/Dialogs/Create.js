import React, { Component } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Fab
} from "@material-ui/core";
import { Add } from "@material-ui/icons";

export default class extends Component {
  state = {
    open: false
  };

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    });
  };

  render() {
    const { open } = this.state;
    return (
      <>
        <button variant="fab" onClick={this.handleToggle} mini>
          <Fab color="secondary" size="small">
            <Add />
          </Fab>
        </button>
        <Dialog
          open={open}
          onClose={this.handleToggle}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            Create a new exercise
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please fill out the form below.
            </DialogContentText>
            <form />
          </DialogContent>
          <DialogActions>
            <Button color="primary" variant="contained">
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }
}
