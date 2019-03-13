import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  card: {
    maxWidth: 350,
    minWidth: 350,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class MediaCard extends React.Component {


  constructor(props) {

    super(props);

    this.state = { expanded: false };

    this.handleExpandClick = () => {
      this.setState(state => ({ expanded: !state.expanded }));
    };
    

        
    };
  

  render() {
    const { classes, title, image, data } = this.props;
    return (
      <Card className={classes.card}>
        <CardHeader
          
          title={"Top " + title}
          subheader={data}
        />
        <CardMedia
          className={classes.media}
          image={image}
          title="Ed Sheeran"
        />
        <CardContent style={{textAlign: "center"}}>
        <div>
          <Button variant="outlined" color="primary" href="/trends">
           {"View " + title + "s"} 
          </Button>
          </div>
        </CardContent>
        
        
      </Card>
    );
  }
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
};

export default withStyles(styles)(MediaCard);