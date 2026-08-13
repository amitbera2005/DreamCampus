const express = require('express')

const {
  getAllStudyMaterials,
  getStudyMaterialBySubject
} = require(
  '../controllers/studyMaterialController'
)

const router = express.Router()


// GET ALL

router.get(
  '/',
  getAllStudyMaterials
)


// GET ONE SUBJECT

router.get(
  '/:subject',
  getStudyMaterialBySubject
)


module.exports = router
