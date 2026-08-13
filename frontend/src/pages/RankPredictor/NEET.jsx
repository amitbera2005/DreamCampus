import { useState } from 'react'
import './NEET.css'

import {
  predictNEETRank
} from '../../utils/neetRankCalculator'

import {
  predictNEETCategoryRank
} from '../../utils/neetCategoryRankCalculator'


const initialForm = {

  score: '',

  category: '',

  gender: '',

  examYear: '2026',

}


function NEET() {

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


  const handleSubmit = (e) => {

    e.preventDefault()


    if (
      formData.score === ''
    ) {

      setError(
        'Please enter your NEET score.'
      )

      return

    }


    const score =
      Number(formData.score)


    if (
      score < 0 ||
      score > 720
    ) {

      setError(
        'NEET score must be between 0 and 720.'
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


    setLoading(true)

    setError('')

    setResult(null)

    setCategoryResult(null)


    setTimeout(() => {

      const prediction =
        predictNEETRank(
          score,
          formData.examYear
        )


      if (!prediction.success) {

        setError(
          prediction.message
        )

        setLoading(false)

        return

      }


      const categoryPrediction =
        predictNEETCategoryRank(
          prediction.rank,
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
            'neet-result'
          )
          ?.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
          })

      }, 100)

    }, 1200)

  }


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


  return (

    <main className="neet-page">

      <div className="neet-container">


        {/* HEADER */}

        <div className="neet-badge">
          🩺 NEET UG
        </div>


        <h1>
          NEET Rank Predictor
        </h1>


        <p>
          Enter your NEET score and details
          to estimate your expected All India
          Rank and category rank.
        </p>


        {!result && (

          <div className="neet-form-card">


            {/* FORM HEADER */}

            <div className="neet-form-header">

              <div>

                <h2>
                  Predictor Setup
                </h2>

                <p>
                  NEET Undergraduate Medical Entrance
                </p>

              </div>


              <div className="neet-score-box">

                <span>
                  Maximum Score
                </span>

                <strong>
                  720
                </strong>

              </div>

            </div>


            <form
              onSubmit={handleSubmit}
            >


              {/* EXAM */}

              <div className="neet-section">

                <div className="neet-section-title">
                  📅 Examination Details
                </div>


                <div className="neet-grid">


                  <div className="neet-group">

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


                </div>

              </div>


              {/* SCORE */}

              <div className="neet-section">

                <div className="neet-section-title">
                  📝 NEET Score
                </div>


                <div className="neet-score-input">

                  <label>
                    Your NEET Score
                    <span>
                      / 720
                    </span>
                  </label>


                  <input
                    type="number"
                    name="score"
                    value={
                      formData.score
                    }
                    onChange={
                      handleChange
                    }
                    placeholder="Enter your score"
                    min="0"
                    max="720"
                  />

                </div>

              </div>


              {/* PERSONAL */}

              <div className="neet-section">

                <div className="neet-section-title">
                  👤 Personal Details
                </div>


                <div className="neet-grid">


                  <div className="neet-group">

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


                  <div className="neet-group">

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


              {/* ERROR */}

              {error && (

                <div className="neet-error">
                  ⚠️ {error}
                </div>

              )}


              {/* BUTTON */}

              <button
                type="submit"
                className="neet-submit"
                disabled={loading}
              >

                {loading ? (

                  <>
                    <span className="neet-spinner">
                      ⟳
                    </span>

                    Analysing NEET Data...
                  </>

                ) : (

                  <>
                    🎯
                    Predict My Rank
                    →
                  </>

                )}

              </button>


              <div className="neet-disclaimer">

                <span>
                  ℹ️
                </span>

                <p>
                  This predictor provides an
                  estimated rank using historical
                  score-to-rank trends. The actual
                  NTA rank may differ.
                </p>

              </div>


            </form>

          </div>

        )}


        {/* RESULT */}

        {result && (

          <section
            id="neet-result"
            className="neet-result-card"
          >


            {/* TOP */}

            <div className="neet-result-top">

              <div>

                <span>
                  YOUR ESTIMATED RESULT
                </span>

                <h2>
                  NEET UG
                </h2>

              </div>


              <div className="neet-result-score">

                <span>
                  Your Score
                </span>

                <strong>
                  {result.score}
                  <small>
                    / 720
                  </small>
                </strong>

              </div>

            </div>


            {/* AIR */}

            <div className="neet-air">

              <span>
                Estimated All India Rank
              </span>


              <strong>

                {result.rankMin.toLocaleString()}

                {' – '}

                {result.rankMax.toLocaleString()}

              </strong>


              <p>

                Most likely:

                {' '}

                <b>
                  #{result.rank.toLocaleString()}
                </b>

              </p>

            </div>


            {/* STATS */}

            <div className="neet-result-stats">


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
                  {result.year}
                </strong>

              </div>


              <div>

                <span>
                  Exam
                </span>

                <strong>
                  NEET UG
                </strong>

              </div>

            </div>


            {/* CATEGORY */}

            {categoryResult &&
              !categoryResult.isGeneral && (

              <div className="neet-category-card">

                <div className="neet-category-header">

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


                <div className="neet-category-main">

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


                <div className="neet-category-stats">

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


            {/* GENERAL NOTE */}

            {categoryResult &&
              categoryResult.isGeneral && (

              <div className="neet-general-card">

                <span>
                  GENERAL CATEGORY
                </span>

                <h3>
                  Your estimated AIR is used
                  directly for counselling.
                </h3>

                <p>
                  General category does not require
                  a separate category-rank estimate
                  here.
                </p>

              </div>

            )}


            {/* RESULT NOTE */}

            <div className="neet-result-note">

              <span>
                💡
              </span>

              <p>
                This is an estimated All India Rank
                based on historical score-to-rank
                trends. The official NTA result and
                rank should always be treated as final.
              </p>

            </div>


            {/* RESET */}

            <button
              className="neet-reset"
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


export default NEET