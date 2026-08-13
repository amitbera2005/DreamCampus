const pool = require('../config/db')

const getAllMaterials = async () => {

  const result = await pool.query(
    `
    SELECT
      id,
      subject,
      notes,
      formulas,
      pyq,
      practice_questions
    FROM study_materials
    ORDER BY id
    `
  )

  return result.rows
}


const getMaterialBySubject = async (subject) => {

  const result = await pool.query(
    `
    SELECT
      id,
      subject,
      notes,
      formulas,
      pyq,
      practice_questions
    FROM study_materials
    WHERE LOWER(subject) = LOWER($1)
    `,
    [subject]
  )

  return result.rows[0]
}


module.exports = {
  getAllMaterials,
  getMaterialBySubject
}