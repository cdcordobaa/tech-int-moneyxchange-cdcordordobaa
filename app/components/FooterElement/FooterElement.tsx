import * as React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, green, blueGrey } from '@material-ui/core/colors';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Camera from '@material-ui/icons/Camera';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

export interface IFooterElementProps {
    author: string;
    title: string;
    content?: string;
    type: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minWidth: 200,
      maxWidth: 270,
      minHeight: 230,
      maxHeight: 300,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    liked: {
      color: '#f00',
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    camera: {
      color: theme.palette.getContrastText(deepOrange[500]),
      backgroundColor: deepOrange[500],
    },
    assigment: {
      color: '#fff',
      backgroundColor: green[500],
    },
    money: {
      color: '#fff',
      backgroundColor: blueGrey[500],
    },
    large: {
      width: theme.spacing(6),
      height: theme.spacing(6),
    },
    imagescontent: {
        marginTop: 25,
        marginBottom: 5,

    },
  }),
);

export default function FooterElement(props: IFooterElementProps) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [liked, setLiked] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleLiked = () => {
    setLiked(!liked);
  };

  const renderContent = () => {
    const contentBlock =
      props.type === 'paragraph' ? (
        <Typography variant="body2" component="p" paragraph>
          {props.content}
        </Typography>
      ) : (
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="baseline"
          className={classes.imagescontent}
        >
          <Avatar
            variant="rounded"
            className={[classes.assigment, classes.large].join(' ')}
          >
            <AssignmentIcon />
          </Avatar>
          <Avatar
            variant="rounded"
            className={[classes.camera, classes.large].join(' ')}
          >
            <Camera />
          </Avatar>
          <Avatar
            variant="rounded"
            className={[classes.money, classes.large].join(' ')}
          >
            <MonetizationOnIcon />
          </Avatar>
        </Grid>
      );

    return contentBlock;
  };

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        {props.type === 'paragraph' && <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {props.author}
        </Typography>}
        <Typography variant="h5" component="h2">
          {props.title}
        </Typography>
        {renderContent()}
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="add to favorites"
          className={clsx({
            [classes.liked]: liked,
          })}
          onClick={handleLiked}
        >
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
