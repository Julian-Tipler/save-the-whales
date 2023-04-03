import React, { useEffect } from "react";
import * as dtree from "d3-dtree";
import "./loader"; // To make d3 and lodash in windows scope which is required for d3-dtree lib
window.dTree = dtree;

export function D3TreePedigree() {
  const svgElement = document.querySelector("svg"); // select the SVG element
  console.log("svgs", svgElement);
  useEffect(() => {
    let treeData = [
      {
        firstName: "Niclas",
        lastName: "superLong",
        class: "man",
        textClass: "emphasis",
        marriages: [],
      },
    ];
    dtree.init(treeData, {
      target: "#graph",
      debug: false,
      hideMarriageNodes: true,
      marriageNodeSize: 10,
      callbacks: {
        /*
      Callbacks should only be overwritten on a need to basis.
      See the section about callbacks below.
    */
      },
      margin: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
      nodeWidth: 100,
      styles: {
        node: "node",
        linage: "linage",
        marriage: "marriage",
        text: "nodeText",
      },
    });
    // coreTree.zoomToFit(1000);
  }, []);

  return <div id="graph"/>;
}

// export function getChildren({ whale, whales }) {
//   //filters all whales to see if any whales have the current whale as father or mother
//   //returns whale children
//   return whales.filter(
//     (w) => w.fatherId === whale.id || w.motherId === whale.id
//   );
// }
