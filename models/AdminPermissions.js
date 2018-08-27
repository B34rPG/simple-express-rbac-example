'use strict';
module.exports = (sequelize, DataTypes) => {
  const AdminPermissions = sequelize.define('AdminPermissions', {
    title: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    discription: {
      type: DataTypes.TEXT
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
  AdminPermissions.associate = function(models) {
    AdminPermissions.hasMany(
      models.AdminRolePermissionRs,
      { foreignKey: 'permission_id' }
    );
    AdminPermissions.hasMany(
      models.AdminPermissionOperationRs,
      { foreignKey: 'permission_id' }
    );
  };

  return AdminPermissions;
};
