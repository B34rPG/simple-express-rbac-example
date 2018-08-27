'use strict';
module.exports = (sequelize, DataTypes) => {
  const AdminPermissionOperationRs = sequelize.define(
    'AdminPermissionOperationRs',
    {
      permission_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      operation_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      updatedAt: {
        type: DataTypes.DATE
      }
    }, {
      timestamps: false,
      underscored: true
    }
  );

  /*  Class Methods - Association
  =========================================================================== */
  AdminPermissionOperationRs.associate = function(models) {
    AdminPermissionOperationRs.belongsTo(
      models.AdminPermissions,
      { foreignKey: 'permission_id' }
    );
    AdminPermissionOperationRs.belongsTo(
      models.AdminOperations,
      { foreignKey: 'operation_id' }
    );
  };

  return AdminPermissionOperationRs;
};
