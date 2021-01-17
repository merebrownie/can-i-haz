import { Badge, TypographyProps } from "@chakra-ui/react";
import React, { FC } from "react";
import { STATUS } from "../data";
import { IFood } from "../pages/food";

interface IProps {
  status: STATUS | string;
  fontSize?: TypographyProps["fontSize"];
}

const Status: FC<IProps> = ({ status, fontSize = "3xl" }) => {
  let color = "green";
  if (status === STATUS.never || status === "never") color = "red";
  if (status === STATUS.limit || status === "limit") color = "yellow";
  return (
    <Badge colorScheme={color} fontSize={fontSize} ml="1em">
      {status}
    </Badge>
  );
};

export default Status;
