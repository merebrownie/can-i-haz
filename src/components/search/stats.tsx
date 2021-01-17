import { Box, Text } from "@chakra-ui/react"
import React from "react"
import { connectStateResults } from "react-instantsearch-dom"

const Stats = connectStateResults(({ searchResults }) => {
  const hitCount = searchResults && searchResults.nbHits

  return hitCount > 0 ? (
    <Text className="HitCount">
      {hitCount} result{hitCount !== 1 ? `s` : ``}
    </Text>
  ) : null
})

export default Stats
