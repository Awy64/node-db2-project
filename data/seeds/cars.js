
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
          VIN: '4516432s65',
          make: "honda",
          model: "fit",
          mileage: 12312,
          transmission: "4WD",
          titleStatus: "Clean"
        },
        {
          VIN: '345t4erg654y',
          make: "ford",
          model: "focus",
          mileage: 33,
          transmission: "FWD",
          titleStatus: "Clean"
        },
        {
          VIN: '34tweh65yw4re',
          make: "toyota",
          model: "camery",
          mileage: 66664564,
          transmission: "AWD",
          titleStatus: "Salvage"
        },
      ]);
    });
};
