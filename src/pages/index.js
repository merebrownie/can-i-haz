import React, { useState } from "react";
import { Center, Box, Container, Stack, Text } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const IndexPage = (props) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Can I Haz?</title>
        <meta
          name="Description"
          content="Simple search to check that foods are safe before feeding them to your dog!"
        />
        <link rel="canonical" href="https://canihaz.merebrownie.dev" />
      </Helmet>
      <main style={{ height: "100vh" }}>
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
      <Footer />
    </>
  );
};

export default IndexPage;
