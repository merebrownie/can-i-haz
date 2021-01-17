import React, { FC } from "react";
import { Heading, Text, Center, Stack, Badge, Box } from "@chakra-ui/react";
import Search from "../components/search/index";
import Nav from "../components/Nav";
import data, { STATUS } from "../data";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface IFood {
  id: string;
  food: string;
  status: STATUS;
  result: string;
}

interface IProps {
  location: any;
}

const Food: FC<IProps> = (props) => {
  const name = props.location.search.split("=")[1].replaceAll("-", " ");
  const thisFood = data.find((f) => f.food === name);
  console.log({ thisFood }, thisFood?.food);
  return (
    <>
      <main style={{ height: "100vh" }}>
        <title>Can I Haz?</title>
        <Nav />
        <Header food={thisFood !== undefined ? thisFood.food : "nope"} />
        {thisFood ? (
          <Box pt="2em" pb="2em">
            <Center>
              <Heading as="h2" size="xl">
                {thisFood.food}
                <Badge colorScheme="green" fontSize="2xl" ml="1em">
                  {thisFood.status}
                </Badge>
              </Heading>
            </Center>
            <Center>
              <Text>{thisFood.result}</Text>
            </Center>
          </Box>
        ) : (
          <>
            <Center>
              <Heading>Ruh-Roh</Heading>
            </Center>
            <Center>
              <Text>Food not found :(</Text>
            </Center>
          </>
        )}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Food;
