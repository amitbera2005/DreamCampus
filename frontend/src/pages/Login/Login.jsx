import { useEffect, useRef, useState } from 'react'
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from 'firebase/auth'

import { auth } from '../../firebase/firebase'
import './Login.css'

function Login({ onClose, onLogin }) {
  const [step, setStep] = useState('details')

  const [form, setForm] = useState({
    name: '',
    email: '',
    exam: '',
    mobile: '',
  })

  const [otp, setOtp] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const confirmationResult = useRef(null)
  const recaptchaReady = useRef(false)


  /* Firebase reCAPTCHA */

  useEffect(() => {
    return () => {
      if (window.recaptchaVerifier) {
        try {
          window.recaptchaVerifier.clear()
        } catch {
          // Already cleared
        }

        window.recaptchaVerifier = null
      }
    }
  }, [])


  /* Input change */

  const handleChange = (e) => {
    const { name, value } = e.target

    if (name === 'mobile') {
      const numbersOnly = value
        .replace(/\D/g, '')
        .slice(0, 10)

      setForm((previous) => ({
        ...previous,
        mobile: numbersOnly,
      }))

      setError('')
      return
    }

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }))

    setError('')
  }


  /* Send Firebase OTP */

  const sendOtp = async (e) => {
    e.preventDefault()

    setError('')

    if (!form.name.trim()) {
      setError('Please enter your full name.')
      return
    }

    if (!form.email.trim()) {
      setError('Please enter your email address.')
      return
    }

    if (!form.exam) {
      setError('Please select your exam.')
      return
    }

    if (form.mobile.length !== 10) {
      setError('Enter a valid 10-digit mobile number.')
      return
    }

    setLoading(true)

    try {
      const phoneNumber = `+91${form.mobile}`

      if (!window.recaptchaVerifier) {
        window.recaptchaVerifier = new RecaptchaVerifier(
          auth,
          'recaptcha-container',
          {
            size: 'normal',
            callback: () => {
              recaptchaReady.current = true
            },
            'expired-callback': () => {
              recaptchaReady.current = false
              setError('reCAPTCHA expired. Please verify again.')
            },
          }
        )
      }

      const appVerifier = window.recaptchaVerifier

      confirmationResult.current =
        await signInWithPhoneNumber(
          auth,
          phoneNumber,
          appVerifier
        )

      setStep('otp')

    } catch (err) {
      console.error(err)

      setError(
        err?.message ||
        'Unable to send OTP. Please try again.'
      )

      if (window.recaptchaVerifier) {
        try {
          window.recaptchaVerifier.clear()
        } catch {
          // Ignore cleanup error
        }

        window.recaptchaVerifier = null
      }

    } finally {
      setLoading(false)
    }
  }


  /* Verify OTP */

  const verifyOtp = async (e) => {
    e.preventDefault()

    setError('')

    if (otp.length !== 6) {
      setError('Enter the 6-digit OTP.')
      return
    }

    if (!confirmationResult.current) {
      setError('OTP session expired. Please request OTP again.')
      return
    }

    setLoading(true)

    try {
      await confirmationResult.current.confirm(otp)

      setStep('verified')

    } catch (err) {
      console.error(err)

      setError(
        'Invalid OTP. Please check the OTP and try again.'
      )

    } finally {
      setLoading(false)
    }
  }


  /* Final Login */

  const finishLogin = () => {
    onLogin({
      name: form.name,
      email: form.email,
      exam: form.exam,
      mobile: form.mobile,
    })

    onClose()
  }


  /* Change mobile */

  const changeMobile = () => {
    setStep('details')
    setOtp('')
    setError('')

    if (window.recaptchaVerifier) {
      try {
        window.recaptchaVerifier.clear()
      } catch {
        // Ignore
      }

      window.recaptchaVerifier = null
    }
  }


  return (
    <div className="login-overlay">

      <div className="login-modal">

        <button
          className="login-close"
          onClick={onClose}
          type="button"
        >
          ×
        </button>


        {/* ========================= */}
        {/* STUDENT DETAILS */}
        {/* ========================= */}

        {step === 'details' && (
          <>
            <div className="login-heading">

              <div className="login-icon">
                🎓
              </div>

              <h2>Welcome to DreamCampus</h2>

              <p>
                Create your student profile to continue
              </p>

            </div>


            <form onSubmit={sendOtp}>

              <div className="input-group">

                <label>
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={handleChange}
                />

              </div>


              <div className="input-group">

                <label>
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={handleChange}
                />

              </div>


              <div className="input-group">

                <label>
                  Exam
                </label>

                <select
                  name="exam"
                  value={form.exam}
                  onChange={handleChange}
                >

                  <option value="">
                    Select your exam
                  </option>

                  <option value="WBJEE">
                    WBJEE
                  </option>

                  <option value="JEE Main">
                    JEE Main
                  </option>

                  <option value="NEET">
                    NEET
                  </option>

                </select>

              </div>


              <div className="input-group">

                <label>
                  Mobile Number
                </label>

                <div
                  className={`mobile-input ${
                    form.mobile.length > 0 &&
                    form.mobile.length !== 10
                      ? 'input-error'
                      : ''
                  }`}
                >

                  <span>
                    +91
                  </span>

                  <input
                    type="text"
                    name="mobile"
                    placeholder="10 digit mobile number"
                    value={form.mobile}
                    onChange={handleChange}
                    inputMode="numeric"
                    maxLength="10"
                  />

                </div>

              </div>


              {error && (
                <div className="login-error">
                  ⚠ {error}
                </div>
              )}


              {/* Firebase reCAPTCHA */}

              <div
                id="recaptcha-container"
                className="recaptcha-container"
              ></div>


              <button
                type="submit"
                className="otp-button"
                disabled={loading}
              >
                {loading
                  ? 'Sending OTP...'
                  : 'Send OTP'}
              </button>

            </form>
          </>
        )}


        {/* ========================= */}
        {/* OTP */}
        {/* ========================= */}

        {step === 'otp' && (
          <>
            <div className="login-heading">

              <div className="login-icon">
                📱
              </div>

              <h2>
                Verify Mobile
              </h2>

              <p>
                Enter the OTP sent to
                <br />

                <strong>
                  +91 {form.mobile}
                </strong>
              </p>

            </div>


            <form onSubmit={verifyOtp}>

              <div className="otp-input-container">

                <input
                  className="otp-input"
                  type="text"
                  inputMode="numeric"
                  maxLength="6"
                  placeholder="000000"
                  value={otp}
                  onChange={(e) => {
                    const value =
                      e.target.value
                        .replace(/\D/g, '')
                        .slice(0, 6)

                    setOtp(value)
                    setError('')
                  }}
                />

              </div>


              {error && (
                <div className="login-error">
                  ⚠ {error}
                </div>
              )}


              <button
                type="submit"
                className="otp-button"
                disabled={loading}
              >
                {loading
                  ? 'Verifying...'
                  : 'Verify OTP'}
              </button>


              <button
                type="button"
                className="back-button"
                onClick={changeMobile}
              >
                ← Change Mobile Number
              </button>

            </form>
          </>
        )}


        {/* ========================= */}
        {/* VERIFIED */}
        {/* ========================= */}

        {step === 'verified' && (
          <div className="verified-screen">

            <div className="verified-icon">
              ✓
            </div>

            <h2>
              Mobile Verified
            </h2>

            <p>
              Your mobile number has been successfully verified.
            </p>


            <div className="verified-details">

              <div>
                <span>Name</span>
                <strong>
                  {form.name}
                </strong>
              </div>

              <div>
                <span>Email</span>
                <strong>
                  {form.email}
                </strong>
              </div>

              <div>
                <span>Exam</span>
                <strong>
                  {form.exam}
                </strong>
              </div>

              <div>
                <span>Mobile</span>
                <strong>
                  +91 {form.mobile}
                </strong>
              </div>

            </div>


            <button
              className="done-button"
              onClick={finishLogin}
            >
              Done
            </button>

          </div>
        )}

      </div>

    </div>
  )
}

export default Login