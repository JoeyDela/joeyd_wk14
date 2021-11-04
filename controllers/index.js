const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoustes = require("./homeRoutes");

router.use("/", homeRoustes);
router.use("/api", apiRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
