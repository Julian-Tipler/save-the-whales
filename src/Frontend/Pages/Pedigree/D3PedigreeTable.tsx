import React from "react";
import Tree from "react-d3-tree";
import { Box } from "@chakra-ui/layout";
import { mockWhales } from "./mockData";

// This is a simplified example of an org chart with a depth of 2.
// Note how deeper levels are defined recursively via the `children` property.

export function D3PedigreeTable() {
  return (
    <Box h="100vh" w="100vw">
      <Tree data={mockWhales} orientation={"vertical"} depthFactor={-100} pathFunc="elbow" />
    </Box>
  );
}
