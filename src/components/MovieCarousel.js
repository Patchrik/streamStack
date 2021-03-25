import React, { useContext } from "react";
import { Card, CardBody, CardFooter, CardHeader, Image } from "grommet";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { DataContext } from "../providers/DataProvider";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const MovieCarousel = () => {
  const { movies } = useContext(DataContext);

  return (
    <Carousel responsive={responsive}>
      {movies.map((movie) => (
        <Card
          key={movie.imdbID}
          width="medium"
          height="large"
          margin="small"
          pad="small"
        >
          <CardHeader>{movie.Title}</CardHeader>
          <CardBody>
            <Image fit="cover" src={movie.Poster} />
          </CardBody>
          <CardFooter>Released: {movie.Year}</CardFooter>
        </Card>
      ))}
    </Carousel>
  );
};

export default MovieCarousel;
