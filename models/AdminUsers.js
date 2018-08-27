'use strict';
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const AdminUsers = sequelize.define('AdminUsers', {
    userName: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
      set(val) {
        this.setDataValue('email', val.toUpperCase());
      }
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
  AdminUsers.associate = function(models) {
    AdminUsers.hasMany(models.AdminUserRoleRs, { foreignKey: 'user_id' });
  };

  /*  Class Methods - Query
  =========================================================================== */
  AdminUsers.findOneByEmail = email => {
    const AdminUserRoleRs =
      sequelize.import('./AdminUserRoleRs.js');
    const AdminRolePermissionRs =
      sequelize.import('./AdminRolePermissionRs.js');
    const AdminPermissionOperationRs =
      sequelize.import('./AdminPermissionOperationRs.js');
    const AdminRoles =
      sequelize.import('./AdminRoles.js');
    const AdminPermissions =
      sequelize.import('./AdminPermissions.js');
    const AdminOperations =
      sequelize.import('./AdminOperations.js');

    return AdminUsers
      .findOne({
        where: { email: { $iLike: email } },
        attributes: ['userName', 'email', 'password'],
        // include
        include: [{
          model: AdminUserRoleRs,
          separate: true,
          attributes: ['user_id', 'role_id'],
          // include
          include: [{
            model: AdminRoles,
            attributes: ['title', 'discription'],
            // include
            include: [{
              model: AdminRolePermissionRs,
              separate: true,
              attributes: ['role_id', 'permission_id'],
              // include
              include: [{
                model: AdminPermissions,
                attributes: ['title', 'discription'],
                // include
                include: [{
                  model: AdminPermissionOperationRs,
                  separate: true,
                  attributes: ['permission_id', 'operation_id'],
                  // include
                  include: [{
                    model: AdminOperations,
                    attributes: ['title', 'discription']
                  }]
                }]
              }]
            }]
          }]
        }]
      });
  };

  /*  Instance Methods
  =========================================================================== */
  /**
   * Compare plain password and hash password. Returns promise
   * @param {string} plainPassword
   */
  AdminUsers.prototype.comparePasswords = function(plainPassword) {
    return new Promise((resolve, reject) => {
      bcrypt.compare(plainPassword, this.password, function(err, isMatch) {
        if (err) { return reject(err); }
        resolve(isMatch, this);
      });
    });
  };

  return AdminUsers;
};
