import { Box, Card, Form, FormField, TextInput } from "grommet";
import { FormSearch } from "grommet-icons";
import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../providers/DataProvider";

const MovieSearchCard = () => {
  const { setSearchTerm, searchTerm, searchResultsCount } = useContext(
    DataContext
  );
  const [searchField, setSearchField] = useState({});
  const [previousSearch, setPreviousSearch] = useState(false);

  useEffect(() => {
    previousUse();
  }, [searchTerm]);

  const previousUse = () => {
    if (searchTerm && searchResultsCount) {
      setPreviousSearch(true);
    }
    return previousSearch;
  };

  const handleFormSubmit = (searchObj) => {
    setSearchTerm(searchObj.search);
    if (!searchTerm) {
      console.log("Looks like the term is blank right now", searchTerm);
    } else {
      console.log("This is the new search terms: ", searchTerm);
    }
  };

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
          <Form
            value={searchField}
            onChange={(nextValue) => setSearchField(nextValue)}
            onSubmit={({ value }) => handleFormSubmit(value)}
          >
            <FormField name="search" htmlFor="search-text-field">
              <TextInput
                id="search-text-field"
                name="search"
                placeholder="Search Movie Title"
                size="medium"
                icon={<FormSearch />}
                reverse
                // You were doing a conditinal render for the label to display previous results :)
                // label={}
              />
            </FormField>
          </Form>
        </Box>
      </Card>
    </Box>
  );
};

export default MovieSearchCard;
