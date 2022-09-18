const { sequelize, User } = require("./db/models");

const run = async () => {
  try {
    await sequelize.authenticate();
  } catch (err) {
    console.log(err.message);
  }
  try {
    const newUser = await User.create({

    });
  } catch (error) {
    console.log(error.message);
  }
};
run();
