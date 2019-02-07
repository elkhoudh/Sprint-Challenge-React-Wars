import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const styles = theme => ({
  statsContainer: {
    display: "flex",
    justifyContent: "space-between"
  },
  card: {
    maxWidth: 400,
    margin: 20,
    background: "transparent"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
});

class CardComponent extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes, character } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              {character.name[0]}
            </Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={character.name}
          subheader={character.created}
        />
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <div className={classes.statsContainer}>
              <Typography variant="title" gutterBottom>
                Eye Color:
              </Typography>
              <Typography variant="title" gutterBottom>
                {character.eye_color}
              </Typography>
            </div>
            <div className={classes.statsContainer}>
              <Typography variant="title" gutterBottom>
                Gender:
              </Typography>
              <Typography variant="title" gutterBottom>
                {character.gender}
              </Typography>
            </div>
            <div className={classes.statsContainer}>
              <Typography variant="title" gutterBottom>
                Hair Color:
              </Typography>
              <Typography variant="title" gutterBottom>
                {character.hair_color}
              </Typography>
            </div>
            <div className={classes.statsContainer}>
              <Typography variant="title" gutterBottom>
                Height:
              </Typography>
              <Typography variant="title" gutterBottom>
                {character.height}
              </Typography>
            </div>
            <div className={classes.statsContainer}>
              <Typography variant="title" gutterBottom>
                Mass:
              </Typography>
              <Typography variant="title" gutterBottom>
                {character.mass}
              </Typography>
            </div>
            <div className={classes.statsContainer}>
              <Typography variant="title" gutterBottom>
                Skin Color:
              </Typography>
              <Typography variant="title" gutterBottom>
                {character.skin_color}
              </Typography>
            </div>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

CardComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CardComponent);
