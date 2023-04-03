import React, { useState } from "react";
import { WhaleNode } from "./WhaleNode";
import { Whale } from "../../Types/Types";
import { mockWhales } from "./mockData";
import * as dtree from "d3-dtree";

let treeData = [
  {
    name: "Niclas Superlongsurname",
    class: "man",
    textClass: "emphasis",
    marriages: [
      {
        spouse: {
          name: "Grandma",
          class: "woman",
          extra: {
            nickname: "Illi",
          },
        },
        children: [
          {
            name: "James",
            class: "man",
            marriages: [
              {
                spouse: {
                  name: "Alexandra",
                  class: "woman",
                },
                children: [
                  {
                    name: "Eric",
                    class: "man",
                    marriages: [
                      {
                        spouse: {
                          name: "Eva",
                          class: "woman",
                        },
                      },
                    ],
                  },
                  {
                    name: "Jane",
                    class: "woman",
                  },
                  {
                    name: "Jasper",
                    class: "man",
                  },
                  {
                    name: "Emma",
                    class: "woman",
                  },
                  {
                    name: "Julia",
                    class: "woman",
                  },
                  {
                    name: "Jessica",
                    class: "woman",
                  },
                ],
              },
            ],
          },
          {
            name: "Zoe",
            class: "woman",
            marriages: [
              {
                spouse: {
                  name: "Julian",
                  class: "man",
                  depthOffset: 1,
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "other random sib",
    class: "woman",
    marriages: [
      {
        spouse: {
          name: "Julian",
          class: "man",
          depthOffset: 1,
        },
      },
    ],
  },
];

dtree.init(treeData, {
  target: "#graph",
  debug: true,
  height: 800,
  width: 1200,
  callbacks: {
    nodeClick: function (name, extra) {
      console.log(name);
    },
    textRenderer: function (name, extra, textClass) {
      // THis callback is optinal but can be used to customize
      // how the text is rendered without having to rewrite the entire node
      // from screatch.
      if (extra && extra.nickname) name = name + " (" + extra.nickname + ")";
      return "<p align='center' class='" + textClass + "'>" + name + "</p>";
    },
    nodeRenderer: function (
      name,
      x,
      y,
      height,
      width,
      extra,
      id,
      nodeClass,
      textClass,
      textRenderer
    ) {
      // This callback is optional but can be used to customize the
      // node element using HTML.
      let node = "";
      node += "<div ";
      node += 'style="height:100%;width:100%;" ';
      node += 'class="' + nodeClass + '" ';
      node += 'id="node' + id + '">\n';
      node += textRenderer(name, extra, textClass);
      node += "</div>";
      return node;
    },
  },
});

export function D3TreePedigree() {
  return <div id="graph"></div>;
}

export function getChildren({
  whale,
  whales,
}) {
  //filters all whales to see if any whales have the current whale as father or mother
  //returns whale children
  return whales.filter(
    (w) => w.fatherId === whale.id || w.motherId === whale.id
  );
}
