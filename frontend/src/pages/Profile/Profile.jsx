import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Profile.css'

function Profile({ student, onLogout, profilePic, setProfilePic }) {

  const [imageError, setImageError] = useState('')


  // ================================
  // ACCOUNT-SPECIFIC PROFILE PIC KEY
  // ================================

const profilePicKey = student?.userId
  ? `dreamCampusProfilePic_${student.userId}`
  : null


  const handleProfilePicture = (e) => {

    const file = e.target.files?.[0]

    if (!file) return


    // Only image files

    if (!file.type.startsWith('image/')) {
      setImageError('Please select an image file.')
      return
    }


    // Maximum 5 MB

if (file.size > 1 * 1024 * 1024) {
  setImageError('Image size must be less than 1 MB.')
  return
}


    setImageError('')


    const reader = new FileReader()

reader.onload = () => {

  const imageData = reader.result

  if (profilePicKey) {
    try {

      localStorage.setItem(
        profilePicKey,
        imageData
      )

      setProfilePic(imageData)

    } catch (error) {

      console.error(
        'Unable to save profile picture:',
        error
      )

      setImageError(
        'Image is too large. Please choose a smaller image.'
      )

    }
  }
} 

    reader.readAsDataURL(file)
  }


  const removeProfilePicture = () => {

    setProfilePic(null)

    if (profilePicKey) {
      localStorage.removeItem(profilePicKey)
    }
  }


  return (

    <main className="profile-page">

      <div className="profile-card">


        {/* PROFILE PHOTO */}

        <div className="profile-photo-section">

          <div className="profile-photo-wrapper">

            {profilePic ? (

              <img
                src={profilePic}
                alt="Profile"
                className="profile-photo"
              />

            ) : (

              <div className="profile-photo-placeholder">
                👤
              </div>

            )}


            <label
              htmlFor="profile-picture"
              className="profile-camera"
              title="Change profile picture"
            >
              📷
            </label>

          </div>


          <input
            id="profile-picture"
            type="file"
            accept="image/*"
            onChange={handleProfilePicture}
            hidden
          />


          <label
            htmlFor="profile-picture"
            className="change-photo-button"
          >
            {profilePic
              ? 'Change Profile Picture'
              : 'Add Profile Picture'}
          </label>


          {profilePic && (
            <button
              className="remove-photo-button"
              onClick={removeProfilePicture}
            >
              Remove Picture
            </button>
          )}


          {imageError && (
            <p className="profile-image-error">
              {imageError}
            </p>
          )}

        </div>


        {/* STUDENT NAME */}

        <div className="profile-title">

          <span>
            Student Profile
          </span>

          <h1>
            {student?.name || 'Student'}
          </h1>

        </div>


        {/* STUDENT DETAILS */}

        <div className="profile-details">


          <div className="profile-info">

            <span>
              Name
            </span>

            <strong>
              {student?.name || '-'}
            </strong>

          </div>


          <div className="profile-info">

            <span>
              Email
            </span>

            <strong>
              {student?.email || '-'}
            </strong>

          </div>


          <div className="profile-info">

            <span>
              Exam
            </span>

            <strong>
              {student?.exam || '-'}
            </strong>

          </div>


          <div className="profile-info">

            <span>
              Mobile Number
            </span>

            <strong>
              +91 {student?.mobile || '-'}
            </strong>

          </div>


        </div>


        {/* ACTIONS */}

        <div className="profile-actions">

          <Link to="/">
            ← Back to Home
          </Link>

          <button onClick={onLogout}>
            Logout
          </button>

        </div>


      </div>

    </main>
  )
}

export default Profile