const firebaseAuth = require('../config/firebaseAdmin')

const pool = require('../config/db')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


// ========================================
// FORGOT PASSWORD - CHECK USER
// ========================================

const forgotPassword = async (req, res) => {

  try {

    const {
      userId,
      mobile
    } = req.body

    if (!userId || !mobile) {

      return res.status(400).json({
        success: false,
        message: 'User ID and mobile number are required.'
      })

    }

    const result = await pool.query(
      `
      SELECT
        id,
        user_id,
        mobile
      FROM users
      WHERE user_id = $1
      AND mobile = $2
      `,
      [userId, mobile]
    )

    if (result.rows.length === 0) {

      return res.status(404).json({
        success: false,
        message: 'No account found with these details.'
      })

    }

    res.json({
      success: true,
      message: 'Account found.'
    })

  } catch (error) {

    console.error(
      'Forgot password error:',
      error
    )

    res.status(500).json({
      success: false,
      message: 'Unable to process request.'
    })

  }

}


// ========================================
// RESET PASSWORD
// ========================================

const resetPassword = async (req, res) => {

  try {

    const {
      userId,
      mobile,
      newPassword,
      firebaseUid
    } = req.body


    if (
      !userId ||
      !mobile ||
      !newPassword ||
      !firebaseUid
    ) {

      return res.status(400).json({
        success: false,
        message: 'All fields are required.'
      })

    }


    if (newPassword.length < 6) {

      return res.status(400).json({
        success: false,
        message: 'Password must be at least 6 characters.'
      })

    }


    // Verify Firebase user

    let firebaseUser

    try {

      firebaseUser =
        await firebaseAuth.getUser(firebaseUid)

    } catch {

      return res.status(401).json({
        success: false,
        message: 'Firebase verification failed.'
      })

    }


    const firebasePhone =
      firebaseUser.phoneNumber


    if (!firebasePhone) {

      return res.status(401).json({
        success: false,
        message: 'Verified phone number not found.'
      })

    }


    const normalizedMobile =
      firebasePhone.replace('+91', '')


    if (normalizedMobile !== mobile) {

      return res.status(401).json({
        success: false,
        message: 'Verified mobile number does not match.'
      })

    }


    // Find account

    const userResult =
      await pool.query(
        `
        SELECT id
        FROM users
        WHERE user_id = $1
        AND mobile = $2
        `,
        [userId, mobile]
      )


    if (userResult.rows.length === 0) {

      return res.status(404).json({
        success: false,
        message: 'Account not found.'
      })

    }


    // Hash new password

    const passwordHash =
      await bcrypt.hash(
        newPassword,
        12
      )


    // Update password

    await pool.query(
      `
      UPDATE users
      SET
        password_hash = $1,
        updated_at = CURRENT_TIMESTAMP
      WHERE user_id = $2
      AND mobile = $3
      `,
      [
        passwordHash,
        userId,
        mobile
      ]
    )


    res.json({

      success: true,

      message: 'Password reset successfully.'

    })


  } catch (error) {

    console.error(
      'Reset password error:',
      error
    )

    res.status(500).json({
      success: false,
      message: 'Unable to reset password.'
    })

  }

}

// ========================================
// VERIFY FIREBASE PHONE TOKEN
// ========================================

const verifyPhoneToken = async (req, res) => {

  try {

    const {
      idToken
    } = req.body


    if (!idToken) {

      return res.status(400).json({
        success: false,
        message: 'Firebase ID token is required.'
      })

    }


    const decodedToken =
      await firebaseAuth.verifyIdToken(idToken)


    if (!decodedToken.phone_number) {

      return res.status(400).json({
        success: false,
        message: 'Phone number is not verified.'
      })

    }


    res.json({

      success: true,

      message: 'Phone number verified successfully.',

      firebaseUid: decodedToken.uid,

      mobile: decodedToken.phone_number

    })


  } catch (error) {

    console.error(
      'Firebase token verification error:',
      error
    )

    res.status(401).json({

      success: false,

      message: 'Invalid Firebase verification token.'

    })

  }

}


// ========================================
// CREATE JWT
// ========================================

const createToken = (user) => {

  return jwt.sign(
    {
      id: user.id,
      userId: user.user_id
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '7d'
    }
  )
}


