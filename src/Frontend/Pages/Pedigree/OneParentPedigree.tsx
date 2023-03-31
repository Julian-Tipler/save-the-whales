import React, { useState } from "react";
import { WhaleNode } from "./WhaleNode";
import { Whale } from "../../Types/Types";
import { mockWhales } from "./mockData";

export function OneParentPedigree({ whale }: { whale: Whale }) {
  const children = getChildren({ whale, whales: mockWhales });
  return (
    <>
      <WhaleNode whale={whale} />
      {children.length && children.map((child) => (
        <OneParentPedigree whale={child} />
      ))}
    </>
  );
}

export function getChildren({
  whale,
  whales,
}: {
  whale: Whale;
  whales: Whale[];
}) {
  //filters all whales to see if any whales have the current whale as father or mother
  //returns whale children
  return whales.filter(
    (w) => w.fatherId === whale.id || w.motherId === whale.id
  );
}
