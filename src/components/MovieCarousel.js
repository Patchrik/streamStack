import React, { useContext } from 'react';
import { Card, CardBody, CardFooter, CardHeader, Image } from 'grommet';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { DataContext } from '../providers/DataProvider';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 7,
  },
  desktop2K: {
    breakpoint: { max: 3000, min: 2000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 2000, min: 1080 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1080, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const MovieCarousel = () => {
  const { movies, setMovieDetails, movieDetails } = useContext(DataContext);

  const handleClick = (movie) => {
    console.log(`what's up you click ${movie.Title}, good choice`);
    setMovieDetails(movie);
  };

  return (
    <Carousel responsive={responsive}>
      {movies.map((movie) => (
        <Card
          key={movie.imdbID}
          width="medium"
          height="large"
          margin="small"
          pad="small"
          background="shadows"
        >
          <CardHeader>{movie.Title}</CardHeader>
          <CardBody
            onClick={() => {
              handleClick(movie);
            }}
          >
            <Image fit="contain" src={movie.Poster} />
          </CardBody>
          <CardFooter>Released: {movie.Year}</CardFooter>
        </Card>
      ))}
    </Carousel>
  );
};

export default MovieCarousel;
