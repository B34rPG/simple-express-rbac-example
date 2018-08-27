'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('AdminRolePermissionRs', [{
      role_id: 1,
      permission_id: 1,
      createdAt: '2018-08-24 00:55:52.06-04'
    }, {
      role_id: 1,
      permission_id: 2,
      createdAt: '2018-08-24 00:55:53.06-04'
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('AdminRolePermissionRs', null, {});
  }
};
