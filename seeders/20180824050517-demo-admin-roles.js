'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('AdminRoles', [{
      title: 'SuperAdmin',
      discription: 'super admin',
      createdAt: '2018-08-24 00:55:52.06-04'
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('AdminRoles', null, {});
  }
};
