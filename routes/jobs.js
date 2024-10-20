const express = require("express");
const demoUser = require("../middleware/demoUser");

const router = express.Router();
const {
  createJob,
  deleteJob,
  getAllJobs,
  updateJob,
  getJob,
  showStats,
} = require("../controllers/jobs");

router.route("/").post(demoUser, createJob).get(getAllJobs);
router.route("/stats").get(showStats);

router
  .route("/:id")
  .get(getJob)
  .delete(demoUser, deleteJob)
  .patch(demoUser, updateJob);

module.exports = router;
