import React, { useState } from "react";
import { Box, Heading, Grommet } from "grommet";
import AppBar from "../components/AppBar";
import MovieSearchCard from "../components/MovieSearchCard";
import MovieCarousel from "../components/MovieCarousel";

const theme = {
  global: {
    colors: {
      brand: "#228BE6",
    },
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
};

const Home = () => {
  return (
    <Grommet theme={theme} full>
      <Box fill responsive justify="start">
        <AppBar>
          <Heading level="3" margin="none">
            streamStack
          </Heading>
        </AppBar>
        <MovieSearchCard />
        <MovieCarousel />
      </Box>
    </Grommet>
  );
};

export default Home;
