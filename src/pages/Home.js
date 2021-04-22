import './Home.css';
import React from 'react';
import { Box, Grommet } from 'grommet';
import MovieSearchCard from '../components/MovieSearchCard';
import MovieCarousel from '../components/MovieCarousel';

const theme = {
  global: {
    colors: {
      brand: '#4c061d',
      languid: '#d8d4f2',
      shadows: '#c4b2bc',
      grullo: '#a29587',
      bistre: '#846c5b',
      font: '#0a0908',
      white: '#a9927d',
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

const Home = () => {
  return (
    <Grommet theme={theme} full>
      <Box fill responsive justify="start" background="languid">
        <MovieSearchCard />
        <MovieCarousel />
      </Box>
    </Grommet>
  );
};

export default Home;
