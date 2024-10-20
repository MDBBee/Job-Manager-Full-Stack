const { BadRequestError } = require("../errors/index");

const demoUser = (req, res, next) => {
  if (req.user.demoUser) {
    throw new BadRequestError("Test User. Read Only!");
  }
  next();
};

module.exports = demoUser;
