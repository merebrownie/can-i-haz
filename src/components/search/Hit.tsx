import { Badge, Box, Heading, Text } from "@chakra-ui/react";
import { Link } from "gatsby";
import React from "react";
import { Highlight, Snippet } from "react-instantsearch-dom";
import { STATUS } from "../../data";
import Status from "../Status";

export interface IHit {
  context: {
    name: string;
    slug: string;
    result: string;
    status: string;
  };
  objectID: string;
  path: string;
  _highLightResult: {
    context: {
      name: {
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
  };
}

const Hit = ({ hit, onClick }: { hit: IHit; onClick: () => void }) => {
  console.log({ hit });
  return (
    <Box p="1em">
      <Link to={`/${hit.context?.slug}`} onClick={onClick}>
        <Text fontWeight="bold" size="sm">
          <Highlight attribute="context.name" hit={hit} tagName="mark" />
          <Status status={hit.context?.status} fontSize="sm" />
        </Text>
      </Link>
    </Box>
  );
};

export default Hit;
