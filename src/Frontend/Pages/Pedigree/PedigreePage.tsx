import React, { useEffect, useState } from "react";
import { D3TreePedigree } from "./D3TreePedigree";
import { mockWhales } from "./mockData";
import { Whale } from "../../Types/Types";
import { AddWhalesUploader } from "../../Utility/AddWhalesUploader";

export function PedigreePage() {
  const [whales, setWhales] = useState<Whale[] | null>(null);

  //This will actually use the whales uploader
  useEffect(() => {
    setWhales(mockWhales);
  }, []);

  return (
    //pedigree container
    <div>
      {/* {whales ? (
        <Pedigree whales={whales} />
      ) : (
        <div>Zero State (please upload whales)</div>
      )} */}
      {whales ? (
        <D3TreePedigree />
      ) : (
        <div>Zero State (please upload whales)</div>
      )}
      <AddWhalesUploader />
    </div>
  );
}
