import React, { useEffect, useState } from "react";
import { mockWhales } from "./mockData";
import { Whale } from "../../Types/Types";
import { D3PedigreeTable } from "./D3PedigreeTable";
import { AddFamilyMemberModal } from "../../Utility/AddFamilyMemberModal";

export function PedigreePage() {
  const [whales, setWhales] = useState<Whale[] | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  //This will actually use the whales uploader
  useEffect(() => {
    setWhales(mockWhales);
  }, []);

  return (
    //pedigree container
    <div>
      {whales ? (
        <D3PedigreeTable />
      ) : (
        <div>Zero State (please upload whales)</div>
      )}
      <AddFamilyMemberModal isOpen={isOpen}/>
    </div>
  );
}
