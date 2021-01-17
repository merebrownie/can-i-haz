import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { connectSearchBox } from "react-instantsearch-dom";
import { useLocation } from "@reach/router";
import SearchResults from "./SearchResults";
import SearchBox from "./SearchBox";

const useSearchActivity = (refine: any) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState(false);

  const handleFocus = () => {
    setActive(true);
  };

  const handleClose = () => {
    refine("");
    setActive(false);
  };

  // Reset the search activity state on the router changing
  // Will run once on mount
  useEffect(() => {
    handleClose();
  }, [pathname]);

  return { active, handleFocus, handleClose };
};

interface IProps {
  currentRefinement: any;
  refine: any;
}

const SearchBar = ({ refine, currentRefinement }: IProps) => {
  const { active, handleFocus, handleClose } = useSearchActivity(refine);
  console.log({ active });
  return (
    <>
      <Box d={"flex"} w="100%">
        <SearchBox
          active={active}
          handleClose={handleClose}
          handleFocus={handleFocus}
          currentRefinement={currentRefinement}
          refine={refine}
        />
      </Box>
      {active && currentRefinement && (
        <SearchResults handleClose={handleClose} />
      )}
    </>
  );
};

export default connectSearchBox(SearchBar);
