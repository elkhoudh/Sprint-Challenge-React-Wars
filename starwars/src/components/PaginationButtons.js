import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  }
});
const PaginationButtons = props => {
  const { classes } = props;

  return (
    <div>
      <Button
        variant="outlined"
        disabled={!props.previous ? "true" : null}
        className={classes.button}
        color="secondary"
        onClick={props.previousPage}
      >
        PREVIOUS
      </Button>
      <Button
        onClick={props.nextPage}
        variant="outlined"
        color="secondary"
        className={classes.button}
      >
        NEXT
      </Button>
    </div>
  );
};

export default withStyles(styles)(PaginationButtons);

// <button onClick={props.nextPage} disabled={!props.next ? "true" : null}>
//   NEXT
// </button>
// <button
//   onClick={props.previousPage}
//   disabled={!props.previous ? "true" : null}
// >
//   PREVIOUS
// </button>
