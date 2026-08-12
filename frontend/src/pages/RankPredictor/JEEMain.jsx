import { useState } from 'react'
import './JEEMain.css'

import {
  predictJEEMainRank
} from '../../utils/jeeMainRankCalculator'

import {
  predictJEEMainCategoryRank
} from '../../utils/jeeMainCategoryRankCalculator'


const initialForm = {

  mathematics: '',

  physics: '',

  chemistry: '',

  category: '',

  gender: '',

  examYear: '2026',

  session: 'Both / Best Score',

}


function JEEMain() {

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
  /* CHANGE */
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
        'Please enter marks for all three subjects.'
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
      physics > 100
    ) {

      setError(
        'Physics marks must be between 0 and 100.'
      )

      return
    }


    if (
      chemistry < 0 ||
      chemistry > 100
    ) {

      setError(
        'Chemistry marks must be between 0 and 100.'
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


    const totalMarks =
      maths +
      physics +
      chemistry


    setLoading(true)

    setError('')

    setResult(null)

    setCategoryResult(null)


    setTimeout(() => {

      /* ============================= */
      /* MAIN RANK */
      /* ============================= */

      const prediction =
        predictJEEMainRank(
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
      /* CATEGORY RANK */
      /* ============================= */

      const categoryPrediction =
        predictJEEMainCategoryRank(
          prediction.mostLikelyRank,
          formData.category
        )


      if (!categoryPrediction.success) {

        setError(
          categoryPrediction.message
        )

        setLoading(false)

        return

      }


      setResult(
        prediction
      )


      setCategoryResult(
        categoryPrediction
      )


      setLoading(false)


      setTimeout(() => {

        document
          .getElementById(
            'jee-main-result'
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

    setFormData(
      initialForm
    )

    setError('')

    setResult(null)

    setCategoryResult(null)

    setLoading(false)

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })

  }


  const totalMarks =
    (Number(formData.mathematics) || 0) +
    (Number(formData.physics) || 0) +
    (Number(formData.chemistry) || 0)


  return (

    <main className="jee-main-page">

      <div className="jee-main-container">


        {/* ============================= */}
        {/* HEADER */}
        {/* ============================= */}

        <div className="jee-badge">
          🚀 JEE MAIN
        </div>


        <h1>
          JEE Main Rank Predictor
        </h1>


        <p>
          Enter your JEE Main Paper 1 marks
          to estimate your NTA percentile,
          CRL rank and category rank.
        </p>


        {!result && (

          <div className="jee-form-card">


            {/* ============================= */}
            {/* FORM HEADER */}
            {/* ============================= */}

            <div className="jee-form-header">

              <div>

                <h2>
                  Enter Your Details
                </h2>

                <p>
                  Paper 1 — B.E. / B.Tech
                </p>

              </div>


              <div className="jee-total-score">

                <span>
                  Total Score
                </span>

                <strong>

                  {totalMarks}

                  <small>
                    / 300
                  </small>

                </strong>

              </div>

            </div>


            <form
              onSubmit={handleSubmit}
            >


              {/* ============================= */}
              {/* EXAM DETAILS */}
              {/* ============================= */}

              <div className="jee-section">

                <div className="jee-section-title">
                  📅 Examination Details
                </div>


                <div className="jee-grid">


                  <div className="jee-group">

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

                    </select>

                  </div>


                  <div className="jee-group">

                    <label>
                      Session
                    </label>

                    <select
                      name="session"
                      value={
                        formData.session
                      }
                      onChange={
                        handleChange
                      }
                    >

                      <option>
                        Both / Best Score
                      </option>

                      <option>
                        Session 1
                      </option>

                      <option>
                        Session 2
                      </option>

                    </select>

                  </div>

                </div>

              </div>


              {/* ============================= */}
              {/* MARKS */}
              {/* ============================= */}

              <div className="jee-section">

                <div className="jee-section-title">
                  📝 JEE Main Marks
                </div>


                <div className="jee-grid">


                  <div className="jee-group">

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


                  <div className="jee-group">

                    <label>
                      Physics
                      <span>/ 100</span>
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
                      max="100"
                    />

                  </div>


                  <div className="jee-group">

                    <label>
                      Chemistry
                      <span>/ 100</span>
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
                      max="100"
                    />

                  </div>

                </div>

              </div>


              {/* ============================= */}
              {/* PERSONAL */}
              {/* ============================= */}

              <div className="jee-section">

                <div className="jee-section-title">
                  👤 Personal Details
                </div>


                <div className="jee-grid">


                  <div className="jee-group">

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

                      <option value="OBC_NCL">
                        OBC-NCL
                      </option>

                      <option value="SC">
                        SC
                      </option>

                      <option value="ST">
                        ST
                      </option>

                    </select>

                  </div>


                  <div className="jee-group">

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

                </div>

              </div>


              {/* ============================= */}
              {/* ERROR */}
              {/* ============================= */}

              {error && (

                <div className="jee-error">
                  ⚠️ {error}
                </div>

              )}


              {/* ============================= */}
              {/* BUTTON */}
              {/* ============================= */}

              <button
                type="submit"
                className="jee-submit"
                disabled={loading}
              >

                {loading ? (

                  <>
                    <span className="jee-spinner">
                      ⟳
                    </span>

                    Analysing JEE Main Data...

                  </>

                ) : (

                  <>
                    🎯

                    Predict My Rank

                    →

                  </>

                )}

              </button>


              <div className="jee-disclaimer">

                <span>
                  ℹ️
                </span>

                <p>
                  This is an estimated percentile
                  and rank based on historical
                  marks-to-rank trends. NTA's actual
                  NTA Score and rank can differ because
                  of session-wise normalization.
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
            id="jee-main-result"
            className="jee-result-card"
          >


            {/* RESULT HEADER */}

            <div className="jee-result-top">

              <div>

                <span>
                  YOUR ESTIMATED RESULT
                </span>

                <h2>
                  JEE Main Paper 1
                </h2>

              </div>


              <div className="jee-result-score">

                <span>
                  Your Score
                </span>

                <strong>

                  {result.score}

                  <small>
                    / 300
                  </small>

                </strong>

              </div>

            </div>


            {/* PERCENTILE */}

            <div className="jee-percentile">

              <span>
                Estimated NTA Percentile
              </span>


              <strong>
                {result.expectedPercentile}
              </strong>


              <p>
                percentile
              </p>

            </div>


            {/* CRL */}

            <div className="jee-rank-main">

              <span>
                Expected CRL Rank Range
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
                  #{result.mostLikelyRank.toLocaleString()}
                </b>

              </p>

            </div>


            {/* STATS */}

            <div className="jee-result-stats">


              <div>

                <span>
                  Confidence
                </span>

                <strong>
                  {result.confidence}
                </strong>

              </div>


              <div>

                <span>
                  Year
                </span>

                <strong>
                  {result.selectedYear}
                </strong>

              </div>


              <div>

                <span>
                  Exam
                </span>

                <strong>
                  JEE Main
                </strong>

              </div>

            </div>


            {/* CATEGORY */}

            {categoryResult &&
              !categoryResult.isGeneral && (

              <div className="jee-category-card">

                <div className="jee-category-header">

                  <div>

                    <span>
                      RESERVED CATEGORY
                    </span>

                    <h3>

                      {categoryResult.category === 'OBC_NCL'
                        ? 'OBC-NCL'
                        : categoryResult.category
                      }

                      {' '}Rank

                    </h3>

                  </div>

                  <div>
                    🏷️
                  </div>

                </div>


                <div className="jee-category-main">

                  <span>
                    Estimated Category Rank
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


                <div className="jee-category-stats">

                  <div>

                    <span>
                      Category
                    </span>

                    <strong>

                      {categoryResult.category === 'OBC_NCL'
                        ? 'OBC-NCL'
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


            {/* HISTORICAL */}

            <div className="jee-history">

              <h3>
                Historical Comparison
              </h3>


              <div className="jee-history-grid">

                {result.yearlyPredictions.map(
                  (item) => (

                    <div
                      key={item.year}
                      className="jee-history-card"
                    >

                      <span>
                        {item.year}
                      </span>

                      <strong>
                        {item.percentile.toFixed(3)}
                      </strong>

                      <small>
                        percentile
                      </small>

                    </div>

                  )
                )}

              </div>

            </div>


            {/* NOTE */}

            <div className="jee-result-note">

              <span>
                💡
              </span>

              <p>
                JEE Main uses session-wise
                normalization. Therefore a raw
                marks-to-percentile conversion is
                only an estimate. The official NTA
                Score and final rank may differ.
              </p>

            </div>


            {/* RESET */}

            <button
              className="jee-reset"
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


export default JEEMain