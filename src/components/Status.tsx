import { Badge, TypographyProps } from "@chakra-ui/react";
import React, { FC } from "react";
import { STATUS } from "../data";
import { IFood } from "../templates/food";

interface IProps {
  status: string;
  fontSize?: TypographyProps["fontSize"];
}

const Status: FC<IProps> = ({ status, fontSize = "3xl" }) => {
  let color = "green";
  if (status === "never") color = "red";
  if (status === "limit") color = "yellow";
  return (
    <Badge colorScheme={color} fontSize={fontSize} ml="1em">
      {status}
    </Badge>
  );
};

export default Status;
