import React, { FC, useState } from "react";
import {
  Badge,
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { IFood } from "../templates/food";
import pup from "../images/pup.png";

interface IProps {
  food?: IFood;
}

const Header: FC<IProps> = ({ food }) => {
  return (
    <Center>
      <Box>
        <Center>
          <Heading as="h1" size="2xl">
            Can I Haz?
          </Heading>
        </Center>

        {food && (
          <>
            <Center>
              <Heading as="h1" size="2xl">
                {food.name}?
              </Heading>
            </Center>
            {/* <Center>
              <Badge colorScheme="green" fontSize="2xl" ml="1em">
                {food.status}
              </Badge>
            </Center> */}
          </>
        )}
      </Box>
      <Image
        src={pup}
        alt="Photo of a light brown dog with a questioning look."
        boxSize={{ base: "40%", lg: "30%" }}
      />
    </Center>
  );
};

export default Header;
