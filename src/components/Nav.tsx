import React, { FC } from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { Link } from "gatsby";
import Search from "./search";

interface IProps {
  showSearch?: boolean;
}

const Nav: FC<IProps> = ({ showSearch = true }) => {
  return (
    <Box backgroundColor="blue.400" p="2em" mb="5em">
      <Flex justify="space-between">
        <Link to="/">
          <Heading as="h1" size="md" color="white">
            Can I Haz?
          </Heading>
        </Link>
        {showSearch && <Search />}
      </Flex>
    </Box>
  );
};

export default Nav;
