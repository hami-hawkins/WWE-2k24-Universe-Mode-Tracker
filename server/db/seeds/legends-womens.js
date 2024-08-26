export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('legends_womens').del()

  // Inserts seed entries
  await knex('legends_womens').insert([
    {
      name: 'Beth Phoenix',
      alignment: 'Face',
      fightingStyle: 'Powerhouse',
      faction: null,
      dlc: false,
    },
    {
      name: 'Chyna',
      alignment: 'Face',
      fightingStyle: 'Powerhouse',
      faction: null,
      dlc: false,
    },
    {
      name: 'Eve Torres',
      alignment: 'Heel',
      fightingStyle: 'Striker',
      faction: null,
      dlc: false,
    },
    {
      name: 'Lita',
      alignment: 'Face',
      fightingStyle: 'High Flyer',
      faction: null,
      dlc: false,
    },
    {
      name: 'Mighty Molly',
      alignment: 'Face',
      fightingStyle: 'Technician',
      faction: null,
      dlc: false,
    },
    {
      name: 'Molly Holly',
      alignment: 'Heel',
      fightingStyle: 'Technician',
      faction: null,
      dlc: false,
    },
    {
      name: 'Ronda Rousey',
      alignment: 'Heel',
      fightingStyle: 'Striker',
      faction: null,
      dlc: false,
    },
    {
      name: 'Sensational Sherri',
      alignment: 'Heel',
      fightingStyle: 'Striker',
      faction: null,
      dlc: true,
    },
    {
      name: 'Stacy Keibler',
      alignment: 'Face',
      fightingStyle: 'Striker',
      faction: null,
      dlc: false,
    },
    {
      name: 'Stephanie McMahon',
      alignment: 'Heel',
      fightingStyle: 'Striker',
      faction: 'The Authority',
      dlc: false,
    },
    {
      name: 'Trish Stratus',
      alignment: 'Face',
      fightingStyle: 'Striker',
      faction: null,
      dlc: false,
    },
  ])
}
