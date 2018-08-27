'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
      // AdminUser hasMany AdminUserRoleRs
      queryInterface.addColumn(
        'AdminUserRoleRs',
        'user_id',
        {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'AdminUsers',
            key: 'id'
          }
        }
      ),
      // AdminRole hasMany AdminUserRoleRs
      queryInterface.addColumn(
        'AdminUserRoleRs',
        'role_id',
        {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'AdminRoles',
            key: 'id'
          }
        }
      ),
      // AdminRole hasMany AdminRolePermissionRs
      queryInterface.addColumn(
        'AdminRolePermissionRs',
        'role_id',
        {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'AdminRoles',
            key: 'id'
          }
        }
      ),
      // AdminPermission hasMany AdminRolePermissionRs
      queryInterface.addColumn(
        'AdminRolePermissionRs',
        'permission_id',
        {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'AdminPermissions',
            key: 'id'
          }
        }
      ),
      // AdminPermission hasMany AdminPermissionOperationRs
      queryInterface.addColumn(
        'AdminPermissionOperationRs',
        'permission_id',
        {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'AdminPermissions',
            key: 'id'
          }
        }
      ),
      // AdminOperation hasMany AdminPermissionOperationRs
      queryInterface.addColumn(
        'AdminPermissionOperationRs',
        'operation_id',
        {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'AdminOperations',
            key: 'id'
          }
        }
      )
    ];
  },

  down: (queryInterface, Sequelize) => {
    return [
      // remove AdminUser hasMany AdminUserRoleRs
      queryInterface.removeColumn(
        'AdminUserRoleRs',
        'user_id'
      ),
      // remove AdminRole hasMany AdminUserRoleRs
      queryInterface.removeColumn(
        'AdminUserRoleRs',
        'role_id'
      ),
      // remove AdminRole hasMany AdminRolePermissionRs
      queryInterface.removeColumn(
        'AdminRolePermissionRs',
        'role_id'
      ),
      // remove AdminPermission hasMany AdminRolePermissionRs
      queryInterface.removeColumn(
        'AdminRolePermissionRs',
        'permission_id'
      ),
      // remove AdminPermission hasMany AdminPermissionOperationRs
      queryInterface.removeColumn(
        'AdminPermissionOperationRs',
        'permission_id'
      ),
      // remove AdminOperation hasMany AdminPermissionOperationRs
      queryInterface.removeColumn(
        'AdminPermissionOperationRs',
        'operation_id'
      )
    ];
  }
};
