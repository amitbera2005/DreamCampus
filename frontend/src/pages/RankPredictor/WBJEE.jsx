import { useState } from 'react'
import './PredictorExam.css'

import {
  predictWBJEERank
} from '../../utils/wbjeeRankCalculator'

import {
  predictCategoryRank
} from '../../utils/wbjeeCategoryRankCalculator'

const initialForm = {
  mathematics: '',
  physics: '',
  chemistry: '',
  category: '',
  gender: '',
  domicile: '',
  examYear: '2026',
}


function WBJEE() {

  const [formData, setFormData] =
    useState(initialForm)

  const [error, setError] =
    useState('')

  const [result, setResult] =
    useState(null)

  const [categoryResult, setCategoryResult] =
    useState(null)

  const [loading, setLoading] =
    useState(false)


  /* ============================= */
  /* INPUT CHANGE */
  /* ============================= */

  const handleChange = (e) => {

    const {
      name,
      value,
    } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    setError('')
  }


  /* ============================= */
  /* SUBMIT */
  /* ============================= */

  const handleSubmit = (e) => {

    e.preventDefault()

    const maths =
      Number(formData.mathematics)

    const physics =
      Number(formData.physics)

    const chemistry =
      Number(formData.chemistry)


    /* ============================= */
    /* VALIDATION */
    /* ============================= */

    if (
      formData.mathematics === '' ||
      formData.physics === '' ||
      formData.chemistry === ''
    ) {

      setError(
        'Please enter marks in all three subjects.'
      )

      return
    }


    if (
      maths < 0 ||
      maths > 100
    ) {

      setError(
        'Mathematics marks must be between 0 and 100.'
      )

      return
    }


    if (
      physics < 0 ||
      physics > 50
    ) {

      setError(
        'Physics marks must be between 0 and 50.'
      )

      return
    }


    if (
      chemistry < 0 ||
      chemistry > 50
    ) {

      setError(
        'Chemistry marks must be between 0 and 50.'
      )

      return
    }


    if (!formData.category) {

      setError(
        'Please select your category.'
      )

      return
    }


    if (!formData.gender) {

      setError(
        'Please select your gender.'
      )

      return
    }


    if (!formData.domicile) {

      setError(
        'Please select your domicile.'
      )

      return
    }


    const totalMarks =
      maths +
      physics +
      chemistry


    /* ============================= */
    /* LOADING */
    /* ============================= */

    setLoading(true)

    setError('')

    setResult(null)

    setCategoryResult(null)


    setTimeout(() => {

      /* ============================= */
      /* GMR PREDICTION */
      /* ============================= */

      const prediction =
        predictWBJEERank(
          totalMarks,
          formData.examYear
        )


      if (!prediction.success) {

        setError(
          prediction.message
        )

        setLoading(false)

        return
      }


      /* ============================= */
      /* CATEGORY PREDICTION */
      /* ============================= */

      const categoryPrediction =
        predictCategoryRank(
          totalMarks,
          formData.category
        )


      if (!categoryPrediction.success) {

        setError(
          categoryPrediction.message
        )

        setLoading(false)

        return
      }


      /* ============================= */
      /* SAVE RESULTS */
      /* ============================= */

      setResult(prediction)

      setCategoryResult(
        categoryPrediction
      )

      setLoading(false)


      /* ============================= */
      /* SCROLL TO RESULT */
      /* ============================= */

      setTimeout(() => {

        document
          .getElementById(
            'wbjee-result'
          )
          ?.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
          })

      }, 100)

    }, 1200)
  }


  /* ============================= */
  /* RESET */
  /* ============================= */

  const resetPredictor = () => {

    setFormData(initialForm)

    setError('')

    setResult(null)

    setCategoryResult(null)

    setLoading(false)

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }


  /* ============================= */
  /* TOTAL MARKS */
  /* ============================= */

  const totalMarks =
    (Number(formData.mathematics) || 0) +
    (Number(formData.physics) || 0) +
    (Number(formData.chemistry) || 0)


  return (

    <main className="predictor-exam-page">

      <div className="predictor-exam-container">


        {/* ============================= */}
        {/* HEADER */}
        {/* ============================= */}

        <div className="predictor-exam-badge">
          ⚡ WBJEE
        </div>


        <h1>
          WBJEE Rank Predictor
        </h1>


        <p>
          Enter your WBJEE marks and basic details
          to estimate your General Merit Rank
          and Category Rank.
        </p>


        {/* ============================= */}
        {/* FORM */}
        {/* ============================= */}

        {!result && (

          <div className="predictor-form-card">

            <div className="predictor-form-header">

              <div>

                <h2>
                  Enter Your Details
                </h2>

                <p>
                  Your marks will be analysed
                  against historical WBJEE trends.
                </p>

              </div>


              <div className="total-score">

                <span>
                  Total Score
                </span>

                <strong>

                  {totalMarks}

                  <small>
                    / 200
                  </small>

                </strong>

              </div>

            </div>


            <form
              onSubmit={handleSubmit}
            >


              {/* ============================= */}
              {/* EXAM YEAR */}
              {/* ============================= */}

              <div className="form-section">

                <div className="form-section-title">
                  📅 Examination
                </div>


                <div className="form-grid">

                  <div className="form-group">

                    <label>
                      Exam Year
                    </label>

                    <select
                      name="examYear"
                      value={
                        formData.examYear
                      }
                      onChange={
                        handleChange
                      }
                    >

                      <option value="2026">
                        2026
                      </option>

                      <option value="2025">
                        2025
                      </option>

                      <option value="2024">
                        2024
                      </option>

                      <option value="2023">
                        2023
                      </option>

                    </select>

                  </div>

                </div>

              </div>


              {/* ============================= */}
              {/* MARKS */}
              {/* ============================= */}

              <div className="form-section">

                <div className="form-section-title">
                  📝 Your WBJEE Marks
                </div>


                <div className="form-grid">

                  <div className="form-group">

                    <label>
                      Mathematics
                      <span>/ 100</span>
                    </label>

                    <input
                      type="number"
                      name="mathematics"
                      value={
                        formData.mathematics
                      }
                      onChange={
                        handleChange
                      }
                      placeholder="Enter marks"
                      min="0"
                      max="100"
                    />

                  </div>


                  <div className="form-group">

                    <label>
                      Physics
                      <span>/ 50</span>
                    </label>

                    <input
                      type="number"
                      name="physics"
                      value={
                        formData.physics
                      }
                      onChange={
                        handleChange
                      }
                      placeholder="Enter marks"
                      min="0"
                      max="50"
                    />

                  </div>


                  <div className="form-group">

                    <label>
                      Chemistry
                      <span>/ 50</span>
                    </label>

                    <input
                      type="number"
                      name="chemistry"
                      value={
                        formData.chemistry
                      }
                      onChange={
                        handleChange
                      }
                      placeholder="Enter marks"
                      min="0"
                      max="50"
                    />

                  </div>

                </div>

              </div>


              {/* ============================= */}
              {/* PERSONAL DETAILS */}
              {/* ============================= */}

              <div className="form-section">

                <div className="form-section-title">
                  👤 Personal Details
                </div>


                <div className="form-grid">


                  {/* CATEGORY */}

                  <div className="form-group">

                    <label>
                      Category
                    </label>

                    <select
                      name="category"
                      value={
                        formData.category
                      }
                      onChange={
                        handleChange
                      }
                    >

                      <option value="">
                        Select category
                      </option>

                      <option value="General">
                        General
                      </option>

                      <option value="EWS">
                        EWS
                      </option>

                      <option value="OBC_A">
                        OBC-A
                      </option>

                      <option value="OBC_B">
                        OBC-B
                      </option>

                      <option value="SC">
                        SC
                      </option>

                      <option value="ST">
                        ST
                      </option>

                    </select>

                  </div>


                  {/* GENDER */}

                  <div className="form-group">

                    <label>
                      Gender
                    </label>

                    <select
                      name="gender"
                      value={
                        formData.gender
                      }
                      onChange={
                        handleChange
                      }
                    >

                      <option value="">
                        Select gender
                      </option>

                      <option value="Male">
                        Male
                      </option>

                      <option value="Female">
                        Female
                      </option>

                      <option value="Other">
                        Other
                      </option>

                    </select>

                  </div>


                  {/* DOMICILE */}

                  <div className="form-group">

                    <label>
                      Domicile
                    </label>

                    <select
                      name="domicile"
                      value={
                        formData.domicile
                      }
                      onChange={
                        handleChange
                      }
                    >

                      <option value="">
                        Select domicile
                      </option>

                      <option value="West Bengal">
                        West Bengal
                      </option>

                      <option value="Other State">
                        Other State
                      </option>

                    </select>

                  </div>

                </div>

              </div>


              {/* ============================= */}
              {/* ERROR */}
              {/* ============================= */}

              {error && (

                <div className="predictor-error">
                  ⚠️ {error}
                </div>

              )}


              {/* ============================= */}
              {/* SUBMIT */}
              {/* ============================= */}

              <button
                type="submit"
                className="predictor-submit-button"
                disabled={loading}
              >

                {loading ? (

                  <>
                    <span className="predictor-spinner">
                      ⟳
                    </span>

                    Analysing Historical Data...

                  </>

                ) : (

                  <>
                    <span>
                      🎯
                    </span>

                    Predict My Rank

                    <span>
                      →
                    </span>
                  </>

                )}

              </button>


              {/* ============================= */}
              {/* DISCLAIMER */}
              {/* ============================= */}

              <div className="predictor-disclaimer">

                <span>
                  ℹ️
                </span>

                <p>
                  This is an estimated rank based
                  on historical score-to-rank trends.
                  It is not an official WBJEE rank.
                </p>

              </div>

            </form>

          </div>

        )}


        {/* ============================= */}
        {/* RESULT */}
        {/* ============================= */}

        {result && (

          <section
            id="wbjee-result"
            className="wbjee-result-card"
          >


            {/* ============================= */}
            {/* RESULT HEADER */}
            {/* ============================= */}

            <div className="result-top">

              <div>

                <span className="result-label">
                  YOUR ESTIMATED RESULT
                </span>

                <h2>
                  WBJEE General Merit Rank
                </h2>

              </div>


              <div className="result-score">

                <span>
                  Your Score
                </span>

                <strong>

                  {result.score}

                  <small>
                    / 200
                  </small>

                </strong>

              </div>

            </div>


            {/* ============================= */}
            {/* GMR */}
            {/* ============================= */}

            <div className="rank-main">

              <span>
                Expected Rank Range
              </span>


              <strong>

                {result.expectedMin.toLocaleString()}

                {' – '}

                {result.expectedMax.toLocaleString()}

              </strong>


              <p>

                Most likely:

                {' '}

                <b>
                  #{result.mostLikely.toLocaleString()}
                </b>

              </p>

            </div>


            {/* ============================= */}
            {/* GMR STATS */}
            {/* ============================= */}

            <div className="result-stats">


              <div className="result-stat">

                <span>
                  Confidence
                </span>

                <strong>
                  {result.confidence}
                </strong>

              </div>


              <div className="result-stat">

                <span>
                  Selected Year
                </span>

                <strong>
                  {result.selectedYear}
                </strong>

              </div>


              <div className="result-stat">

                <span>
                  Historical Data
                </span>

                <strong>
                  2023–2026
                </strong>

              </div>

            </div>


            {/* ============================= */}
            {/* CATEGORY RANK */}
            {/* ============================= */}

            {categoryResult &&
              !categoryResult.isGeneral && (

              <div className="category-rank-section">


                <div className="category-rank-header">

                  <div>

                    <span>
                      RESERVED CATEGORY
                    </span>

                    <h3>

                      {categoryResult.category === 'OBC_A'
                        ? 'OBC-A'
                        : categoryResult.category === 'OBC_B'
                        ? 'OBC-B'
                        : categoryResult.category
                      }

                      {' '}Rank

                    </h3>

                  </div>


                  <div className="category-rank-icon">
                    🏷️
                  </div>

                </div>


                <div className="category-rank-main">

                  <span>
                    Expected Category Rank
                  </span>


                  <strong>

                    {categoryResult.rankMin.toLocaleString()}

                    {' – '}

                    {categoryResult.rankMax.toLocaleString()}

                  </strong>


                  <p>

                    Most likely:

                    {' '}

                    <b>
                      #{categoryResult.rank.toLocaleString()}
                    </b>

                  </p>

                </div>


                <div className="category-rank-info">


                  <div>

                    <span>
                      Category
                    </span>

                    <strong>

                      {categoryResult.category === 'OBC_A'
                        ? 'OBC-A'
                        : categoryResult.category === 'OBC_B'
                        ? 'OBC-B'
                        : categoryResult.category
                      }

                    </strong>

                  </div>


                  <div>

                    <span>
                      Confidence
                    </span>

                    <strong>
                      {categoryResult.confidence}
                    </strong>

                  </div>

                </div>


              </div>

            )}


            {/* ============================= */}
            {/* HISTORICAL COMPARISON */}
            {/* ============================= */}

            <div className="historical-section">

              <h3>
                Historical Comparison
              </h3>


              <div className="historical-grid">

                {result.yearlyPredictions.map(
                  (item) => (

                    <div
                      className="historical-card"
                      key={item.year}
                    >

                      <span>
                        {item.year}
                      </span>

                      <strong>

                        {item.rankMin.toLocaleString()}

                        {' – '}

                        {item.rankMax.toLocaleString()}

                      </strong>

                    </div>

                  )
                )}

              </div>

            </div>


            {/* ============================= */}
            {/* RESULT NOTE */}
            {/* ============================= */}

            <div className="result-note">

              <span>
                💡
              </span>

              <p>
                The result is an estimate derived
                from historical score-to-rank trends.
                Exam difficulty, candidate performance,
                category data and official tie-breaking
                can affect the actual rank.
              </p>

            </div>


            {/* ============================= */}
            {/* TRY AGAIN */}
            {/* ============================= */}

            <button
              className="predictor-reset-button"
              onClick={resetPredictor}
            >

              ↻

              Try Again

            </button>


          </section>

        )}

      </div>

    </main>
  )
}


export default WBJEE