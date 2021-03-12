import React, { useState } from "react";
import { Box, Heading, Grommet } from "grommet";
import AppBar from "../components/AppBar";
import MovieSearchCard from "../components/MovieSearchCard";

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
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <Grommet theme={theme} full>
      <Box fill>
        <AppBar>
          <Heading level="3" margin="none">
            streamStack
          </Heading>
        </AppBar>
        <Box direction="row">
          <Box flex align="center" justify="center">
            <MovieSearchCard />
          </Box>
        </Box>
      </Box>
    </Grommet>
  );
};

export default Home;
