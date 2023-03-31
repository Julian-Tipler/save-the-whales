import React, { useState } from "react";
import { WhaleNode } from "./WhaleNode";
import { Whale } from "../../Types/Types"


export function Pedigree({ whales }: { whales: Whale[] }) {
  const [selectedWhale, setSelectedWhale] = useState<Whale | null>(null);

  function handleClick(whale: Whale) {
    setSelectedWhale(whale);
  }

  function getChildren(whale: Whale): Whale[] {
    return whales.filter(
      (a) => a.fatherId === whale.id || a.motherId === whale.id
    );
  }

  return (
    <div>
      {whales.map((whale) => (
        <div key={whale.id}>
          <WhaleNode whale={whale} />
          {getChildren(whale).length > 0 && (
            <div>
              {getChildren(whale).map((child) => (
                <Pedigree key={child.id} whales={[child]} />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
