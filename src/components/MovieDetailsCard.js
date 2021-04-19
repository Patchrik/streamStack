import React, { useContext } from "react";
import { DataContext } from "../providers/DataProvider";

const MovieDetailsCard = () => {
  const { movieDetails } = useContext(DataContext);
  return <div></div>;
};

export default MovieDetailsCard;
