import { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Profile from './pages/Profile/Profile'


/* ============================= */
/*     PROTECTED FEATURE PAGE    */
/* ============================= */

function ProtectedPage({
  isLoggedIn,
  onLogin,
  title,
  description,
}) {
  const navigate = useNavigate()

  if (!isLoggedIn) {
    return (
      <main className="protected-page">

        <div className="protected-card">

          <div className="protected-icon">
            🔒
          </div>

          <h2>
            Login Required
          </h2>

          <p>
            Please login to access {title}.
          </p>

          <button
            onClick={onLogin}
          >
            Login
          </button>

          <button
            className="back-home-button"
            onClick={() => navigate('/')}
          >
            ← Back to Home
          </button>

        </div>

      </main>
    )
  }

  return (
    <main className="feature-page">

      <div className="feature-page-content">

        <span>
          DreamCampus
        </span>

        <h1>
          {title}
        </h1>

        <p>
          {description}
        </p>

      </div>

    </main>
  )
}


/* ============================= */
/*            APP                */
/* ============================= */

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const [showLogin, setShowLogin] = useState(false)

  const [student, setStudent] = useState(null)
  const [profilePic, setProfilePic] = useState(
  localStorage.getItem('dreamCampusProfilePic') || null
)


  /* LOGIN */

  const handleLogin = (studentData) => {

    setStudent(studentData)

    setIsLoggedIn(true)

    setShowLogin(false)
  }


  /* LOGOUT */

  const handleLogout = () => {

    setStudent(null)

    setIsLoggedIn(false)
  }


  return (
    <BrowserRouter>

      {/* ============================= */}
      {/*           NAVBAR              */}
      {/* ============================= */}

      <Navbar
        isLoggedIn={isLoggedIn}
        student={student}
        onLogin={() => setShowLogin(true)}
        onLogout={handleLogout}
        profilePic={profilePic}
      />


      {/* ============================= */}
      {/*            PAGES               */}
      {/* ============================= */}

      <Routes>

        {/* HOME */}

        <Route
          path="/"
          element={
            <Home />
          }
        />


        {/* RANK PREDICTOR */}

        <Route
          path="/rank-predictor"
          element={
            <ProtectedPage
              isLoggedIn={isLoggedIn}
              onLogin={() => setShowLogin(true)}
              title="Rank Predictor"
              description="Predict your expected rank and discover suitable colleges."
            />
          }
        />


        {/* STUDY MATERIALS */}

        <Route
          path="/study-materials"
          element={
            <ProtectedPage
              isLoggedIn={isLoggedIn}
              onLogin={() => setShowLogin(true)}
              title="Study Materials"
              description="Access your complete preparation materials."
            />
          }
        />


        {/* PREVIOUS YEAR PAPERS */}

        <Route
          path="/previous-papers"
          element={
            <ProtectedPage
              isLoggedIn={isLoggedIn}
              onLogin={() => setShowLogin(true)}
              title="Previous Year Questions"
              description="Practice previous year question papers."
            />
          }
        />


        {/* AI DASHBOARD */}

        <Route
          path="/ai-dashboard"
          element={
            <ProtectedPage
              isLoggedIn={isLoggedIn}
              onLogin={() => setShowLogin(true)}
              title="AI Dashboard"
              description="Your AI-powered student dashboard."
            />
          }
        />


        {/* COLLEGE DETAILS */}

        <Route
          path="/college-details"
          element={
            <ProtectedPage
              isLoggedIn={isLoggedIn}
              onLogin={() => setShowLogin(true)}
              title="College Details"
              description="Explore engineering and medical colleges."
            />
          }
        />


        {/* PROFILE */}

        <Route
          path="/profile"
          element={
            isLoggedIn ? (
              <Profile
                student={student}
                onLogout={handleLogout}
                profilePic={profilePic}
                setProfilePic={setProfilePic}
              />
            ) : (
              <Navigate to="/" />
            )
          }
        />

      </Routes>


      {/* ============================= */}
      {/*          LOGIN POPUP           */}
      {/* ============================= */}

      {showLogin && (
        <Login
          onClose={() => setShowLogin(false)}
          onLogin={handleLogin}
        />
      )}

    </BrowserRouter>
  )
}

export default App