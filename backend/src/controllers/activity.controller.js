const { Activity } = require("../models");

const getAllActivities = async (req, res, next) => {
  try {
    const activities = await Activity.findAll({
      where: { userId: req.user.id },
      order: [["order", "ASC"]],
    });

    res.json({ activities });
  } catch (error) {
    next(error);
  }
};

const getActivity = async (req, res, next) => {
  try {
    const activity = await Activity.findOne({
      where: {
        id: req.params.id,
        userId: req.user.id,
      },
    });

    if (!activity) {
      return res.status(404).json({ message: "활동을 찾을 수 없습니다." });
    }

    res.json({ activity });
  } catch (error) {
    next(error);
  }
};

const createActivity = async (req, res, next) => {
  try {
    const {
      name,
      category,
      tier,
      description,
      hoursPerWeek,
      isLeadership,
      order,
    } = req.body;

    const activity = await Activity.create({
      userId: req.user.id,
      name,
      category,
      tier,
      description,
      hoursPerWeek,
      isLeadership,
      order: order || 0,
    });

    res.status(201).json({ message: "활동 생성 성공", activity });
  } catch (error) {
    next(error);
  }
};

const updateActivity = async (req, res, next) => {
  try {
    const activity = await Activity.findOne({
      where: {
        id: req.params.id,
        userId: req.user.id,
      },
    });

    if (!activity) {
      return res.status(404).json({ message: "활동을 찾을 수 없습니다." });
    }

    const {
      name,
      category,
      tier,
      description,
      hoursPerWeek,
      isLeadership,
      order,
    } = req.body;

    await activity.update({
      name,
      category,
      tier,
      description,
      hoursPerWeek,
      isLeadership,
      order,
    });

    res.json({ message: "활동 수정 성공", activity });
  } catch (error) {
    next(error);
  }
};

const deleteActivity = async (req, res, next) => {
  try {
    const activity = await Activity.findOne({
      where: {
        id: req.params.id,
        userId: req.user.id,
      },
    });

    if (!activity) {
      return res.status(404).json({ message: "활동을 찾을 수 없습니다." });
    }

    await activity.destroy();

    res.json({ message: "활동 삭제 성공" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllActivities,
  getActivity,
  createActivity,
  updateActivity,
  deleteActivity,
};
