const router = require("express").Router();

const profileRoutes = require('./profileRoute');

router.use('/profile', profileRoutes);

module.exports = router;