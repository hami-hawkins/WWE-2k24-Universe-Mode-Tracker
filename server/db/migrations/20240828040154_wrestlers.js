/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('wrestlers', (table) => {
    table.integer('id').primary()
    table.string('name')
    table.string('gender')
    table.string('alignment')
    table.string('fightingStyle')
    table.string('faction')
    table.boolean('dlc')
    table.boolean('isLegend')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('wrestlers')
}
