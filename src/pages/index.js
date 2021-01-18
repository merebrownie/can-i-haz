import React, { useState } from "react";
import { Center, Box, Container, Stack, Text } from "@chakra-ui/react";
import Search from "../components/search/index";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

// markup
const IndexPage = (props) => {
  return (
    <>
      <main style={{ height: "100vh" }}>
        <title>Can I Haz?</title>
        <Nav />
        <Box>
          <Header />
          <Container mt="1em">
            <Center>
              <Text fontSize="xl">Search food for me!</Text>
            </Center>
          </Container>
        </Box>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default IndexPage;
