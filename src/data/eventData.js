const data = [
  [
    1,
    {
      id: 1,
      name: 'Parivesh',
      fee: 2500,
      maxSize: 15,
      parentEvent: null,
    },
  ],
  [
    2,
    {
      id: 2,
      name: 'Corna',
      fee: 2000,
      maxSize: 10,
      parentEvent: null,
    },
  ],
  [
    3,
    {
      id: 3,
      name: 'Mr. and Ms. Aurora',
      fee: 500,
      maxSize: 1,
      parentEvent: null,
    },
  ],
  [
    4,
    {
      id: 4,
      name: 'Synchro Funk',
      fee: 749,
      maxSize: 15,
      parentEvent: 'stepup',
    },
  ],
  [
    5,
    {
      id: 5,
      name: 'Dancing Dyad',
      fee: 399,
      maxSize: 2,
      parentEvent: 'stepup',
    },
  ],
  [
    6,
    {
      id: 6,
      name: 'Beat the Beat',
      fee: 249,
      maxSize: 1,
      parentEvent: 'stepup',
    },
  ],
  [
    7,
    {
      id: 7,
      name: 'Raag',
      fee: 200,
      maxSize: 4,
      parentEvent: 'eumelia',
    },
  ],
  [
    8,
    {
      id: 8,
      name: 'A-capella',
      fee: 200,
      maxSize: 2,
      parentEvent: 'eumelia',
    },
  ],
  [
    9,
    {
      id: 9,
      name: 'Acoustic Corner',
      fee: 200,
      maxSize: 4,
      parentEvent: 'eumelia',
    },
  ],
  [
    10,
    {
      id: 10,
      name: 'Graffathon',
      fee: 200,
      maxSize: 4,
      parentEvent: 'le-arte-fiesta',
    },
  ],
  [
    11,
    {
      id: 11,
      name: 'On Spot Painting',
      fee: 150,
      maxSize: 1,
      parentEvent: 'le-arte-fiesta',
    },
  ],
  [
    12,
    {
      id: 12,
      name: 'On-spot sketching',
      fee: 150,
      maxSize: 1,
      parentEvent: 'le-arte-fiesta',
    },
  ],
  [
    13,
    {
      id: 13,
      name: 'Best out of Waste',
      fee: 0,
      maxSize: 3,
      parentEvent: 'le-arte-fiesta',
    },
  ],
  [
    14,
    {
      id: 14,
      name: 'Naqaab (Face Painting)',
      fee: 0,
      maxSize: 2,
      parentEvent: 'le-arte-fiesta',
    },
  ],
  [
    15,
    {
      id: 15,
      name: 'Doodly-Doo (Online)',
      fee: 0,
      maxSize: 1,
      parentEvent: 'le-arte-fiesta',
    },
  ],
  [
    16,
    {
      id: 16,
      name: 'Silverscreen',
      fee: 249,
      maxSize: 4,
      parentEvent: 'pikture',
    },
  ],
  [
    17,
    {
      id: 17,
      name: 'Panorama',
      fee: 0,
      maxSize: 1,
      parentEvent: 'pikture',
    },
  ],
  [
    18,
    {
      id: 18,
      name: 'Portray It',
      fee: 0,
      maxSize: 2,
      parentEvent: 'pikture',
    },
  ],
  [
    19,
    {
      id: 19,
      name: 'Open Mic',
      fee: 200,
      maxSize: 1,
      parentEvent: 'a-lit',
    },
  ],
  [
    20,
    {
      id: 20,
      name: 'Morning Radio',
      fee: 200,
      maxSize: 1,
      parentEvent: 'a-lit',
    },
  ],
  [
    21,
    {
      id: 21,
      name: 'Creative Writing (English)',
      fee: 0,
      maxSize: 1,
      parentEvent: 'a-lit',
    },
  ],
  [
    22,
    {
      id: 22,
      name: 'Creative Writing (Hindi)',
      fee: 0,
      maxSize: 1,
      parentEvent: 'a-lit',
    },
  ],
  [
    23,
    {
      id: 23,
      name: 'Nukkad Natak',
      fee: 479,
      maxSize: 20,
      parentEvent: null,
    },
  ],
  [
    24,
    {
      id: 24,
      name: 'IPL Auction',
      fee: 200,
      maxSize: 3,
      parentEvent: 'informal',
    },
  ],
  [
    25,
    {
      id: 25,
      name: 'Aptitude Quiz',
      fee: 150,
      maxSize: 2,
      parentEvent: 'informal',
    },
  ],
  [
    26,
    {
      id: 26,
      name: 'BIT Quiz',
      fee: 150,
      maxSize: 2,
      parentEvent: 'informal',
    },
  ],
  [
    27,
    {
      id: 27,
      name: 'Cine-Binge Quiz',
      fee: 150,
      maxSize: 2,
      parentEvent: 'informal',
    },
  ],
  [
    28,
    {
      id: 28,
      name: 'CS-GO',
      fee: 249,
      maxSize: 5,
      parentEvent: 'gaming',
    },
  ],
  [
    29,
    {
      id: 29,
      name: 'PUBG',
      fee: 149,
      maxSize: 4,
      parentEvent: 'gaming',
    },
  ],
];

module.exports = new Map(data);
