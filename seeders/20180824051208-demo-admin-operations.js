'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('AdminOperations', [{
      title: 'Create',
      discription: 'create',
      createdAt: '2018-08-24 00:55:52.06-04'
    }, {
      title: 'Read',
      discription: 'read',
      createdAt: '2018-08-24 00:55:53.06-04'
    }, {
      title: 'Update',
      discription: 'update',
      createdAt: '2018-08-24 00:55:54.06-04'
    }, {
      title: 'Delete',
      discription: 'delete',
      createdAt: '2018-08-24 00:55:55.06-04'
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('AdminOperations', null, {});
  }
};
