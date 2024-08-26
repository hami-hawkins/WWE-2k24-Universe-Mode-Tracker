export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('legends-womens').del()

  // Inserts seed entries
  await knex('legends-womens').insert([
    { name: 'Beth Phoenix' },
    { name: 'Chyna' },
    { name: 'Eve Torres' },
    { name: 'Lita' },
    { name: 'Michelle McCool' },
    { name: 'Mighty Molly' },
    { name: 'Molly Holly' },
    { name: 'Sensational Sherri' },
    { name: 'Stacy Keibler' },
    { name: 'Stephanie McMahon' },
    { name: 'Trish Stratus' },
  ])
}