// ========================================
// SIGN UP
// ========================================

const signup = async (req, res) => {

  try {

    const {
      userId,
      password,
      name,
      email,
      exam,
      mobile,
      firebaseUid
    } = req.body


    if (
      !userId ||
      !password ||
      !name ||
      !email ||
      !exam ||
      !mobile ||
      !firebaseUid
    ) {

      return res.status(400).json({
        success: false,
        message: 'All fields are required.'
      })

    }


    // Check existing User ID

    const existingUser = await pool.query(
      `
      SELECT id
      FROM users
      WHERE user_id = $1
      `,
      [userId]
    )


    if (existingUser.rows.length > 0) {

      return res.status(409).json({
        success: false,
        message: 'User ID already exists.'
      })

    }


    // Check mobile

    const existingMobile = await pool.query(
      `
      SELECT id
      FROM users
      WHERE mobile = $1
      `,
      [mobile]
    )


    if (existingMobile.rows.length > 0) {

      return res.status(409).json({
        success: false,
        message: 'Mobile number already registered.'
      })

    }


    // Hash password

    const passwordHash =
      await bcrypt.hash(password, 12)


    // Create user

    const result = await pool.query(
      `
      INSERT INTO users
      (
        user_id,
        password_hash,
        name,
        email,
        exam,
        mobile,
        mobile_verified,
        firebase_uid
      )
      VALUES
      ($1, $2, $3, $4, $5, $6, TRUE, $7)
      RETURNING
        id,
        user_id,
        name,
        email,
        exam,
        mobile,
        mobile_verified
      `,
      [
        userId,
        passwordHash,
        name,
        email,
        exam,
        mobile,
        firebaseUid
      ]
    )


    const user = result.rows[0]

    const token = createToken(user)


    res.status(201).json({

      success: true,

      message: 'Account created successfully.',

      token,

      user

    })


  } catch (error) {

    console.error(
      'Signup error:',
      error
    )

    res.status(500).json({
      success: false,
      message: 'Unable to create account.'
    })

  }

}


// ========================================
// LOGIN
// ========================================

const login = async (req, res) => {

  try {

    const {
      userId,
      password
    } = req.body


    if (!userId || !password) {

      return res.status(400).json({
        success: false,
        message: 'User ID and password are required.'
      })

    }


    const result = await pool.query(
      `
      SELECT *
      FROM users
      WHERE user_id = $1
      `,
      [userId]
    )


    if (result.rows.length === 0) {

      return res.status(401).json({
        success: false,
        message: 'Invalid User ID or password.'
      })

    }


    const user = result.rows[0]


    const passwordMatch =
      await bcrypt.compare(
        password,
        user.password_hash
      )


    if (!passwordMatch) {

      return res.status(401).json({
        success: false,
        message: 'Invalid User ID or password.'
      })

    }


    const token = createToken(user)


    res.json({

      success: true,

      message: 'Login successful.',

      token,

      user: {
        id: user.id,
        userId: user.user_id,
        name: user.name,
        email: user.email,
        exam: user.exam,
        mobile: user.mobile
      }

    })


  } catch (error) {

    console.error(
      'Login error:',
      error
    )

    res.status(500).json({
      success: false,
      message: 'Login failed.'
    })

  }

}


// ========================================
// GET CURRENT USER
// ========================================

const getMe = async (req, res) => {

  try {

    const result = await pool.query(
      `
      SELECT
        id,
        user_id,
        name,
        email,
        exam,
        mobile,
        mobile_verified
      FROM users
      WHERE id = $1
      `,
      [req.user.id]
    )


    if (result.rows.length === 0) {

      return res.status(404).json({
        success: false,
        message: 'User not found.'
      })

    }


    const user = result.rows[0]


    res.json({

      success: true,

      user: {
        id: user.id,
        userId: user.user_id,
        name: user.name,
        email: user.email,
        exam: user.exam,
        mobile: user.mobile,
        mobileVerified: user.mobile_verified
      }

    })


  } catch (error) {

    console.error(
      'Get user error:',
      error
    )

    res.status(500).json({
      success: false,
      message: 'Unable to load user.'
    })

  }

}


module.exports = {
  signup,
  login,
  verifyPhoneToken,
  forgotPassword,
  resetPassword
}