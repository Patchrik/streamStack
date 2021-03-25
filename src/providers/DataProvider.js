import React, { createContext, useState } from "react";

// @ts-ignore this is throwing an error for really no good reason. We're using context as a global store right now.
export const DataContext = createContext();

export const DataProvider = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResultsCount, setSearchResultsCount] = useState(0);
  const [movies, setMovies] = useState([]);
  const [movieDetails, setMovieDetails] = useState({});

  const fakeMovieSearch = {
    Search: [
      {
        Title: "Avengers: Endgame",
        Year: "2019",
        imdbID: "tt4154796",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
      },
      {
        Title: "Higherlander IV: Endgame",
        Year: "2000",
        imdbID: "tt0144964",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BZWMyZDdhNDYtNWE5MS00N2Q5LThmYjMtOGMzZjFmOGIzMWQ3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
      },
      {
        Title: "Operation: Endgame",
        Year: "2010",
        imdbID: "tt1268987",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTgzNzYyNDc3M15BMl5BanBnXkFtZTcwNzA5MDA2Mw@@._V1_SX300.jpg",
      },
      {
        Title: "Endgame",
        Year: "2011",
        imdbID: "tt1797629",
        Type: "series",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTM0NzUwNjk5MF5BMl5BanBnXkFtZTcwOTk3NDM4NA@@._V1_SX300.jpg",
      },
      {
        Title: "Dead Rising: Endgame",
        Year: "2016",
        imdbID: "tt5481404",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTU1NzY2MzgxMF5BMl5BanBnXkFtZTgwMzIxNjE1OTE@._V1_SX300.jpg",
      },
    ],
    totalResults: "53",
    Response: "True",
  };

  const getSearchFakeResults = () => {
    setMovies(fakeMovieSearch.Search);
  };

  const getSearchResults = async (queryTerm) => {
    const MDBkey = process.env.REACT_APP_MOVIE_DB_KEY;

    const response = await fetch(
      `https://movie-database-imdb-alternative.p.rapidapi.com/?s=${queryTerm}&r=json`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key": MDBkey,
          "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
        },
      }
    );
    if (!response.ok) {
      const message = `An error has occurred: ${response.status}`;
      throw new Error(message);
    }
    const data = await response.json();
    if (!data.Search) {
      setMovies([]);
      console.log(`${queryTerm} didn't return any results`);
    } else {
      setMovies(data.Search);
      setSearchResultsCount(data.totalResults);
    }
  };

  return (
    <DataContext.Provider
      value={{
        movies,
        setMovies,
        searchTerm,
        setSearchTerm,
        searchResultsCount,
        movieDetails,
        setMovieDetails,
        getSearchResults,
        getSearchFakeResults,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
