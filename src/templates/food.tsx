import React, { FC } from "react";
import {
  Heading,
  Text,
  Center,
  Stack,
  Badge,
  Box,
  Container,
} from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import Search from "../components/search/index";
import Nav from "../components/Nav";
// import jsonData from "./data";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Status from "../components/Status";
import NotFound from "../components/NotFound";
import { graphql } from "gatsby";

export interface IFood {
  slug: string;
  name: string;
  status: string;
  result: string;
}

interface IProps {
  location: any;
  data: any;
}

export default ({ data, location }: IProps) => {
  const thisFood = data.allSitePage.edges[0].node.context;
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`Can I Haz ${thisFood?.name}?`}</title>
        {thisFood?.status === "yes" && (
          <meta
            name="Description"
            content={`Yes, ${thisFood.name} is safe for dogs to eat.`}
          />
        )}
        {thisFood?.status === "limit" && (
          <meta
            name="Description"
            content={`Limited, ${thisFood.name} is safe for dogs to eat in limited amounts.`}
          />
        )}
        {thisFood?.status === "never" && (
          <meta
            name="Description"
            content={`Never, ${thisFood.name} is never for dogs to eat.`}
          />
        )}
        <link rel="canonical" href="https://canihaz.merebrownie.dev" />
      </Helmet>
      <main style={{ height: "100vh" }}>
        <Nav />
        <Header food={thisFood !== undefined ? thisFood : undefined} />
        {thisFood ? (
          <Box pt="2em" pb="2em">
            <Center>
              <Status status={thisFood.status} />
            </Center>
            <Container mt="1em">
              <Center>
                <Text fontSize="xl">{thisFood.result}</Text>
              </Center>
            </Container>
          </Box>
        ) : (
          <NotFound />
        )}
      </main>
      <Footer />
    </>
  );
};

export const query = graphql`
  query($path: String!) {
    allSitePage(filter: { path: { eq: $path } }) {
      edges {
        node {
          context {
            name
            slug
            status
            result
          }
        }
      }
    }
  }
`;
