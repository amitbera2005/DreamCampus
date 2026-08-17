import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import {
  RecaptchaVerifier,
  signInWithPhoneNumber
} from 'firebase/auth'

import { auth } from '../../firebase/firebase'

import './Login.css'


const API_URL = 'https://dreamcampus.onrender.com/api/auth'


function Login({ onLogin }) {

  // ========================================
  // MAIN MODE
  // ========================================

  const [mode, setMode] = useState('login')


  // ========================================
  // LOGIN
  // ========================================

  const [loginData, setLoginData] = useState({
    userId: '',
    password: ''
  })


  // ========================================
  // SIGN UP
  // ========================================

  const [signupData, setSignupData] = useState({
    userId: '',
    password: '',
    confirmPassword: '',
    mobile: '',
    name: '',
    email: '',
    exam: ''
  })


  // ========================================
  // FORGOT PASSWORD
  // ========================================

  const [forgotData, setForgotData] = useState({
    userId: '',
    mobile: '',
    newPassword: '',
    confirmPassword: ''
  })


  // ========================================
  // OTP
  // ========================================

  const [otp, setOtp] = useState('')

  const [confirmationResult, setConfirmationResult] =
    useState(null)

  const [otpMode, setOtpMode] =
    useState('')


  // ========================================
  // UI
  // ========================================

  const [step, setStep] =
    useState('form')

  const [loading, setLoading] =
    useState(false)

  const [error, setError] =
    useState('')

  const [success, setSuccess] =
    useState('')


  const recaptchaVerifier =
    useRef(null)


  // ========================================
  // RECAPTCHA
  // ========================================

  useEffect(() => {

    return () => {

      if (recaptchaVerifier.current) {

        try {
          recaptchaVerifier.current.clear()
        } catch {}

        recaptchaVerifier.current = null
      }

    }

  }, [])


  const setupRecaptcha = () => {

    if (recaptchaVerifier.current) {
      return recaptchaVerifier.current
    }


    recaptchaVerifier.current =
      new RecaptchaVerifier(
        auth,
        'recaptcha-container',
        {
          size: 'invisible',

          callback: () => {
            console.log('reCAPTCHA verified')
          },

          'expired-callback': () => {
            setError(
              'reCAPTCHA expired. Please try again.'
            )
          }
        }
      )


    return recaptchaVerifier.current
  }


  // ========================================
  // HELPERS
  // ========================================

  const clearMessages = () => {

    setError('')
    setSuccess('')

  }


  const normalizeMobile = (mobile) => {

    return mobile
      .replace(/\D/g, '')
      .replace(/^91/, '')

  }


  // ========================================
  // LOGIN INPUT
  // ========================================

  const handleLoginChange = (e) => {

    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    })

  }


  // ========================================
  // SIGNUP INPUT
  // ========================================

  const handleSignupChange = (e) => {

    setSignupData({
      ...signupData,
      [e.target.name]: e.target.value
    })

  }


  // ========================================
  // FORGOT INPUT
  // ========================================

  const handleForgotChange = (e) => {

    setForgotData({
      ...forgotData,
      [e.target.name]: e.target.value
    })

  }


  // ========================================
  // LOGIN
  // ========================================

  const handleLogin = async (e) => {

    e.preventDefault()

    clearMessages()

    if (
      !loginData.userId ||
      !loginData.password
    ) {

      setError(
        'Please enter User ID and password.'
      )

      return
    }


    try {

      setLoading(true)


      const response =
        await fetch(
          `${API_URL}/login`,
          {
            method: 'POST',

            headers: {
              'Content-Type':
                'application/json'
            },

            body: JSON.stringify({
              userId: loginData.userId,
              password: loginData.password
            })
          }
        )


      const data =
        await response.json()


      if (!response.ok) {

        throw new Error(
          data.message ||
          'Login failed.'
        )

      }


      // Save session

      localStorage.setItem(
        'dreamCampusToken',
        data.token
      )

      localStorage.setItem(
        'dreamCampusStudent',
        JSON.stringify(data.user)
      )


      // Tell App

      onLogin(data.user)


    } catch (error) {

      setError(
        error.message ||
        'Unable to login.'
      )

    } finally {

      setLoading(false)

    }

  }


  // ========================================
  // SEND SIGNUP OTP
  // ========================================

  const handleSignupOtp = async (e) => {

    e.preventDefault()

    clearMessages()


    const mobile =
      normalizeMobile(
        signupData.mobile
      )


    if (
      !signupData.userId ||
      !signupData.password ||
      !signupData.confirmPassword ||
      !mobile
    ) {

      setError(
        'Please fill all required fields.'
      )

      return
    }


    if (
      signupData.password.length < 6
    ) {

      setError(
        'Password must be at least 6 characters.'
      )

      return
    }


    if (
      signupData.password !==
      signupData.confirmPassword
    ) {

      setError(
        'Passwords do not match.'
      )

      return
    }


    if (mobile.length !== 10) {

      setError(
        'Please enter a valid 10-digit mobile number.'
      )

      return
    }


    try {

      setLoading(true)


      // Check whether User ID/mobile already exists

      const checkResponse =
        await fetch(
          `${API_URL}/forgot-password`,
          {
            method: 'POST',

            headers: {
              'Content-Type':
                'application/json'
            },

            body: JSON.stringify({
              userId:
                signupData.userId,
              mobile
            })
          }
        )


      const checkData =
        await checkResponse.json()


      if (checkResponse.ok) {

        setError(
          'User ID and mobile number are already registered.'
        )

        return
      }


      // Firebase OTP

      const verifier =
        setupRecaptcha()


      const confirmation =
        await signInWithPhoneNumber(
          auth,
          `+91${mobile}`,
          verifier
        )


      setConfirmationResult(
        confirmation
      )

      setOtpMode('signup')

      setOtp('')

      setStep('otp')

      setSuccess(
        `OTP sent to +91 ${mobile}`
      )


    } catch (error) {

      console.error(error)

      if (recaptchaVerifier.current) {

        try {
          recaptchaVerifier.current.clear()
        } catch {}

        recaptchaVerifier.current = null
      }


      setError(
        error.message ||
        'Unable to send OTP.'
      )

    } finally {

      setLoading(false)

    }

  }


  // ========================================
  // SEND FORGOT PASSWORD OTP
  // ========================================

  const handleForgotOtp = async (e) => {

    e.preventDefault()

    clearMessages()


    const mobile =
      normalizeMobile(
        forgotData.mobile
      )


    if (
      !forgotData.userId ||
      !mobile
    ) {

      setError(
        'Please enter User ID and mobile number.'
      )

      return
    }


    if (mobile.length !== 10) {

      setError(
        'Please enter a valid 10-digit mobile number.'
      )

      return
    }


    try {

      setLoading(true)


      // Check account exists

      const response =
        await fetch(
          `${API_URL}/forgot-password`,
          {
            method: 'POST',

            headers: {
              'Content-Type':
                'application/json'
            },

            body: JSON.stringify({
              userId:
                forgotData.userId,
              mobile
            })
          }
        )


      const data =
        await response.json()


      if (!response.ok) {

        throw new Error(
          data.message ||
          'Account not found.'
        )

      }


      const verifier =
        setupRecaptcha()


      const confirmation =
        await signInWithPhoneNumber(
          auth,
          `+91${mobile}`,
          verifier
        )


      setConfirmationResult(
        confirmation
      )

      setOtpMode('forgot')

      setOtp('')

      setStep('otp')

      setSuccess(
        `OTP sent to +91 ${mobile}`
      )


    } catch (error) {

      console.error(error)

      if (recaptchaVerifier.current) {

        try {
          recaptchaVerifier.current.clear()
        } catch {}

        recaptchaVerifier.current = null
      }


      setError(
        error.message ||
        'Unable to send OTP.'
      )

    } finally {

      setLoading(false)

    }

  }


  // ========================================
  // VERIFY OTP
  // ========================================

  const handleVerifyOtp = async (e) => {

    e.preventDefault()

    clearMessages()


    if (!confirmationResult) {

      setError(
        'Please request an OTP first.'
      )

      return
    }


    if (!otp || otp.length !== 6) {

      setError(
        'Please enter the 6-digit OTP.'
      )

      return
    }


    try {

      setLoading(true)


      const result =
        await confirmationResult.confirm(
          otp
        )


      const firebaseUser =
        result.user


      const idToken =
        await firebaseUser.getIdToken(
          true
        )


      // Backend verifies Firebase token

      const verifyResponse =
        await fetch(
          `${API_URL}/verify-phone`,
          {
            method: 'POST',

            headers: {
              'Content-Type':
                'application/json'
            },

            body: JSON.stringify({
              idToken
            })
          }
        )


      const verifyData =
        await verifyResponse.json()


      if (!verifyResponse.ok) {

        throw new Error(
          verifyData.message ||
          'Phone verification failed.'
        )

      }


      if (
        otpMode === 'signup'
      ) {

        setSignupData(
          previous => ({
            ...previous,
            mobile:
              normalizeMobile(
                previous.mobile
              )
          })
        )

        setStep('details')

        setSuccess(
          'Mobile number verified. Complete your profile.'
        )

      }


      if (
        otpMode === 'forgot'
      ) {

        setStep('reset')

        setSuccess(
          'Mobile number verified. Set your new password.'
        )

      }


      // Store verified Firebase UID temporarily

      localStorage.setItem(
        'dreamCampusFirebaseUid',
        verifyData.firebaseUid
      )


    } catch (error) {

      console.error(error)

      setError(
        error.message ||
        'Invalid OTP.'
      )

    } finally {

      setLoading(false)

    }

  }


  // ========================================
  // COMPLETE SIGNUP
  // ========================================

  const handleCreateAccount = async (e) => {

    e.preventDefault()

    clearMessages()


    if (
      !signupData.name ||
      !signupData.email ||
      !signupData.exam
    ) {

      setError(
        'Please complete all profile details.'
      )

      return
    }


    const firebaseUid =
      localStorage.getItem(
        'dreamCampusFirebaseUid'
      )


    if (!firebaseUid) {

      setError(
        'Phone verification is missing.'
      )

      return
    }


    try {

      setLoading(true)


      const response =
        await fetch(
          `${API_URL}/signup`,
          {
            method: 'POST',

            headers: {
              'Content-Type':
                'application/json'
            },

            body: JSON.stringify({

              userId:
                signupData.userId,

              password:
                signupData.password,

              name:
                signupData.name,

              email:
                signupData.email,

              exam:
                signupData.exam,

              mobile:
                normalizeMobile(
                  signupData.mobile
                ),

              firebaseUid

            })
          }
        )


      const data =
        await response.json()


      if (!response.ok) {

        throw new Error(
          data.message ||
          'Unable to create account.'
        )

      }


      localStorage.removeItem(
        'dreamCampusFirebaseUid'
      )


      localStorage.setItem(
        'dreamCampusToken',
        data.token
      )

      localStorage.setItem(
        'dreamCampusStudent',
        JSON.stringify(data.user)
      )


      onLogin(data.user)


    } catch (error) {

      setError(
        error.message ||
        'Unable to create account.'
      )

    } finally {

      setLoading(false)

    }

  }


  // ========================================
  // RESET PASSWORD
  // ========================================

  const handleResetPassword = async (e) => {

    e.preventDefault()

    clearMessages()


    if (
      !forgotData.newPassword ||
      !forgotData.confirmPassword
    ) {

      setError(
        'Please enter your new password.'
      )

      return
    }


    if (
      forgotData.newPassword.length < 6
    ) {

      setError(
        'Password must be at least 6 characters.'
      )

      return
    }


    if (
      forgotData.newPassword !==
      forgotData.confirmPassword
    ) {

      setError(
        'Passwords do not match.'
      )

      return
    }


    const firebaseUid =
      localStorage.getItem(
        'dreamCampusFirebaseUid'
      )


    if (!firebaseUid) {

      setError(
        'Phone verification is missing.'
      )

      return
    }


    try {

      setLoading(true)


      const response =
        await fetch(
          `${API_URL}/reset-password`,
          {
            method: 'POST',

            headers: {
              'Content-Type':
                'application/json'
            },

            body: JSON.stringify({

              userId:
                forgotData.userId,

              mobile:
                normalizeMobile(
                  forgotData.mobile
                ),

              newPassword:
                forgotData.newPassword,

              firebaseUid

            })
          }
        )


      const data =
        await response.json()


      if (!response.ok) {

        throw new Error(
          data.message ||
          'Unable to reset password.'
        )

      }


      localStorage.removeItem(
        'dreamCampusFirebaseUid'
      )


      setMode('login')

      setStep('form')

      setForgotData({
        userId: '',
        mobile: '',
        newPassword: '',
        confirmPassword: ''
      })

      setOtp('')

      setConfirmationResult(null)

      setSuccess(
        'Password reset successfully. Please login.'
      )


    } catch (error) {

      setError(
        error.message ||
        'Unable to reset password.'
      )

    } finally {

      setLoading(false)

    }

  }


  // ========================================
  // SWITCH MODE
  // ========================================

  const switchMode = (newMode) => {

    clearMessages()

    setMode(newMode)

    setStep('form')

    setOtp('')

    setConfirmationResult(null)

    if (recaptchaVerifier.current) {

      try {
        recaptchaVerifier.current.clear()
      } catch {}

      recaptchaVerifier.current = null
    }

  }


  // ========================================
  // BACK
  // ========================================

  const handleBack = () => {

    clearMessages()

    setStep('form')

    setOtp('')

    setConfirmationResult(null)

  }


  // ========================================
  // RENDER
  // ========================================

  return (

<main className={mode === 'signup' ? 'login-page signup-page' : 'login-page'}>

      <div className="login-card">


        {/* ================================== */}
        {/* LOGIN */}
        {/* ================================== */}

        {mode === 'login' &&
          step === 'form' && (

          <>

            <div className="login-header">

              <span>
                Welcome Back
              </span>

              <h1>
                Login to DreamCampus
              </h1>

              <p>
                Login with your User ID and password
              </p>

            </div>


            <form
              className="login-form"
              onSubmit={handleLogin}
            >

              <div className="form-group">

                <label>
                  User ID
                </label>

                <input
                  type="text"
                  name="userId"
                  value={loginData.userId}
                  onChange={handleLoginChange}
                  placeholder="Enter your User ID"
                  autoComplete="username"
                />

              </div>


              <div className="form-group">

                <label>
                  Password
                </label>

                <input
                  type="password"
                  name="password"
                  value={loginData.password}
                  onChange={handleLoginChange}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                />

              </div>


              {error && (
                <p className="login-error">
                  {error}
                </p>
              )}


              {success && (
                <p className="login-success">
                  {success}
                </p>
              )}


<button
  type="submit"
  className="login-submit"
  disabled={loading}
  onClick={() => console.log('LOGIN BUTTON CLICKED')}
>
  {loading
    ? 'Logging in...'
    : 'Login'}
</button>


              <button
                type="button"
                className="text-button"
                onClick={() =>
                  switchMode('forgot')
                }
              >
                Forgot Password?
              </button>


            </form>


            <div className="login-switch">

              <span>
                Don't have an account?
              </span>

              <button
                type="button"
                onClick={() =>
                  switchMode('signup')
                }
              >
                Sign Up
              </button>

            </div>

          </>
        )}


        {/* ================================== */}
        {/* SIGNUP */}
        {/* ================================== */}

        {mode === 'signup' &&
          step === 'form' && (

          <>

            <div className="login-header">

              <span>
                Create Account
              </span>

              <h1>
                Sign Up
              </h1>

              <p>
                Create your DreamCampus account
              </p>

            </div>


            <form
              className="login-form"
              onSubmit={handleSignupOtp}
            >

              <div className="form-group">

                <label>
                  User ID
                </label>

                <input
                  type="text"
                  name="userId"
                  value={signupData.userId}
                  onChange={handleSignupChange}
                  placeholder="Create a User ID"
                />

              </div>


              <div className="form-group">

                <label>
                  Password
                </label>

                <input
                  type="password"
                  name="password"
                  value={signupData.password}
                  onChange={handleSignupChange}
                  placeholder="Create a password"
                />

              </div>


              <div className="form-group">

                <label>
                  Confirm Password
                </label>

                <input
                  type="password"
                  name="confirmPassword"
                  value={signupData.confirmPassword}
                  onChange={handleSignupChange}
                  placeholder="Confirm password"
                />

              </div>


              <div className="form-group">

                <label>
                  Mobile Number
                </label>

                <input
                  type="tel"
                  name="mobile"
                  value={signupData.mobile}
                  onChange={handleSignupChange}
                  placeholder="10-digit mobile number"
                  maxLength="10"
                />

              </div>


              {error && (
                <p className="login-error">
                  {error}
                </p>
              )}


              {success && (
                <p className="login-success">
                  {success}
                </p>
              )}


              <button
                type="submit"
                className="login-submit"
                disabled={loading}
              >
                {loading
                  ? 'Sending OTP...'
                  : 'Send OTP'}
              </button>

            </form>


            <div className="login-switch">

              <span>
                Already have an account?
              </span>

              <button
                type="button"
                onClick={() =>
                  switchMode('login')
                }
              >
                Login
              </button>

            </div>

          </>
        )}


        {/* ================================== */}
        {/* FORGOT PASSWORD */}
        {/* ================================== */}

        {mode === 'forgot' &&
          step === 'form' && (

          <>

            <div className="login-header">

              <span>
                Account Recovery
              </span>

              <h1>
                Forgot Password
              </h1>

              <p>
                Verify your mobile number to reset your password
              </p>

            </div>


            <form
              className="login-form"
              onSubmit={handleForgotOtp}
            >

              <div className="form-group">

                <label>
                  User ID
                </label>

                <input
                  type="text"
                  name="userId"
                  value={forgotData.userId}
                  onChange={handleForgotChange}
                  placeholder="Enter your User ID"
                />

              </div>


              <div className="form-group">

                <label>
                  Mobile Number
                </label>

                <input
                  type="tel"
                  name="mobile"
                  value={forgotData.mobile}
                  onChange={handleForgotChange}
                  placeholder="Registered mobile number"
                  maxLength="10"
                />

              </div>


              {error && (
                <p className="login-error">
                  {error}
                </p>
              )}


              {success && (
                <p className="login-success">
                  {success}
                </p>
              )}


              <button
                type="submit"
                className="login-submit"
                disabled={loading}
              >
                {loading
                  ? 'Sending OTP...'
                  : 'Send OTP'}
              </button>


            </form>


            <div className="login-switch">

              <button
                type="button"
                onClick={() =>
                  switchMode('login')
                }
              >
                ← Back to Login
              </button>

            </div>

          </>
        )}


        {/* ================================== */}
        {/* OTP */}
        {/* ================================== */}

        {step === 'otp' && (

          <>

            <div className="login-header">

              <span>
                Mobile Verification
              </span>

              <h1>
                Verify OTP
              </h1>

              <p>
                Enter the 6-digit OTP sent to your mobile number
              </p>

            </div>


            <form
              className="login-form"
              onSubmit={handleVerifyOtp}
            >

              <div className="form-group">

                <label>
                  OTP
                </label>

                <input
                  type="text"
                  inputMode="numeric"
                  value={otp}
                  onChange={(e) =>
                    setOtp(
                      e.target.value
                        .replace(/\D/g, '')
                        .slice(0, 6)
                    )
                  }
                  placeholder="Enter 6-digit OTP"
                  maxLength="6"
                />

              </div>


              {error && (
                <p className="login-error">
                  {error}
                </p>
              )}


              {success && (
                <p className="login-success">
                  {success}
                </p>
              )}


              <button
                type="submit"
                className="login-submit"
                disabled={loading}
              >
                {loading
                  ? 'Verifying...'
                  : 'Verify OTP'}
              </button>


              <button
                type="button"
                className="text-button"
                onClick={handleBack}
              >
                ← Back
              </button>

            </form>

          </>
        )}


        {/* ================================== */}
        {/* SIGNUP PROFILE DETAILS */}
        {/* ================================== */}

        {mode === 'signup' &&
          step === 'details' && (

          <>

            <div className="login-header">

              <span>
                Almost Done
              </span>

              <h1>
                Complete Your Profile
              </h1>

              <p>
                Your mobile number has been verified
              </p>

            </div>


            <form
              className="login-form"
              onSubmit={handleCreateAccount}
            >

              <div className="form-group">

                <label>
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={signupData.name}
                  onChange={handleSignupChange}
                  placeholder="Enter your name"
                />

              </div>


              <div className="form-group">

                <label>
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={signupData.email}
                  onChange={handleSignupChange}
                  placeholder="Enter your email"
                />

              </div>


              <div className="form-group">

                <label>
                  Exam
                </label>

                <select
                  name="exam"
                  value={signupData.exam}
                  onChange={handleSignupChange}
                >

                  <option value="">
                    Select Exam
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


              {error && (
                <p className="login-error">
                  {error}
                </p>
              )}


              {success && (
                <p className="login-success">
                  {success}
                </p>
              )}


              <button
                type="submit"
                className="login-submit"
                disabled={loading}
              >
                {loading
                  ? 'Creating Account...'
                  : 'Create Account'}
              </button>

            </form>

          </>
        )}


        {/* ================================== */}
        {/* RESET PASSWORD */}
        {/* ================================== */}

        {mode === 'forgot' &&
          step === 'reset' && (

          <>

            <div className="login-header">

              <span>
                Security Verified
              </span>

              <h1>
                Reset Password
              </h1>

              <p>
                Create a new password for your account
              </p>

            </div>


            <form
              className="login-form"
              onSubmit={handleResetPassword}
            >

              <div className="form-group">

                <label>
                  New Password
                </label>

                <input
                  type="password"
                  name="newPassword"
                  value={forgotData.newPassword}
                  onChange={handleForgotChange}
                  placeholder="Enter new password"
                />

              </div>


              <div className="form-group">

                <label>
                  Confirm New Password
                </label>

                <input
                  type="password"
                  name="confirmPassword"
                  value={forgotData.confirmPassword}
                  onChange={handleForgotChange}
                  placeholder="Confirm new password"
                />

              </div>


              {error && (
                <p className="login-error">
                  {error}
                </p>
              )}


              {success && (
                <p className="login-success">
                  {success}
                </p>
              )}


              <button
                type="submit"
                className="login-submit"
                disabled={loading}
              >
                {loading
                  ? 'Updating...'
                  : 'Reset Password'}
              </button>

            </form>

          </>
        )}


        {/* ================================== */}
        {/* RECAPTCHA */}
        {/* ================================== */}

        <div
          id="recaptcha-container"
        />


        {/* ================================== */}
        {/* BACK HOME */}
        {/* ================================== */}

        <div className="login-footer">

          <Link to="/">
            ← Back to Home
          </Link>

        </div>

      </div>

    </main>

  )

}


export default Login