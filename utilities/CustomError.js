// https://gist.github.com/justmoon/15511f92e5216fa2624b

/**
 * @param   {number} statusCode
 * @param   {string} errorCode
 */
module.exports = function CustomError(statusCode, errorCode) {
  Error.captureStackTrace(this, this.constructor);
  this.name = this.constructor.name;
  this.statusCode = parseInt(statusCode);
  this.errorCode = errorCode;
};

require('util').inherits(module.exports, Error);
