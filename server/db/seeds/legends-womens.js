export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('legends-womens').del()

  // Inserts seed entries
  await knex('legends-womens').insert([
    {
      name: 'Beth Phoenix',
      fightingStyle: 'Powerhouse',
      faction: null,
      dlc: false,
    },
    {
      name: 'Chyna',
      fightingStyle: 'Powerhouse',
      faction: null,
      dlc: false,
    },
    {
      name: 'Eve Torres',
      fightingStyle: 'Striker',
      faction: null,
      dlc: false,
    },
    {
      name: 'Lita',
      fightingStyle: 'High Flyer',
      faction: null,
      dlc: false,
    },
    // {
    //   name: 'Michelle McCool',
    //   fightingStyle: '',
    //   faction: '',
    //   dlc: '',
    // },
    {
      name: 'Mighty Molly',
      fightingStyle: 'Technician',
      faction: null,
      dlc: false,
    },
    {
      name: 'Molly Holly',
      fightingStyle: 'Technician',
      faction: null,
      dlc: false,
    },
    {
      name: 'Ronda Rousey',
      fightingStyle: 'Striker',
      faction: null,
      dlc: false,
    },
    {
      name: 'Sensational Sherri',
      fightingStyle: 'Striker',
      faction: null,
      dlc: true,
    },
    {
      name: 'Stacy Keibler',
      fightingStyle: 'Striker',
      faction: null,
      dlc: false,
    },
    {
      name: 'Stephanie McMahon',
      fightingStyle: 'Striker',
      faction: 'The Authority',
      dlc: false,
    },
    {
      name: 'Trish Stratus',
      fightingStyle: 'Striker',
      faction: null,
      dlc: false,
    },
  ])
}
