'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('AdminPermissionOperationRs', [{
      permission_id: 1,
      operation_id: 1,
      createdAt: '2018-08-24 00:55:52.06-04'
    }, {
      permission_id: 1,
      operation_id: 2,
      createdAt: '2018-08-24 00:55:53.06-04'
    }, {
      permission_id: 1,
      operation_id: 3,
      createdAt: '2018-08-24 00:55:54.06-04'
    }, {
      permission_id: 1,
      operation_id: 4,
      createdAt: '2018-08-24 00:55:55.06-04'
    }, {
      permission_id: 2,
      operation_id: 1,
      createdAt: '2018-08-24 00:55:56.06-04'
    }, {
      permission_id: 2,
      operation_id: 2,
      createdAt: '2018-08-24 00:55:57.06-04'
    }, {
      permission_id: 2,
      operation_id: 3,
      createdAt: '2018-08-24 00:55:58.06-04'
    }, {
      permission_id: 2,
      operation_id: 4,
      createdAt: '2018-08-24 00:55:59.06-04'
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('AdminPermissionOperationRs', null, {});
  }
};
