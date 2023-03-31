import React from "react";
import { Whale } from "../../Types/Types";

export function WhaleNode({ whale }: { whale: Whale }) {
  return (
    <>
      <div>{whale.name}</div>
      <div>{whale.id}</div>
      <div>{whale.motherId}</div>
      <div>{whale.fatherId}</div>
    </>
  );
}
