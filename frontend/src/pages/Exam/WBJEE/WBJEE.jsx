import { Link } from 'react-router-dom'
import './WBJEE.css'

function WBJEE() {
  return (
    <main className="exam-page wbjee-page">

      <div className="exam-bg-glow glow-one"></div>
      <div className="exam-bg-glow glow-two"></div>

      <section className="exam-hero">

        <div className="exam-logo wbjee-logo">
          ⚡
        </div>

        <span className="exam-label">
          ENGINEERING ENTRANCE EXAM
        </span>

        <h1>
          WBJEE
        </h1>

        <p className="exam-tagline">
          West Bengal Joint Entrance Examination
        </p>

        <p className="exam-intro">
          WBJEE is the state-level entrance examination
          for admission to undergraduate engineering,
          technology, architecture and pharmacy courses
          in West Bengal.
        </p>

      </section>


      <section className="exam-info-grid">

        <div className="exam-info-card">
          <span>🎯</span>
          <h3>Purpose</h3>
          <p>
            Admission to undergraduate engineering,
            technology, architecture and pharmacy
            programmes in West Bengal.
          </p>
        </div>


        <div className="exam-info-card">
          <span>📅</span>
          <h3>Exam Pattern</h3>
          <p>
            The examination mainly covers Mathematics,
            Physics and Chemistry.
          </p>
        </div>


        <div className="exam-info-card">
          <span>🎓</span>
          <h3>Courses</h3>
          <p>
            Engineering, Technology, Architecture
            and Pharmacy programmes.
          </p>
        </div>


        <div className="exam-info-card">
          <span>🏫</span>
          <h3>College Admission</h3>
          <p>
            Your WBJEE rank can be used to explore
            suitable colleges and courses.
          </p>
        </div>

      </section>


      <section className="exam-details">

        <div className="details-heading">
          <span>WBJEE GUIDE</span>

          <h2>
            Everything you need to know
          </h2>
        </div>


        <div className="details-list">

          <article>
            <h3>📚 Subjects</h3>
            <p>
              Mathematics, Physics and Chemistry are
              the core subjects for WBJEE preparation.
            </p>
          </article>


          <article>
            <h3>📝 Question Pattern</h3>
            <p>
              Questions are based on the prescribed
              higher-secondary level syllabus.
            </p>
          </article>


          <article>
            <h3>📊 Rank & Counselling</h3>
            <p>
              After the examination, candidates can use
              their rank to participate in the admission
              and counselling process.
            </p>
          </article>


          <article>
            <h3>🏆 Preparation Strategy</h3>
            <p>
              Build strong concepts, practise previous
              year papers and regularly take mock tests.
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

export default WBJEE