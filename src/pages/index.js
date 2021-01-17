import React, { useState } from "react";
import { Center, Box, Heading, Stack, Text } from "@chakra-ui/react";
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
        <Nav showSearch={false} />
        <Box>
          <Header />
          <Center>
            <Search />
          </Center>
        </Box>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default IndexPage;
