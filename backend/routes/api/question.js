const express = require('express');
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { Question } = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler(async (req, res, next) => {
  const questions = await Question.findAll({
    include: ['User'],
    order: [['updatedAt', 'DESC']],
    limit: 10
  });
  return res.json(questions);
}));

const validateQuestion = [
  check('title')
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage('Please provide a title.')
    .isLength({ max: 75 })
    .withMessage('Title cannot exceed character count of 75.'),
  check('description')
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage('Description cannot be empty')
    .isLength({ max: 10000 })
    .withMessage('Description cannot exceed character count of 10,000')
]

router.post('/new', validateQuestion, asyncHandler(async (req, res, next) => {
  const { ownerId, title, description } = req.body;
  const question = await Question.build({ ownerId, title, description });
  const validatorErrors = validationResult(req);

  if (validatorErrors.isEmpty()) {
    await question.save();
    res.json({ question, message: 'Success' });
  } else {
    const errors = validatorErrors.array().map(error => error.msg);
    res.json({ errors, message: 'Failure' })
  }
}))

router.get('/:id', asyncHandler(async (req, res) => {
  const id = +req.params.id;
  const question = Question.findByPk(id);
  return res.json(question);
}))

module.exports = router;