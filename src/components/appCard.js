import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { GitHub } from '@mui/icons-material';
import Zoom from '@mui/material/Zoom';
import { useTheme } from '@mui/material/styles';

export default function AppCard({title, sub, github, deployed, img, imgDescription}) {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const transitionDuration = {
    enter: '2000ms',
    exit: theme.transitions.duration.leavingScreen,
  };

  return (
    <Zoom
    in={value === 0}
    timeout={transitionDuration}
    style={{
      transitionDelay: `0ms`,
    }}
    unmountOnExit
    >
      <Card sx={{ maxWidth: 360 }}>
        <CardHeader
          action={
          <IconButton href={github} aria-label="Link to Github">
            <GitHub color='primary' />
          </IconButton>
          }
          title={<a href={deployed}>{title}</a>}
          subheader={<Typography sx={{ fontSize: 10 }} color="text.secondary">{sub}</Typography>}
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
          <Typography variant="body2" color="text.primary">
            {imgDescription}
          </Typography>
        </CardContent>
      </Card>
    </Zoom>
  );
}