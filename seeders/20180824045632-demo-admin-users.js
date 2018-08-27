'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('AdminUsers', [{
      userName: 'admin',
      password: '$2a$10$vc1Mb184V7rbyrd285nl7.aFNQ/iu9Ud9kRVo1eUaZTesEmEcGXNW',
      email: 'ADMIN@XXX.XXX',
      createdAt: '2018-08-24 00:55:52.06-04'
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('AdminUsers', null, {});
  }
};
