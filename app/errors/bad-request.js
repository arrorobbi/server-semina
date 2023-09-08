const { StatusCodes } = require('http-status-codes');
const CustomAPIError = require('./custom-api-errors');

class BadRequest  extends CustomAPIError {
  constructor(message) {
    super(message);
    // memberikan statusCode not found
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}
module.exports = BadRequest ;