const express = require('express');
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { Answer } = require('../../db/models');

const router = express.Router();

router.get('/:questionId', asyncHandler(async (req, res) => {
  const questionId = +req.params.questionId;

  const answers = await Answer.findAll({
    include: ['User'],
    where: { questionId },
    order: [['createdAt', 'DESC']]
  })

  return res.json(answers);
}))

const validateAnswer = [
  check('answer')
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage('Answer cannot be empty.')
    .isLength({ max: 10000 })
    .withMessage('Answer cannot exceed character count of 10,000')
];

router.post('/', validateAnswer, asyncHandler(async (req, res) => {
  const { userId, questionId, answer } = req.body;
  const newAnswer = await Answer.build({ userId, questionId, answer });
  const validatorErrors = validationResult(req);

  if (validatorErrors.isEmpty()) {
    await newAnswer.save();
    res.json({ newAnswer, message: 'Success' });
  } else {
    const errors = validatorErrors.array().map(error => error.msg);
    res.json({ errors, message: 'Failure' });
  };
}));

module.exports = router;