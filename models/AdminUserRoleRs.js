'use strict';
module.exports = (sequelize, DataTypes) => {
  const AdminUserRoleRs = sequelize.define('AdminUserRoleRs', {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    role_id: {
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
  AdminUserRoleRs.associate = function(models) {
    AdminUserRoleRs.belongsTo(models.AdminUsers, { foreignKey: 'user_id' });
    AdminUserRoleRs.belongsTo(models.AdminRoles, { foreignKey: 'role_id' });
  };

  return AdminUserRoleRs;
};
