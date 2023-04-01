export const mockWhales = [
  {
    id: "64583",
    name: "shamu's child",
    motherId: null,
    fatherId: null,
    children: [
      {
        id: "49603",
        name: "shamu",
        motherId: "64583",
        fatherId: "92093",
        children: [
          {
            id: "49603",
            name: "shamu's mom",
            motherId: "49603",
            fatherId: null,
            children: [],
          },
          {
            id: "49603",
            name: "shamu's dad",
            motherId: "49603",
            fatherId: null,
            children: [],
          },
        ],
      },
      {
        id: "49603",
        name: "shamu's wife",
        motherId: "64583",
        fatherId: "92093",
      },
    ],
  },
  {
    id: "32342",
    name: "shamu's bastard",
    motherId: "66666",
    fatherId: "49603",
    children: [
      {
        id: "49603",
        name: "shamu",
        motherId: "64583",
        fatherId: "92093",
        children: [],
      },
    ],
  },
];

//create new child will actually create a new child at a new top level
