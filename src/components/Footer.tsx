import React, { FC } from "react";
import { Box, Center, Link, Heading, Text } from "@chakra-ui/react";
import Search from "./search";

interface IProps {
  showSearch?: boolean;
}

const Footer: FC<IProps> = ({ showSearch = true }) => {
  return (
    <Box p="1em" height="2em" mt="-2em">
      <Center>
        <Text size="xs" as="i">
          Disclaimer: Not a veterinary specialist and not responsible for the
          accuracy of this information. All data obtained from{" "}
          <Link to="https://www.healthline.com/nutrition/human-foods-for-dogs">
            Healthline
          </Link>
          .
        </Text>
      </Center>
    </Box>
  );
};

export default Footer;
