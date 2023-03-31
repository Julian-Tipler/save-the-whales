import React, { useState } from "react";
import { Pedigree } from "./Pedigree";

export function PedigreePage() {
  const [data, setData] = useState(null);

  return (
    //pedigree container
    <div>
      <Pedigree />
    </div>
  );
}
