'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('AdminPermissions', [{
      title: 'UsersManagement',
      discription: 'user management',
      createdAt: '2018-08-24 00:55:52.06-04'
    }, {
      title: 'AdminUsersManagement',
      discription: 'admin users management',
      createdAt: '2018-08-24 00:55:53.06-04'
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('AdminPermissions', null, {});
  }
};
