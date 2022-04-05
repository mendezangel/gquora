const router = require('express').Router();
const sessionRouter = require('./session');
const usersRouter = require('./users.js');
const questionRouter = require('./question');
const asyncHandler = require('express-async-handler');
const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth.js');
const { User } = require('../../db/models');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('question', questionRouter);

module.exports = router;