import React from "react";
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 500,
    overflowY: "auto"
  }
};

export default ({
  exercises,
  category,
  onSelect,
  exercise: {
    id,
    title = "Welcome!",
    description = "Please select an exercise on the list on the left."
  }
}) => (
  <Grid container>
    <Grid item sm xs>
      <Paper style={styles.Paper}>
        {exercises.map(([group, exercise]) =>
          !category || category === group ? (
            <>
              <Typography variant="h6" style={{ textTransform: "capitalize" }}>
                {group}
              </Typography>
              <List component="ul" aria-label="secondary mailbox folders">
                {exercise.map(({ title, id }) => (
                  <ListItem button key={id} onClick={() => onSelect(id)}>
                    <ListItemText primary={title} />
                  </ListItem>
                ))}
              </List>
            </>
          ) : null
        )}
      </Paper>
    </Grid>
    <Grid item sm xs>
      <Paper style={styles.Paper}>
        <Typography variant="h5">{title}</Typography>
        <Typography style={{ marginTop: 10 }}>{description}</Typography>
      </Paper>
    </Grid>
  </Grid>
);
