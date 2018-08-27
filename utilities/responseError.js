/**
 * @param   {object} res
 * @param   {number} statusCode
 * @param   {string} errorCode
 *
 * @returns {object} res with status code and error code
 */
function responseError(res, statusCode, errorCode) {
  return res.status(statusCode).json({
    error: {
      code: errorCode,
      status_code: parseInt(statusCode)
    }
  });
}

module.exports = responseError;
