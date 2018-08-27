'use strict';
module.exports = (sequelize, DataTypes) => {
  const AdminRolePermissionRs = sequelize.define('AdminRolePermissionRs', {
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    permission_id: {
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
  });

  /*  Class Methods - Association
  =========================================================================== */
  AdminRolePermissionRs.associate = function(models) {
    AdminRolePermissionRs.belongsTo(
      models.AdminRoles,
      { foreignKey: 'role_id' }
    );
    AdminRolePermissionRs.belongsTo(
      models.AdminPermissions,
      { foreignKey: 'permission_id' }
    );
  };

  return AdminRolePermissionRs;
};
