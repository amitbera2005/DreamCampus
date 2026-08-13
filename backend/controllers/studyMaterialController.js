const {
  getAllMaterials,
  getMaterialBySubject
} = require('../models/studyMaterialModel')


// ========================================
// GET ALL MATERIALS
// ========================================

const getAllStudyMaterials = async (req, res) => {

  try {

    const materials =
      await getAllMaterials()

    res.status(200).json({
      success: true,
      data: materials
    })

  } catch (error) {

    console.error(error)

    res.status(500).json({
      success: false,
      message: 'Failed to load study materials'
    })

  }
}


// ========================================
// GET MATERIAL BY SUBJECT
// ========================================

const getStudyMaterialBySubject = async (
  req,
  res
) => {

  try {

    const { subject } = req.params

    const material =
      await getMaterialBySubject(subject)


    if (!material) {

      return res.status(404).json({
        success: false,
        message: 'Study material not found'
      })

    }


    res.status(200).json({
      success: true,
      data: material
    })

  } catch (error) {

    console.error(error)

    res.status(500).json({
      success: false,
      message: 'Failed to load study material'
    })

  }
}


module.exports = {
  getAllStudyMaterials,
  getStudyMaterialBySubject
}
