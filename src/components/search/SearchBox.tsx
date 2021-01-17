import React, { ChangeEvent, FC } from "react"
import {
  Box,
  FormControl,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  theme,
} from "@chakra-ui/react"
import { FiSearch, FiXCircle } from "react-icons/fi"

interface IProps {
  active: boolean
  handleFocus: any
  handleClose: any
  refine: any
  currentRefinement: any
}

const SearchBox: FC<IProps> = ({
  active,
  handleFocus,
  handleClose,
  refine,
  currentRefinement,
}) => {
  return (
    <FormControl
      mb="0"
      onKeyDown={e => {
        if (e.key === "Escape" || e.key === "Esc") {
          handleClose()
        }
      }}
      w="100%"
    >
      <InputGroup>
        <Input
          className="SearchInput"
          type="text"
          color="grey.300"
          placeholder="Search"
          aria-label="Search"
          onChange={(e: ChangeEvent<any>) => refine(e.target.value)}
          value={currentRefinement}
          onFocus={handleFocus}
          borderRadius="1.5rem"
        />
        <InputRightElement
          children={
            active ? (
              <Box
                display={"inline"}
                as={FiXCircle}
                onClick={handleClose}
                color={"gray.400"}
              />
            ) : (
              <Box display={"inline"} as={FiSearch} color={"gray.400"} />
            )
          }
        />
      </InputGroup>
    </FormControl>
  )
}

export default SearchBox
