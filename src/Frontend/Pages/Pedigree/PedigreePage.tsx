import React, { useEffect, useState } from "react";
import { mockWhales } from "./mockData";
import { Whale } from "../../Types/Types";
import { AddWhalesUploader } from "../../Utility/AddWhalesUploader";
import FamilyTree from "./FamilyTree";

export function PedigreePage() {

  return (
    //pedigree container
    <div>
      <FamilyTree/>
      {/* <AddWhalesUploader /> */}
    </div>
  );
}
