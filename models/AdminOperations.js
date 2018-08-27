'use strict';
module.exports = (sequelize, DataTypes) => {
  const AdminOperations = sequelize.define('AdminOperations', {
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
  AdminOperations.associate = function(models) {
    AdminOperations.hasMany(
      models.AdminPermissionOperationRs,
      { foreignKey: 'operation_id' }
    );
  };

  return AdminOperations;
};
