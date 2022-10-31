import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import { connectStateResults } from "react-instantsearch-dom";

const Stats = connectStateResults(({ searchResults }) => {
  const hitCount = searchResults && searchResults.nbHits;

  return (
    <Image src="../images/algolia.svg" />
    //   hitCount > 0 ? (
    //   <Text className="HitCount">
    //     {hitCount} result{hitCount !== 1 ? `s` : ``}
    //   </Text>
    // ) : null
  );
});

export default Stats;
