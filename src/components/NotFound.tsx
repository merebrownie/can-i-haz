import React, { FC } from "react";
import { Heading, Text, Center, Stack, Badge, Box } from "@chakra-ui/react";

const NotFound: FC = () => {
  return (
    <Box pt="2em" pb="2em">
      <Center>
        <Heading>Ruh-Roh</Heading>
      </Center>
      <Center>
        <Text fontSize="xl">Food not found. Try using the search.</Text>
      </Center>
    </Box>
  );
};

export default NotFound;
