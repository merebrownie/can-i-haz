import { Box, BoxProps } from "@chakra-ui/react";
import algoliasearch from "algoliasearch/lite";
import { default as React } from "react";
import { InstantSearch } from "react-instantsearch-dom";
import SearchBar from "./SearchBar";

const Search = ({ width = "80%" }: { width?: string }) => {
  const searchClient =
    process.env.GATSBY_ALGOLIA_APP_ID &&
    process.env.GATSBY_ALGOLIA_SEARCH_KEY &&
    algoliasearch(
      process.env.GATSBY_ALGOLIA_APP_ID,
      process.env.GATSBY_ALGOLIA_SEARCH_KEY
    );

  return (
    <InstantSearch
      searchClient={searchClient}
      indexName={process.env.GATSBY_ALGOLIA_INDEX_NAME || ""}
    >
      <Box transition={"display 5s ease"} w={width}>
        <SearchBar />
      </Box>
    </InstantSearch>
  );
};
export default Search;
