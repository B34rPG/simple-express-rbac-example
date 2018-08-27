'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('AdminUserRoleRs', [{
      user_id: 1,
      role_id: 1,
      createdAt: '2018-08-24 00:55:52.06-04'
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('AdminUserRoleRs', null, {});
  }
};
