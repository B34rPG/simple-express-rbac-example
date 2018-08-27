'use strict';
module.exports = (sequelize, DataTypes) => {
  const AdminRoles = sequelize.define('AdminRoles', {
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
  AdminRoles.associate = function(models) {
    AdminRoles.hasMany(models.AdminUserRoleRs, { foreignKey: 'role_id' });
    AdminRoles.hasMany(models.AdminRolePermissionRs, { foreignKey: 'role_id' });
  };

  return AdminRoles;
};
