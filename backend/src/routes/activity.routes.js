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

router.get("/activities", getAllActivities);
router.get("/activities/:id", getActivity);
router.post("/activities", createActivity);
router.put("/activities/:id", updateActivity);
router.delete("/activities/:id", deleteActivity);
module.exports = router;
