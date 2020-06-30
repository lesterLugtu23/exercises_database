import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import CreateDialog from "../Exercises/Dialogs/Create";

export default props => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h5" color="inherit" style={{ flex: 1 }}>
        Exercises Database
      </Typography>
      <CreateDialog />
    </Toolbar>
  </AppBar>
);
