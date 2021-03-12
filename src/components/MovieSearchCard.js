import { Card, TextInput } from "grommet";
import React from "react";

const MovieSearchCard = () => {
  return (
    <div>
      <Card
        height="xsmall"
        width="xlarge"
        elevation="small"
        pad="small"
        round="medium"
        margin="small"
      >
        <TextInput placeholder="Movie Title" size="medium" />
      </Card>
    </div>
  );
};

export default MovieSearchCard;
