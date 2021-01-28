import React, { FC } from "react";
import { Box, Center, Link, Heading, Text } from "@chakra-ui/react";
import Search from "./search";

interface IProps {
  showSearch?: boolean;
}

const Footer: FC<IProps> = ({ showSearch = true }) => {
  return (
    <Box as="footer" p="1em" height="2em" mt="-4em">
      <Center>
        <Text size="xs" as="i">
          Disclaimer: Not a veterinary specialist and not responsible for the
          accuracy of this information. All data obtained from{" "}
          <Link
            href="https://www.healthline.com/nutrition/human-foods-for-dogs"
            isExternal
          >
            Healthline
          </Link>
          .
        </Text>
      </Center>
    </Box>
  );
};

export default Footer;
