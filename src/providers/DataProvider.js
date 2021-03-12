import React, { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [searchTerm, setSearchTerm] = useState(null);
  const [movies, setMovies] = useState([]);
  const [movieDetails, setMovieDetails] = useState(null);
};
