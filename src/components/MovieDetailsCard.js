import { Box, Card } from "grommet";
import React, { useContext } from "react";
import { DataContext } from "../providers/DataProvider";

const MovieDetailsCard = () => {
  const { movieDetails } = useContext(DataContext);
  return (
    <Box align="center">
      <Card
        height="large"
        width="large"
        elevation="small"
        pad="small"
        round="medium"
        margin="small"
        align="center"
        justify="center"
        background="brand"
      >
        <Box width="75%">
          {" "}
          Hello I are details.
          <p>${movieDetails.Title}</p>
        </Box>
      </Card>
    </Box>
  );
};

export default MovieDetailsCard;
