const express = require('express');
const _ = require('lodash');

const models = require('../models');
const organizeRbac = require('../utilities/organizeRbac');
const responseError = require('../utilities/responseError');
const CustomError = require('../utilities/CustomError');

const router = express.Router();

router.post('/admin/login', function(req, res, next) {
  const body = _.pick(req.body, ['email', 'password']);

  let adminUserObj;

  // start to find the admin user
  const AdminUsers = models.AdminUsers;
  AdminUsers
    .findOneByEmail(body.email)
    .then(adminUser => {
      if (!adminUser) {
        throw new CustomError(401, 'parameters_not_match');
      }

      // transfer model instances to plain objects
      adminUserObj = adminUser.get({ plain: true });

      return adminUser.comparePasswords(body.password);
    })
    .then(isMatch => {
      if (!isMatch) {
        throw new CustomError(401, 'parameters_not_match');
      }

      const adminUserPayload = organizeRbac(adminUserObj);

      res.status(200).json(adminUserPayload);
    })
    .catch(err => {
      responseError(res, err.statusCode, err.errorCode);
    });
});

module.exports = router;
