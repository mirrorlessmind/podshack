const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");
const authRoutes = require("../routes/auth-routes.js");

router.use('/', homeRoutes);
router.use ('/auth', authRoutes);
router.use('/api', apiRoutes);


module.exports = router;
