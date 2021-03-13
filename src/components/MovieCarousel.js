import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Carousel,
  Image,
} from "grommet";
import React from "react";

const MovieCarousel = () => {
  return (
    <Box align="center" justify="center">
      <Carousel>
        <Card width="medium" height="large" margin="small">
          <CardHeader>Title: I'm Movie</CardHeader>
          <CardBody>
            <Image
              fit="cover"
              src="https://imgc.allpostersimages.com/img/print/u-g-F9JL6E0.jpg?w=900&h=900&p=0"
            />
          </CardBody>
          <CardFooter>Click me for more deets</CardFooter>
        </Card>
      </Carousel>
    </Box>
  );
};

export default MovieCarousel;
