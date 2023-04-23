import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { GitHub, LinkedIn, Description } from '@mui/icons-material';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { fab } from "@fortawesome/free-brands-svg-icons";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function AppCard({title, github, deployed, img, imgDescription}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 360 }}>
      <CardHeader
        // avatar={
          // <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
          //   JT
          // </Avatar>
          
        // }
        action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>

        <IconButton href={github} aria-label="Link to Github">
          <GitHub color='primary' />
        </IconButton>
        }
        title={<a href={deployed}>{title}</a>}
        // subheader={<a href={deployed}>{deployed}</a>}
      />
      <a href={deployed}>
        <CardMedia
          component="img"
          height="194"
          image={process.env.PUBLIC_URL + img}
          alt={imgDescription}
        />
      </a>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {imgDescription}
        </Typography>
      </CardContent>
      {/* <CardActions disableSpacing>
        <IconButton href={github} aria-label="Github">
          <GitHub />
        </IconButton>
        <IconButton href='https://www.linkedin.com/in/jason-t-tilley/' aria-label="Linkedin">
          <LinkedIn />
        </IconButton>
        <IconButton href='https://docs.google.com/document/d/1JZmUQ6V4Xdrd1v8K9TQgww6I28AzIHfSSeBME6vDJ1w/edit?usp=sharing' aria-label="Resume">
          <Description />
        </IconButton>
      </CardActions> */}
      
    </Card>
  );
}