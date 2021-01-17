import { Badge, Box, Heading, Text } from "@chakra-ui/react";
import { Link } from "gatsby";
import React from "react";
import { Highlight, Snippet } from "react-instantsearch-dom";
import { STATUS } from "../../data";
import Status from "../Status";

export interface IHit {
  food: string;
  id: string;
  objectID: string;
  result: string;
  status: string;
  _highLightResult: {
    food: {
      fullyHighlighted: boolean;
      matchLevel: "full";
      matchedWords: string[];
      value: string;
    };
    id: {
      fullyHighlighted: boolean;
      matchLevel: "full";
      matchedWords: string[];
      value: string;
    };
    result: {
      fullyHighlighted: boolean;
      matchLevel: "full";
      matchedWords: string[];
      value: string;
    };
    status: {
      fullyHighlighted: boolean;
      matchLevel: "full";
      matchedWords: string[];
      value: string;
    };
  };
}

const Hit = ({ hit, onClick }: { hit: IHit; onClick: () => void }) => (
  <Box p="1em">
    <Link to={`/food?name=${hit.food.replaceAll(" ", "-")}`} onClick={onClick}>
      <Text fontWeight="bold" size="sm">
        <Highlight attribute="food" hit={hit} tagName="mark" />
        <Status status={hit.status} fontSize="sm" />
      </Text>
    </Link>
  </Box>
);

export default Hit;
