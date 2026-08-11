import './Home.css'

function Home() {
  return (
    <main className="home">

      {/* Background glow */}
      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>


      {/* HERO */}

      <section className="hero-section">

        <div className="hero-content">

          <div className="hero-badge">
            🎓 <span>India's Student Guidance Platform</span>
          </div>


          <h1>
            Your Future.
            <br />

            Your
            <span> DreamCampus.</span>
          </h1>


          <p>
            Everything you need for your journey through
            <strong> WBJEE, JEE Main & NEET.</strong>

            <br />

            Predict your rank, explore colleges and prepare smarter.
          </p>


          <div className="hero-buttons">

            <button className="hero-primary">
              Start Your Journey →
            </button>

            <button className="hero-secondary">
              Explore Colleges
            </button>

          </div>


          <div className="exam-pills">

            <span>WBJEE</span>
            <span>JEE MAIN</span>
            <span>NEET</span>

          </div>

        </div>


        {/* STUDY VISUAL */}

        <div className="study-visual">

          <div className="study-card">

            <div className="study-top">
              <span>🎓</span>
              <span>DreamCampus</span>
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
                  <div>📊 Rank</div>
                  <div>📚 Study</div>
                  <div>🏫 Colleges</div>
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


      {/* QUICK FEATURES */}

      <section className="features-section">

        <div className="section-heading">
          <span>Everything in one place</span>

          <h2>
            Your Complete
            <strong> College Journey</strong>
          </h2>
        </div>


        <div className="feature-grid">

          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Rank Predictor</h3>
            <p>
              Predict your expected rank and discover suitable colleges.
            </p>
          </div>


          <div className="feature-card">
            <div className="feature-icon">📚</div>
            <h3>Study Materials</h3>
            <p>
              Access preparation materials for WBJEE, JEE Main and NEET.
            </p>
          </div>


          <div className="feature-card">
            <div className="feature-icon">📝</div>
            <h3>Previous Papers</h3>
            <p>
              Practice previous year question papers and improve your preparation.
            </p>
          </div>


          <div className="feature-card">
            <div className="feature-icon">🏫</div>
            <h3>College Details</h3>
            <p>
              Explore engineering and medical colleges with important details.
            </p>
          </div>

        </div>

      </section>


      {/* EXAM SECTION */}

      <section className="exam-section">

        <div className="section-heading">
          <span>Prepare for your dream</span>

          <h2>
            Choose Your <strong>Exam</strong>
          </h2>
        </div>


        <div className="exam-grid">

          <div className="exam-card">
            <div className="exam-icon">⚡</div>

            <h3>WBJEE</h3>

            <p>
              Engineering admission and college prediction.
            </p>

            <button>
              Explore →
            </button>
          </div>


          <div className="exam-card">
            <div className="exam-icon">🚀</div>

            <h3>JEE Main</h3>

            <p>
              Prepare, predict your rank and explore colleges.
            </p>

            <button>
              Explore →
            </button>
          </div>


          <div className="exam-card">
            <div className="exam-icon">🩺</div>

            <h3>NEET</h3>

            <p>
              Medical college prediction and preparation resources.
            </p>

            <button>
              Explore →
            </button>
          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="cta-section">

        <div className="cta-card">

          <span>Ready to start?</span>

          <h2>
            Turn your preparation into
            <strong> possibilities.</strong>
          </h2>

          <button>
            Get Started →
          </button>

        </div>

      </section>

    </main>
  )
}

export default Home