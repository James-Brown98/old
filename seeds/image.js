
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('text').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('text').insert({id: 1, image: 'http://wallpapercave.com/wp/STgHPst.jpg', lat: 40.9006, long:  174.8860}),
        knex('text').insert({id: 2, image: 'http://www.canterbury.ac.nz/international/uc-a-world-recognised-university/living-in-new-zealand/Aoraki-Mt-cook-new-zealand_INT_full.jpg', lat:52.3555, long: 1.1743}),
        knex('text').insert({id: 3, image: 'http://blog.salamandatravel.com/wp-content/uploads/2013/12/3.-Milford-Track.jpg', lat:36.2048, long: 138.2529})
      ]);
    });
};
