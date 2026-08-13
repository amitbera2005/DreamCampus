const express = require('express')

const router = express.Router()

const {
  getAllQuestions,
  getQuestionsByExam
} = require('../controllers/previousYearQuestionsController')


router.get(
  '/',
  getAllQuestions
)


router.get(
  '/exam/:exam',
  getQuestionsByExam
)


module.exports = router
