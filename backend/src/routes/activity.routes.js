const express = require("express");
const {
  getAllActivities,
  getActivity,
  createActivity,
  updateActivity,
  deleteActivity,
} = require("../controllers/activity.controller");
const { authenticateToken } = require("../middleware/auth.middleware");

const router = express.Router();

// All routes require authentication
router.use(authenticateToken);

router.get("/", getAllActivities);
router.get("/:id", getActivity);
router.post("/", createActivity);
router.put("/:id", updateActivity);
router.delete("/:id", deleteActivity);
module.exports = router;
