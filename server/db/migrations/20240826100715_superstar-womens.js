/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('superstar_womens', (table) => {
    table.integer('id').primary()
    table.string('name')
    table.string('alignment')
    table.string('fightingStyle')
    table.string('faction')
    table.boolean('dlc')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('superstar_womens')
}
