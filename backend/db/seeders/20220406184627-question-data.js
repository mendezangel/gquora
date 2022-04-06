'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Questions', [
      {
        ownerId: 1,
        title: 'fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis volutpat est velit egestas dui id ornare arcu odio. Massa ultricies mi quis hendrerit dolor magna. Eros in cursus turpis massa. Enim nec dui nunc mattis enim ut tellus elementum.'
      },
      {
        ownerId: 2,
        title: 'fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis volutpat est velit egestas dui id ornare arcu odio. Massa ultricies mi quis hendrerit dolor magna. Eros in cursus turpis massa. Enim nec dui nunc mattis enim ut tellus elementum.'
      },
      {
        ownerId: 3,
        title: 'fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis volutpat est velit egestas dui id ornare arcu odio. Massa ultricies mi quis hendrerit dolor magna. Eros in cursus turpis massa. Enim nec dui nunc mattis enim ut tellus elementum.'
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Questions', null, {});
  }
};
