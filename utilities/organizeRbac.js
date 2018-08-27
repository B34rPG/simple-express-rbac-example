const _ = require('lodash');

/**
 * @param   {object} adminUserObject
 *
 * @returns {object} adminUserObject
 */
function organizeRbac(userObj) {
  if (!userObj) {
    throw new Error('Please provide a user object');
  }
  if (!userObj.AdminUserRoleRs) {
    throw new Error('The user is not a admin');
  }

  const roles = _.map(userObj.AdminUserRoleRs, role => {
    const prefix = role.AdminRole;

    const permissions = _.map(prefix.AdminRolePermissionRs, permission => {
      const prefix = permission.AdminPermission;

      const operations = _.map(prefix.AdminPermissionOperationRs, operation => {
        return operation.AdminOperation.title;
      });

      return {
        title: prefix.title,
        discription: prefix.discription,
        operations: operations
      };
    });

    return {
      title: prefix.title,
      discription: prefix.discription,
      permissions: permissions
    };
  });

  // remove properties
  delete userObj.AdminUserRoleRs;
  // add properties
  userObj.roles = roles;

  return userObj;
}

module.exports = organizeRbac;
