import { Box, Card, TextInput } from "grommet";
import { FormSearch } from "grommet-icons";
import React from "react";

const MovieSearchCard = () => {
  return (
    <Box align="center" overflow={{ horizontal: "auto", vertical: "auto" }}>
      <Card
        height="xsmall"
        width="large"
        elevation="small"
        pad="small"
        round="medium"
        margin="small"
        align="center"
        justify="center"
      >
        <Box width="75%">
          <TextInput
            placeholder="Movie Title"
            size="medium"
            icon={<FormSearch />}
          />
        </Box>
      </Card>
    </Box>
  );
};

export default MovieSearchCard;
