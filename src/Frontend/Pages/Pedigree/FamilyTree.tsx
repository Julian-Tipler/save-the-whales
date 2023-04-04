import "./loader";
import * as dTree from "d3-dtree";
import React, { useEffect, useMemo, useRef, useState } from "react";
import "./FamilyTree.css"

const FamilyTree = () => {
  useEffect(() => {
    dTree.init(
      [
        {
          name: "Father", // The name of the node
          class: "node", // The CSS class of the node
          textClass: "nodeText", // The CSS class of the text in the node
          depthOffset: 1, // Generational height offset
          marriages: [
            {
              // Marriages is a list of nodes
              spouse: {
                // Each marriage has one spouse
                name: "Mother",
              },
              children: [
                {
                  // List of children nodes
                  name: "Child",
                },
              ],
            },
          ],
          extra: {},
        },
      ],
      {
        target: "#graph",
        width: 600,
        height: 800,
      }
    );
  }, []);

  return <div id="graph"></div>;
};

export default FamilyTree;
