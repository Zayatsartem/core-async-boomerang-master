const { User } = require('./db/models');

const registerUser = async (heroName, heroScore) => {
  const user = await User.findOne({
    where: {
      name: heroName,
    },
    raw: true,
  });
  if (user) {
    await User.update({
      score: heroScore,
    }, {
      where: {
        name: heroName,
      },
    });
  } else {
    await User.create({
      name: heroName,
      score: heroScore,
    });
  }
};

module.exports = registerUser;
