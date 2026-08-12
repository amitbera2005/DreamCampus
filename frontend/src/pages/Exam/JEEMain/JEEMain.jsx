import { Link } from 'react-router-dom'
import './JEEMain.css'

function JEEMain() {
  return (
    <main className="exam-page wbjee-page">

      <div className="exam-bg-glow glow-one"></div>
      <div className="exam-bg-glow glow-two"></div>


      <section className="exam-hero">

        <div className="exam-logo">
          🚀
        </div>

        <span className="exam-label">
          NATIONAL ENGINEERING ENTRANCE EXAM
        </span>

        <h1>
          JEE Main
        </h1>

        <p className="exam-tagline">
          Joint Entrance Examination — Main
        </p>

        <p className="exam-intro">
          JEE Main is one of India's major engineering
          entrance examinations for admission to
          undergraduate engineering and technology
          programmes at participating institutions.
        </p>

      </section>


      <section className="exam-info-grid">

        <div className="exam-info-card">
          <span>🎯</span>
          <h3>Purpose</h3>
          <p>
            Entrance examination for undergraduate
            engineering and technology programmes.
          </p>
        </div>


        <div className="exam-info-card">
          <span>📐</span>
          <h3>Subjects</h3>
          <p>
            Mathematics, Physics and Chemistry form
            the core subjects for Paper 1.
          </p>
        </div>


        <div className="exam-info-card">
          <span>🏛️</span>
          <h3>Institutions</h3>
          <p>
            JEE Main scores are used by many
            participating engineering institutions.
          </p>
        </div>


        <div className="exam-info-card">
          <span>📊</span>
          <h3>Rank & Percentile</h3>
          <p>
            Your performance is represented through
            percentile and ranking systems.
          </p>
        </div>

      </section>


      <section className="exam-details">

        <div className="details-heading">
          <span>JEE MAIN GUIDE</span>

          <h2>
            Everything you need to know
          </h2>
        </div>


        <div className="details-list">

          <article>
            <h3>📚 Preparation</h3>
            <p>
              Build strong concepts, practise numerical
              problems and revise regularly.
            </p>
          </article>


          <article>
            <h3>📝 Question Practice</h3>
            <p>
              Previous year papers and mock tests can
              help you understand the examination pattern.
            </p>
          </article>


          <article>
            <h3>🎯 Target Colleges</h3>
            <p>
              Use your performance and expected rank
              to explore suitable colleges.
            </p>
          </article>


          <article>
            <h3>🚀 Smart Strategy</h3>
            <p>
              Combine concept building, timed practice
              and regular performance analysis.
            </p>
          </article>

        </div>

      </section>


      <div className="exam-page-actions">

        <Link to="/">
          ← Home
        </Link>

      </div>

    </main>
  )
}

export default JEEMain