import React, { useState } from "react";
import { WhaleNode } from "./WhaleNode";
import { Whale } from "../../Types/Types";

export function Pedigree({ whales }: { whales: Whale[] | null }) {

  if (!whales) {
    return <div>Please upload whale data</div>;
  }

  return (
    <div>
      {whales.map((whale) => (
        <div key={whale.id}>
          <WhaleNode whale={whale} />
          {getChildren({ whale, whales }).length > 0 && (
            <div>
              {getChildren({ whale, whales }).map((child) => (
                <Pedigree key={child.id} whales={[child]} />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
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