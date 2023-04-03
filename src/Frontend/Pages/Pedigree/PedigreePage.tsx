import React, { useEffect, useState } from "react";
import { mockWhales } from "./mockData";
import { Whale } from "../../Types/Types";
import { AddWhalesUploader } from "../../Utility/AddWhalesUploader";
import FamilyTree from "./FamilyTree";

export function PedigreePage() {
  const [whales, setWhales] = useState<Whale[] | null>(null);

  //This will actually use the whales uploader
  useEffect(() => {
    setWhales(mockWhales);
  }, []);

  return (
    //pedigree container
    <div>
      <FamilyTree/>
      {/* <AddWhalesUploader /> */}
    </div>
  );
}
