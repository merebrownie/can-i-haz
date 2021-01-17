import React, { FC } from "react";
import { Heading, Text, Center, Stack, Badge, Box } from "@chakra-ui/react";
import Search from "../components/search/index";
import Nav from "../components/Nav";
import data, { STATUS } from "../data";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Status from "../components/Status";
import NotFound from "../components/NotFound";

export interface IFood {
  slug: string;
  food: string;
  status: STATUS;
  result: string;
}

interface IProps {
  location: any;
}

const Food: FC<IProps> = (props) => {
  const name = props.location?.search?.split("=")[1]?.replaceAll("-", " ");
  const thisFood = data.find((f) => f.food === name);
  return (
    <>
      <main style={{ height: "100vh" }}>
        <title>Can I Haz?</title>
        <Nav />
        <Header food={thisFood !== undefined ? thisFood : undefined} />
        {thisFood ? (
          <Box pt="2em" pb="2em">
            <Center>
              <Status status={thisFood.status} />
            </Center>
            <Center>
              <Text fontSize="xl">{thisFood.result}</Text>
            </Center>
          </Box>
        ) : (
          <NotFound />
        )}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Food;
