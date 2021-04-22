import React from 'react';
import { Box, Heading } from 'grommet';

const AppBar = (props) => {
  return (
    <Box
      tag="header"
      direction="row"
      align="center"
      justify="between"
      background="brand"
      pad={{ left: 'medium', right: 'small', vertical: 'small' }}
      elevation="medium"
      style={{ zIndex: '1' }}
      {...props}
    >
      <Heading level="3" margin="none" color="languid">
        streamStack
      </Heading>
    </Box>
  );
};

export default AppBar;
