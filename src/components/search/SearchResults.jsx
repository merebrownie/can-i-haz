import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { connectHits } from "react-instantsearch-dom";
import Hit, { IHit } from "./Hit";
import Stats from "./stats";

const SearchResults = ({ hits, handleClose }) => {
  return (
    <Box
      backgroundColor="blue.400"
      pos="fixed"
      w="100%"
      left="0%"
      transition={"bottom 2s ease"}
      color={"white"}
      p="1em"
    >
      <Stats />
      {hits.length ? (
        hits.map((hit) => <Hit key={hit.id} hit={hit} onClick={handleClose} />)
      ) : (
        <Text>No Results</Text>
      )}
    </Box>
  );
};

export default connectHits(SearchResults);
