import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar({ isLoggedIn,   student,
  profilePic, onLogin, onLogout }) {
  const [profileOpen, setProfileOpen] = useState(false)

  return (
    <nav className="navbar">

      {/* Logo */}
      <Link to="/" className="navbar-brand">
        <div className="brand-icon">
          🎓
        </div>

        <div className="brand-name">
          Dream<span>Campus</span>
        </div>
      </Link>


      {/* Navigation */}
      <div className="navbar-menu">

        <Link to="/" className="nav-link">
          Home
        </Link>

        <Link to="/rank-predictor" className="nav-link">
          Rank Predictor
        </Link>

        <Link to="/study-materials" className="nav-link">
          Study Materials
        </Link>

        <Link to="/previous-papers" className="nav-link">
          Previous Year Questions
        </Link>

        <Link to="/ai-dashboard" className="nav-link">
          AI Dashboard
        </Link>

        <Link to="/college-details" className="nav-link">
          College Details
        </Link>

      </div>


      {/* Login / Profile */}
      <div className="profile-area">

        {!isLoggedIn ? (

          <button
            className="login-btn"
            onClick={onLogin}
          >
            Login
          </button>

        ) : (

          <div className="profile-wrapper">

            <button
              className="profile-btn"
              onClick={() => setProfileOpen(!profileOpen)}
            >
             <div className="profile-avatar">

                {profilePic ? (
                    <img
                    src={profilePic}
                    alt="Profile"
                    />
                ) : (
                    '👤'
                )}

                </div>

              <span>Profile</span>

              <span className="profile-arrow">
                ▾
              </span>
            </button>


            {profileOpen && (

              <div className="profile-dropdown">

                <Link
                  to="/profile"
                  onClick={() => setProfileOpen(false)}
                >
                  👤 My Profile
                </Link>

                <button onClick={onLogout}>
                  🚪 Logout
                </button>

              </div>

            )}

          </div>

        )}

      </div>

    </nav>
  )
}

export default Navbar