import React, { FC, useState } from "react";
import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

interface IProps {
  food?: string;
}

const Header: FC<IProps> = ({ food }) => {
  console.log({ food });
  return (
    <Center>
      <Box>
        <Center>
          <Heading as="h1" size="2xl">
            Can I Haz?
          </Heading>
        </Center>

        {food && (
          <Center>
            <Heading as="h1" size="2xl">
              {food}?
            </Heading>
          </Center>
        )}
      </Box>
      <Image
        src="/images/pup.png"
        alt="Photo of a light brown dog with a questioning look."
        boxSize={{ base: "40%", lg: "30%" }}
      />
    </Center>
  );
};

export default Header;
