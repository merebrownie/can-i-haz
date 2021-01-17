import { Box, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import { connectHits, Hits } from "react-instantsearch-dom";
import Hit, { IHit } from "./Hit";
import Stats from "./stats";

interface IProps {
  hits: any[];
  handleClose: () => void;
}
const SearchResults: FC<IProps> = ({ hits, handleClose }) => {
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
