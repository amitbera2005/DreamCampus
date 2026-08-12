import './Home.css'

import {
  useNavigate,
  Link
} from 'react-router-dom'

import {
  useEffect,
  useRef,
  useState
} from 'react'

import RankPredictorModal
  from '../RankPredictor/RankPredictorModal'


function Home() {

  const navigate = useNavigate()


  /* ============================= */
  /* QUICK STATS */
  /* ============================= */

  const [stats, setStats] = useState({

    colleges: 0,

    students: 0,

    resources: 0,

  })


  const statsRef = useRef(null)


  /* ============================= */
  /* RANK PREDICTOR MODAL */
  /* ============================= */

  const [
    showRankPredictor,
    setShowRankPredictor
  ] = useState(false)


  /* ============================= */
  /* STATS ANIMATION */
  /* ============================= */

  useEffect(() => {

    const section = statsRef.current

    if (!section) return

    let started = false


    const observer =
      new IntersectionObserver(

        (entries) => {

          if (
            entries[0].isIntersecting &&
            !started
          ) {

            started = true

            const duration = 2000

            const startTime =
              performance.now()


            const animate = (currentTime) => {

              const progress =
                Math.min(
                  (currentTime - startTime) /
                    duration,
                  1
                )


              const smoothProgress =
                1 -
                Math.pow(
                  1 - progress,
                  3
                )


              setStats({

                colleges:
                  Math.floor(
                    20 *
                    smoothProgress
                  ),

                students:
                  Math.floor(
                    50 *
                    smoothProgress
                  ),

                resources:
                  Math.floor(
                    100 *
                    smoothProgress
                  ),

              })


              if (progress < 1) {

                requestAnimationFrame(
                  animate
                )

              }

            }


            requestAnimationFrame(
              animate
            )

          }

        },

        {
          threshold: 0.4
        }

      )


    observer.observe(section)


    return () =>
      observer.disconnect()

  }, [])


  return (

    <>

      <main className="home">


        {/* ============================= */}
        {/* BACKGROUND GLOW */}
        {/* ============================= */}

        <div className="hero-glow hero-glow-one"></div>

        <div className="hero-glow hero-glow-two"></div>


        {/* ============================= */}
        {/* HERO */}
        {/* ============================= */}

        <section className="hero-section">


          <div className="hero-content">


            <div className="hero-badge">

              🎓

              <span>
                India's Student Guidance Platform
              </span>

            </div>


            <h1>

              Your Future.

              <br />

              Your

              <span>
                DreamCampus.
              </span>

            </h1>


            <p>

              Everything you need for your journey through

              <strong>
                WBJEE, JEE Main & NEET.
              </strong>

              <br />

              Predict your rank, explore colleges and prepare smarter.

            </p>


            <div className="hero-buttons">


              <button
                className="primary-button"
                onClick={() => {

                  document
                    .getElementById('features')
                    ?.scrollIntoView({
                      behavior: 'smooth'
                    })

                }}
              >

                Start Your Journey

              </button>


              <Link
                to="/college-details"
                className="secondary-button"
              >

                Explore Colleges

              </Link>


            </div>


            <div className="exam-pills">

              <span>
                WBJEE
              </span>

              <span>
                JEE MAIN
              </span>

              <span>
                NEET
              </span>

            </div>


          </div>


          {/* ============================= */}
          {/* STUDY VISUAL */}
          {/* ============================= */}

          <div className="study-visual">

            <div className="study-card">


              <div className="study-top">

                <span>
                  🎓
                </span>

                <span>
                  DreamCampus
                </span>

              </div>


              <div className="study-laptop">

                <div className="screen">


                  <div className="screen-title">
                    Your Study Dashboard
                  </div>


                  <div className="screen-bars">

                    <span></span>

                    <span></span>

                    <span></span>

                  </div>


                  <div className="screen-cards">

                    <div>
                      📊 Rank
                    </div>

                    <div>
                      📚 Study
                    </div>

                    <div>
                      🏫 Colleges
                    </div>

                  </div>


                </div>


                <div className="laptop-base"></div>


              </div>


              <div className="study-books">
                📕 📘 📗
              </div>


            </div>

          </div>


        </section>


        {/* ============================= */}
        {/* QUICK STATS */}
        {/* ============================= */}

        <section
          className="quick-stats"
          ref={statsRef}
        >


          <div className="stat-card">

            <div className="stat-number">
              {stats.colleges}+
            </div>

            <div className="stat-label">
              Colleges
            </div>

          </div>


          <div className="stat-card">

            <div className="stat-number">
              {stats.students}K+
            </div>

            <div className="stat-label">
              Students
            </div>

          </div>


          <div className="stat-card">

            <div className="stat-number">
              {stats.resources}+
            </div>

            <div className="stat-label">
              Resources
            </div>

          </div>


          <div className="stat-card">

            <div className="stat-number ai-stat">
              AI
            </div>

            <div className="stat-label">
              Powered
            </div>

          </div>


        </section>


        {/* ============================= */}
        {/* QUICK FEATURES */}
        {/* ============================= */}

        <section
          className="features"
          id="features"
        >


          <div className="section-heading">

            <span>
              Everything in one place
            </span>


            <h2>

              Your Complete

              <strong>
                College Journey
              </strong>

            </h2>

          </div>


          <div className="feature-grid">


            {/* ============================= */}
            {/* RANK PREDICTOR */}
            {/* ============================= */}

            <button
              className="feature-card"
              onClick={() =>
                setShowRankPredictor(true)
              }
            >

              <div className="feature-icon">
                📊
              </div>


              <h3>
                Rank Predictor
              </h3>


              <p>
                Predict your expected rank and discover suitable colleges.
              </p>

            </button>


            {/* ============================= */}
            {/* STUDY MATERIALS */}
            {/* ============================= */}

            <Link
              to="/study-materials"
              className="feature-card"
            >

              <div className="feature-icon">
                📚
              </div>


              <h3>
                Study Materials
              </h3>


              <p>
                Access preparation materials for WBJEE, JEE Main and NEET.
              </p>

            </Link>


            {/* ============================= */}
            {/* PREVIOUS PAPERS */}
            {/* ============================= */}

            <Link
              to="/previous-papers"
              className="feature-card"
            >

              <div className="feature-icon">
                📝
              </div>


              <h3>
                Previous Papers
              </h3>


              <p>
                Practice previous year question papers and improve your preparation.
              </p>

            </Link>


            {/* ============================= */}
            {/* COLLEGE DETAILS */}
            {/* ============================= */}

            <Link
              to="/college-details"
              className="feature-card"
            >

              <div className="feature-icon">
                🏫
              </div>


              <h3>
                College Details
              </h3>


              <p>
                Explore engineering and medical colleges with important details.
              </p>

            </Link>


          </div>


        </section>


        {/* ============================= */}
        {/* EXAM SECTION */}
        {/* ============================= */}

        <section className="exam-section">


          <div className="section-heading">

            <span>
              Prepare for your dream
            </span>


            <h2>

              Choose Your

              <strong>
                Exam
              </strong>

            </h2>

          </div>


          <div className="exam-grid">


            {/* WBJEE */}

            <Link
              to="/exams/wbjee"
              className="exam-card"
            >

              <div className="exam-icon">
                ⚡
              </div>

              <h3>
                WBJEE
              </h3>

              <p>
                Engineering admission and college prediction.
              </p>

              <span className="exam-explore">
                Explore →
              </span>

            </Link>


            {/* JEE MAIN */}

            <Link
              to="/exams/jee-main"
              className="exam-card"
            >

              <div className="exam-icon">
                🚀
              </div>

              <h3>
                JEE Main
              </h3>

              <p>
                Prepare, predict your rank and explore colleges.
              </p>

              <span className="exam-explore">
                Explore →
              </span>

            </Link>


            {/* NEET */}

            <Link
              to="/exams/neet"
              className="exam-card"
            >

              <div className="exam-icon">
                🩺
              </div>

              <h3>
                NEET
              </h3>

              <p>
                Medical college prediction and preparation resources.
              </p>

              <span className="exam-explore">
                Explore →
              </span>

            </Link>


          </div>


        </section>


        {/* ============================= */}
        {/* CTA */}
        {/* ============================= */}

        <section className="cta-section">


          <div className="cta-card">


            <span>
              Ready to start?
            </span>


            <h2>

              Turn your preparation into

              <strong>
                possibilities.
              </strong>

            </h2>


            <button
              onClick={() =>
                navigate('/get-started')
              }
            >
              Get Started
            </button>


          </div>


        </section>


      </main>


      {/* ============================= */}
      {/* RANK PREDICTOR MODAL */}
      {/* ============================= */}

      {showRankPredictor && (

        <RankPredictorModal
          onClose={() =>
            setShowRankPredictor(false)
          }
        />

      )}

    </>

  )
}

export default Home