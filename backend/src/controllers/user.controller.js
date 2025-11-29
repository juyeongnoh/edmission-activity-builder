const { User } = require("../models");

const getProfile = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.user.id, {
      attributes: { exclude: ["password"] },
    });

    if (!user) {
      return res.status(404).json({ message: "사용자를 찾을 수 없습니다." });
    }

    res.json({ user });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getProfile,
};
