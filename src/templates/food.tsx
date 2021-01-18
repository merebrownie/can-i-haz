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
  const name = location?.search?.split("=")[1]?.replaceAll("-", " ");
  const thisFood = data.allSitePage.edges[0].node.context;
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
      <footer>
        <Footer />
      </footer>
    </>
  );
};
// const Food: FC<IProps> = (props) => {
//   const name = props.location?.search?.split("=")[1]?.replaceAll("-", " ");
//   const thisFood = data.find((f) => f.name === name);
//   return (
//     <>
//       <main style={{ height: "100vh" }}>
//         <title>Can I Haz?</title>
//         <Nav />
//         <Header food={thisFood !== undefined ? thisFood : undefined} />
//         {thisFood ? (
//           <Box pt="2em" pb="2em">
//             <Center>
//               <Status status={thisFood.status} />
//             </Center>
//             <Center>
//               <Text fontSize="xl">{thisFood.result}</Text>
//             </Center>
//           </Box>
//         ) : (
//           <NotFound />
//         )}
//       </main>
//       <footer>
//         <Footer />
//       </footer>
//     </>
//   );
// };

// export default Food;

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
