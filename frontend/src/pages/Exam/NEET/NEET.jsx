import { Link } from 'react-router-dom'
import './NEET.css'

function NEET() {
  return (
    <main className="exam-page wbjee-page">

      <div className="exam-bg-glow glow-one"></div>
      <div className="exam-bg-glow glow-two"></div>


      <section className="exam-hero">

        <div className="exam-logo">
          🩺
        </div>

        <span className="exam-label">
          MEDICAL ENTRANCE EXAM
        </span>

        <h1>
          NEET
        </h1>

        <p className="exam-tagline">
          National Eligibility cum Entrance Test
        </p>

        <p className="exam-intro">
          NEET is the national entrance examination
          used for admission to undergraduate medical
          and dental programmes in India.
        </p>

      </section>


      <section className="exam-info-grid">

        <div className="exam-info-card">
          <span>🩺</span>
          <h3>Purpose</h3>
          <p>
            Entrance examination for undergraduate
            medical and dental programmes.
          </p>
        </div>


        <div className="exam-info-card">
          <span>🧬</span>
          <h3>Subjects</h3>
          <p>
            Physics, Chemistry and Biology are the
            core subjects for NEET preparation.
          </p>
        </div>


        <div className="exam-info-card">
          <span>🏥</span>
          <h3>Medical Colleges</h3>
          <p>
            Explore medical colleges and understand
            admission possibilities based on your rank.
          </p>
        </div>


        <div className="exam-info-card">
          <span>📊</span>
          <h3>Rank</h3>
          <p>
            Your examination performance determines
            your position for the admission process.
          </p>
        </div>

      </section>


      <section className="exam-details">

        <div className="details-heading">
          <span>NEET GUIDE</span>

          <h2>
            Everything you need to know
          </h2>
        </div>


        <div className="details-list">

          <article>
            <h3>🧬 Biology</h3>
            <p>
              Give strong attention to concepts,
              diagrams, NCERT-based preparation and
              repeated revision.
            </p>
          </article>


          <article>
            <h3>⚗️ Chemistry</h3>
            <p>
              Balance conceptual understanding,
              reactions, formulas and numerical practice.
            </p>
          </article>


          <article>
            <h3>⚡ Physics</h3>
            <p>
              Practise formulas, numerical problems
              and timed question solving.
            </p>
          </article>


          <article>
            <h3>🏥 College Planning</h3>
            <p>
              Use your expected rank to explore suitable
              medical colleges and admission options.
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

export default NEET