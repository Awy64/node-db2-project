
exports.up = function(knex) {
  return knex.schema
    .createTable('cars', tbl => {
      tbl.increments('carID');
      tbl.text("VIN", 20).unique().notNullable();
      tbl.string("make").notNullable();
      tbl.string("model").notNullable();
      tbl.integer('mileage').notNullable();
      tbl.string('transmission');
      tbl.string("titleStatus");
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExist('cars')
};
