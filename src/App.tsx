import { useState } from 'react';
import { sculptureList } from './data.tsx';
import './style.css';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { Typography, Button } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';

const ExpandMore = styled((props: IconButtonProps & { expand: boolean }) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  transform: expand ? 'rotate(180deg)' : 'rotate(0deg)',
}));

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);

  function handleNextClick() {
    setIndex((prevIndex) => (prevIndex + 1) % sculptureList.length);
  }

  function handleBackClick() {
    setIndex((prevIndex) => (prevIndex - 1 + sculptureList.length) % sculptureList.length);
  }

  const sculpture = sculptureList[index];

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Container maxWidth="md">
      <Box component="section" sx={{ p: 2, border: '2px solid grey', backgroundColor: 'bisque' }}>
        <Typography variant="h3" component="h3">
          Famous Bands and Singers
        </Typography>
        <Typography sx={{ fontStyle: 'italic' }} variant="h6" component="h6">
          Sean Glenn Magcalas - C-PEITEL3
        </Typography>

        <Stack direction="row" spacing={2} justifyContent="center" sx={{ my: 2 }}>
          <Button
            onClick={handleBackClick}
            variant="outlined"
            color="primary"
            startIcon={<ArrowBackIosNewIcon />}
          >
            <Typography variant="h6">BACK</Typography>
          </Button>

          <Button
            onClick={handleNextClick}
            variant="outlined"
            color="primary"
            endIcon={<ArrowForwardIosIcon />}
          >
            <Typography variant="h6">NEXT</Typography>
          </Button>
        </Stack>

        <Typography variant="h4" component="h2">
          {sculpture.artist}
        </Typography>

        <Typography variant="h6" component="h6">
          ({index + 1} of {sculptureList.length})
        </Typography>

        <Card variant="outlined" sx={{ backgroundColor: 'burlywood', my: 2 }}>
          <CardContent>
            <div className="container">
              <img src={sculpture.url} alt={sculpture.alt} style={{ width: '100%', height: 'auto' }} />
            </div>
          </CardContent>
        </Card>

        <ExpandMore expand={expanded} onClick={handleExpandClick} sx={{ fontSize: 80 }}>
          <ExpandMoreIcon fontSize="inherit" />
        </ExpandMore>

        {expanded && (
          <Typography variant="body1" sx={{ mt: 2 }}>
            {sculpture.description}
          </Typography>
        )}
      </Box>
    </Container>
  );
}
