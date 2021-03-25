import "./MovieSearchCard.css";
import { Box, Card, Form, FormField, TextInput } from "grommet";
import { FormSearch } from "grommet-icons";
import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../providers/DataProvider";

const MovieSearchCard = () => {
  const {
    setSearchTerm,
    searchTerm,
    searchResultsCount,
    getSearchResults,
  } = useContext(DataContext);
  const [searchField, setSearchField] = useState({ search: "" });
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
    console.log(searchObj);
    setSearchTerm(searchObj.search);
    getSearchResults(searchObj.search);
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
        background="brand"
      >
        <Box width="75%">
          <Form
            value={searchField}
            onChange={(nextValue) => setSearchField(nextValue)}
            onSubmit={({ value }) => handleFormSubmit(value)}
          >
            <FormField name="search" htmlFor="search-text-field">
              <TextInput
                className="TextInput"
                id="search-text-field"
                name="search"
                placeholder="Search Movie Title"
                size="medium"
                icon={<FormSearch />}
                reverse
              />
            </FormField>
          </Form>
        </Box>
      </Card>
    </Box>
  );
};

export default MovieSearchCard;
