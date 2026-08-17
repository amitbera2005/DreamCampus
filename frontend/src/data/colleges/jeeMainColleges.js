/*
 * ============================================
 * JEE MAIN COLLEGE DATABASE
 * ============================================
 *
 * Top 20 Engineering Colleges
 *
 * NOTE:
 * - Cutoff values are representative 2025
 *   JoSAA/CSAB trends where available.
 * - Where complete category/branch data was
 *   unavailable, reasonable estimated values
 *   are used.
 * - Fees / hostel / placement can vary by year,
 *   category and institute rules.
 * ============================================
 */

const jeeMainColleges = [

  /* ================================================= */
  /* 1. NIT TRICHY */
  /* ================================================= */

  {
    id: 1,

    rank: 1,

    name:
      'National Institute of Technology Tiruchirappalli',

    location:
      'Tiruchirappalli, Tamil Nadu',

    image:
      '/JEEMain/nit-trichy.jpg',

    category:
      'Institute of National Importance · NIT',

    foundation:
      '1964',

    historicalOrigin:
      'Regional Engineering College established in 1964',

    branches: [
      'Computer Science and Engineering',
      'Electronics and Communication Engineering',
      'Electrical and Electronics Engineering',
      'Mechanical Engineering',
      'Civil Engineering',
      'Instrumentation and Control Engineering',
      'Chemical Engineering',
      'Production Engineering',
      'Metallurgical and Materials Engineering'
    ],

    cutoffs: {

      open: [
        { branch: 'Computer Science and Engineering', opening: 659, closing: 1449 },
        { branch: 'Electronics and Communication Engineering', opening: 1500, closing: 4200 },
        { branch: 'Electrical and Electronics Engineering', opening: 3000, closing: 6500 },
        { branch: 'Mechanical Engineering', opening: 6500, closing: 9500 },
        { branch: 'Civil Engineering', opening: 9500, closing: 15000 },
        { branch: 'Chemical Engineering', opening: 11000, closing: 18000 },
        { branch: 'Production Engineering', opening: 14000, closing: 22000 }
      ],

      obcA: [
        { branch: 'Computer Science and Engineering', opening: 250, closing: 800 },
        { branch: 'Electronics and Communication Engineering', opening: 900, closing: 2300 },
        { branch: 'Electrical and Electronics Engineering', opening: 1800, closing: 3600 },
        { branch: 'Mechanical Engineering', opening: 3500, closing: 5500 },
        { branch: 'Civil Engineering', opening: 5000, closing: 8500 }
      ],

      obcB: [
        { branch: 'Computer Science and Engineering', opening: 500, closing: 1400 },
        { branch: 'Electronics and Communication Engineering', opening: 1500, closing: 3500 },
        { branch: 'Electrical and Electronics Engineering', opening: 3000, closing: 5000 },
        { branch: 'Mechanical Engineering', opening: 5000, closing: 8000 },
        { branch: 'Civil Engineering', opening: 7500, closing: 12000 }
      ],

      sc: [
        { branch: 'Computer Science and Engineering', opening: 100, closing: 600 },
        { branch: 'Electronics and Communication Engineering', opening: 500, closing: 1500 },
        { branch: 'Electrical and Electronics Engineering', opening: 1000, closing: 2500 },
        { branch: 'Mechanical Engineering', opening: 2200, closing: 4500 },
        { branch: 'Civil Engineering', opening: 4000, closing: 7000 }
      ],

      st: [
        { branch: 'Computer Science and Engineering', opening: 50, closing: 300 },
        { branch: 'Electronics and Communication Engineering', opening: 250, closing: 800 },
        { branch: 'Electrical and Electronics Engineering', opening: 600, closing: 1300 },
        { branch: 'Mechanical Engineering', opening: 1200, closing: 2500 },
        { branch: 'Civil Engineering', opening: 2200, closing: 4500 }
      ],

      ews: [
        { branch: 'Computer Science and Engineering', opening: 100, closing: 500 },
        { branch: 'Electronics and Communication Engineering', opening: 600, closing: 1500 },
        { branch: 'Electrical and Electronics Engineering', opening: 1200, closing: 2500 },
        { branch: 'Mechanical Engineering', opening: 2300, closing: 4000 },
        { branch: 'Civil Engineering', opening: 3500, closing: 6500 }
      ]

    },

    fees: [
      { branch: 'Computer Science and Engineering', cost: '₹2.2–2.5 Lakh / year' },
      { branch: 'Electronics and Communication Engineering', cost: '₹2.2–2.5 Lakh / year' },
      { branch: 'Electrical and Electronics Engineering', cost: '₹2.2–2.5 Lakh / year' },
      { branch: 'Mechanical Engineering', cost: '₹2.2–2.5 Lakh / year' },
      { branch: 'Civil Engineering', cost: '₹2.2–2.5 Lakh / year' }
    ],

    hostel: {
      admission: '₹15,000–₹25,000 estimated',
      monthlySeatRent: '₹1,500–₹3,000',
      electricity: '₹500–₹1,000 / month',
      accommodation: '₹40,000–₹70,000 / year',
      mess: '₹4,000–₹5,500 / month'
    },

    placement: {
      engineeringMedian: '₹14–15 LPA',
      studentsPlaced: '1,000+ estimated',
      csePlacement: '90%+ estimated',
      cseAverage: '₹18–22 LPA estimated',
      cseHighest: '₹50+ LPA estimated'
    }
  },


  /* ================================================= */
  /* 2. NIT ROURKELA */
  /* ================================================= */

  {
    id: 2,
    rank: 2,

    name:
      'National Institute of Technology Rourkela',

    location:
      'Rourkela, Odisha',

    image:
      '/JEEMain/nit-rourkela.jpg',

    category:
      'Institute of National Importance · NIT',

    foundation:
      '1961',

    historicalOrigin:
      'Regional Engineering College established in 1961',

    branches: [
      'Computer Science and Engineering',
      'Electronics and Communication Engineering',
      'Electrical Engineering',
      'Mechanical Engineering',
      'Civil Engineering',
      'Chemical Engineering',
      'Metallurgical and Materials Engineering',
      'Mining Engineering',
      'Biotechnology',
      'Industrial Design'
    ],

    cutoffs: {

      open: [
        { branch: 'Computer Science and Engineering', opening: 2442, closing: 3431 },
        { branch: 'Electronics and Communication Engineering', opening: 4500, closing: 9500 },
        { branch: 'Electrical Engineering', opening: 7000, closing: 13000 },
        { branch: 'Mechanical Engineering', opening: 12000, closing: 19000 },
        { branch: 'Civil Engineering', opening: 17000, closing: 28000 },
        { branch: 'Chemical Engineering', opening: 15000, closing: 24000 },
        { branch: 'Metallurgical and Materials Engineering', opening: 20000, closing: 32000 }
      ],

      obcA: [
        { branch: 'Computer Science and Engineering', opening: 1200, closing: 3000 },
        { branch: 'Electronics and Communication Engineering', opening: 3000, closing: 7000 },
        { branch: 'Electrical Engineering', opening: 5000, closing: 9500 },
        { branch: 'Mechanical Engineering', opening: 8500, closing: 14000 },
        { branch: 'Civil Engineering', opening: 13000, closing: 21000 }
      ],

      obcB: [
        { branch: 'Computer Science and Engineering', opening: 2000, closing: 5000 },
        { branch: 'Electronics and Communication Engineering', opening: 4500, closing: 9000 },
        { branch: 'Electrical Engineering', opening: 7000, closing: 12000 },
        { branch: 'Mechanical Engineering', opening: 11000, closing: 18000 },
        { branch: 'Civil Engineering', opening: 16000, closing: 25000 }
      ],

      sc: [
        { branch: 'Computer Science and Engineering', opening: 500, closing: 1800 },
        { branch: 'Electronics and Communication Engineering', opening: 1500, closing: 4000 },
        { branch: 'Electrical Engineering', opening: 3000, closing: 7000 },
        { branch: 'Mechanical Engineering', opening: 6000, closing: 11000 },
        { branch: 'Civil Engineering', opening: 10000, closing: 18000 }
      ],

      st: [
        { branch: 'Computer Science and Engineering', opening: 200, closing: 900 },
        { branch: 'Electronics and Communication Engineering', opening: 700, closing: 2000 },
        { branch: 'Electrical Engineering', opening: 1500, closing: 3500 },
        { branch: 'Mechanical Engineering', opening: 3000, closing: 6500 },
        { branch: 'Civil Engineering', opening: 5500, closing: 10000 }
      ],

      ews: [
        { branch: 'Computer Science and Engineering', opening: 500, closing: 1300 },
        { branch: 'Electronics and Communication Engineering', opening: 1500, closing: 3500 },
        { branch: 'Electrical Engineering', opening: 3000, closing: 6000 },
        { branch: 'Mechanical Engineering', opening: 5500, closing: 10000 },
        { branch: 'Civil Engineering', opening: 9000, closing: 16000 }
      ]

    },

    fees: [
      { branch: 'Computer Science and Engineering', cost: '₹2.2–2.6 Lakh / year' },
      { branch: 'Electronics and Communication Engineering', cost: '₹2.2–2.6 Lakh / year' },
      { branch: 'Electrical Engineering', cost: '₹2.2–2.6 Lakh / year' },
      { branch: 'Mechanical Engineering', cost: '₹2.2–2.6 Lakh / year' },
      { branch: 'Civil Engineering', cost: '₹2.2–2.6 Lakh / year' }
    ],

    hostel: {
      admission: '₹15,000–₹25,000 estimated',
      monthlySeatRent: '₹1,500–₹3,000',
      electricity: '₹500–₹1,000 / month',
      accommodation: '₹40,000–₹65,000 / year',
      mess: '₹4,000–₹5,500 / month'
    },

    placement: {
      engineeringMedian: '₹11–15 LPA',
      studentsPlaced: '1,200+',
      csePlacement: '90%+ estimated',
      cseAverage: '₹18–22 LPA estimated',
      cseHighest: '₹60+ LPA'
    }
  },


  /* ================================================= */
  /* 3. NIT SURATHKAL */
  /* ================================================= */

  {
    id: 3,
    rank: 3,

    name:
      'National Institute of Technology Karnataka, Surathkal',

    location:
      'Surathkal, Karnataka',

    image:
      '/JEEMain/nit-surathkal.jpg',

    category:
      'Institute of National Importance · NIT',

    foundation:
      '1960',

    historicalOrigin:
      'Established as Karnataka Regional Engineering College',

    branches: [
      'Computer Science and Engineering',
      'Information Technology',
      'Artificial Intelligence',
      'Computational Data Science',
      'Electronics and Communication Engineering',
      'Electrical and Electronics Engineering',
      'Mechanical Engineering',
      'Civil Engineering',
      'Chemical Engineering',
      'Mining Engineering'
    ],

    cutoffs: {

      open: [
        { branch: 'Computer Science and Engineering', opening: 1191, closing: 1827 },
        { branch: 'Artificial Intelligence', opening: 2000, closing: 3500 },
        { branch: 'Information Technology', opening: 2200, closing: 4200 },
        { branch: 'Electronics and Communication Engineering', opening: 3500, closing: 6200 },
        { branch: 'Electrical and Electronics Engineering', opening: 5500, closing: 9000 },
        { branch: 'Mechanical Engineering', opening: 9000, closing: 13500 },
        { branch: 'Civil Engineering', opening: 13000, closing: 21000 }
      ],

      obcA: [
        { branch: 'Computer Science and Engineering', opening: 500, closing: 1200 },
        { branch: 'Artificial Intelligence', opening: 1100, closing: 2200 },
        { branch: 'Information Technology', opening: 1300, closing: 2600 },
        { branch: 'Electronics and Communication Engineering', opening: 2200, closing: 4000 },
        { branch: 'Electrical and Electronics Engineering', opening: 3500, closing: 6000 },
        { branch: 'Mechanical Engineering', opening: 5500, closing: 9000 }
      ],

      obcB: [
        { branch: 'Computer Science and Engineering', opening: 900, closing: 1800 },
        { branch: 'Artificial Intelligence', opening: 1700, closing: 3200 },
        { branch: 'Information Technology', opening: 2000, closing: 3800 },
        { branch: 'Electronics and Communication Engineering', opening: 3500, closing: 5500 },
        { branch: 'Electrical and Electronics Engineering', opening: 5000, closing: 8000 },
        { branch: 'Mechanical Engineering', opening: 7500, closing: 12000 }
      ],

      sc: [
        { branch: 'Computer Science and Engineering', opening: 150, closing: 700 },
        { branch: 'Artificial Intelligence', opening: 600, closing: 1200 },
        { branch: 'Information Technology', opening: 700, closing: 1500 },
        { branch: 'Electronics and Communication Engineering', opening: 1200, closing: 2500 },
        { branch: 'Electrical and Electronics Engineering', opening: 2000, closing: 4000 },
        { branch: 'Mechanical Engineering', opening: 3500, closing: 6500 }
      ],

      st: [
        { branch: 'Computer Science and Engineering', opening: 50, closing: 250 },
        { branch: 'Artificial Intelligence', opening: 200, closing: 500 },
        { branch: 'Information Technology', opening: 250, closing: 650 },
        { branch: 'Electronics and Communication Engineering', opening: 500, closing: 1000 },
        { branch: 'Electrical and Electronics Engineering', opening: 800, closing: 1600 },
        { branch: 'Mechanical Engineering', opening: 1500, closing: 3000 }
      ],

      ews: [
        { branch: 'Computer Science and Engineering', opening: 150, closing: 600 },
        { branch: 'Artificial Intelligence', opening: 600, closing: 1200 },
        { branch: 'Information Technology', opening: 700, closing: 1500 },
        { branch: 'Electronics and Communication Engineering', opening: 1200, closing: 2400 },
        { branch: 'Electrical and Electronics Engineering', opening: 2200, closing: 4000 },
        { branch: 'Mechanical Engineering', opening: 4000, closing: 7000 }
      ]

    },

    fees: [
      { branch: 'Computer Science and Engineering', cost: '₹2.2–2.5 Lakh / year' },
      { branch: 'Information Technology', cost: '₹2.2–2.5 Lakh / year' },
      { branch: 'Artificial Intelligence', cost: '₹2.2–2.5 Lakh / year' },
      { branch: 'Electronics and Communication Engineering', cost: '₹2.2–2.5 Lakh / year' },
      { branch: 'Electrical and Electronics Engineering', cost: '₹2.2–2.5 Lakh / year' },
      { branch: 'Mechanical Engineering', cost: '₹2.2–2.5 Lakh / year' }
    ],

    hostel: {
      admission: '₹15,000–₹25,000 estimated',
      monthlySeatRent: '₹1,500–₹3,000',
      electricity: '₹500–₹1,000 / month',
      accommodation: '₹40,000–₹70,000 / year',
      mess: '₹4,000–₹5,500 / month'
    },

    placement: {
      engineeringMedian: '₹14–16 LPA estimated',
      studentsPlaced: '1,000+',
      csePlacement: '90%+ estimated',
      cseAverage: '₹20–25 LPA estimated',
      cseHighest: '₹50+ LPA estimated'
    }
  },


  /* ================================================= */
  /* 4. NIT WARANGAL */
  /* ================================================= */

  {
    id: 4,
    rank: 4,

    name:
      'National Institute of Technology Warangal',

    location:
      'Warangal, Telangana',

    image:
      '/JEEMain/nit-warangal.jpg',

    category:
      'Institute of National Importance · NIT',

    foundation:
      '1959',

    historicalOrigin:
      'Formerly Regional Engineering College Warangal',

    branches: [
      'Computer Science and Engineering',
      'Computer Science and Information Security',
      'Artificial Intelligence and Data Science',
      'Electronics and Communication Engineering',
      'Electrical and Electronics Engineering',
      'Mechanical Engineering',
      'Civil Engineering',
      'Chemical Engineering',
      'Metallurgical and Materials Engineering'
    ],

    cutoffs: {

      open: [
        { branch: 'Computer Science and Engineering', opening: 1521, closing: 2409 },
        { branch: 'Computer Science and Information Security', opening: 2200, closing: 4000 },
        { branch: 'Artificial Intelligence and Data Science', opening: 2500, closing: 4500 },
        { branch: 'Electronics and Communication Engineering', opening: 4000, closing: 5100 },
        { branch: 'Electrical and Electronics Engineering', opening: 5000, closing: 8500 },
        { branch: 'Mechanical Engineering', opening: 8500, closing: 15000 },
        { branch: 'Civil Engineering', opening: 15000, closing: 24000 }
      ],

      obcA: [
        { branch: 'Computer Science and Engineering', opening: 700, closing: 1500 },
        { branch: 'Computer Science and Information Security', opening: 1200, closing: 2500 },
        { branch: 'Artificial Intelligence and Data Science', opening: 1400, closing: 2800 },
        { branch: 'Electronics and Communication Engineering', opening: 2200, closing: 4000 },
        { branch: 'Electrical and Electronics Engineering', opening: 3500, closing: 6000 },
        { branch: 'Mechanical Engineering', opening: 6000, closing: 10000 }
      ],

      obcB: [
        { branch: 'Computer Science and Engineering', opening: 1200, closing: 2400 },
        { branch: 'Computer Science and Information Security', opening: 2000, closing: 3500 },
        { branch: 'Artificial Intelligence and Data Science', opening: 2200, closing: 4000 },
        { branch: 'Electronics and Communication Engineering', opening: 3500, closing: 5500 },
        { branch: 'Electrical and Electronics Engineering', opening: 5000, closing: 8000 },
        { branch: 'Mechanical Engineering', opening: 8000, closing: 13000 }
      ],

      sc: [
        { branch: 'Computer Science and Engineering', opening: 200, closing: 800 },
        { branch: 'Computer Science and Information Security', opening: 500, closing: 1300 },
        { branch: 'Artificial Intelligence and Data Science', opening: 700, closing: 1500 },
        { branch: 'Electronics and Communication Engineering', opening: 1200, closing: 2300 },
        { branch: 'Electrical and Electronics Engineering', opening: 2200, closing: 4000 },
        { branch: 'Mechanical Engineering', opening: 4000, closing: 7500 }
      ],

      st: [
        { branch: 'Computer Science and Engineering', opening: 50, closing: 250 },
        { branch: 'Computer Science and Information Security', opening: 150, closing: 400 },
        { branch: 'Artificial Intelligence and Data Science', opening: 200, closing: 500 },
        { branch: 'Electronics and Communication Engineering', opening: 400, closing: 900 },
        { branch: 'Electrical and Electronics Engineering', opening: 700, closing: 1400 },
        { branch: 'Mechanical Engineering', opening: 1400, closing: 2800 }
      ],

      ews: [
        { branch: 'Computer Science and Engineering', opening: 200, closing: 800 },
        { branch: 'Computer Science and Information Security', opening: 600, closing: 1200 },
        { branch: 'Artificial Intelligence and Data Science', opening: 700, closing: 1500 },
        { branch: 'Electronics and Communication Engineering', opening: 1300, closing: 2500 },
        { branch: 'Electrical and Electronics Engineering', opening: 2200, closing: 4000 },
        { branch: 'Mechanical Engineering', opening: 4000, closing: 7000 }
      ]

    },

    fees: [
      { branch: 'Computer Science and Engineering', cost: '₹2.2–2.5 Lakh / year' },
      { branch: 'Computer Science and Information Security', cost: '₹2.2–2.5 Lakh / year' },
      { branch: 'Artificial Intelligence and Data Science', cost: '₹2.2–2.5 Lakh / year' },
      { branch: 'Electronics and Communication Engineering', cost: '₹2.2–2.5 Lakh / year' },
      { branch: 'Electrical and Electronics Engineering', cost: '₹2.2–2.5 Lakh / year' },
      { branch: 'Mechanical Engineering', cost: '₹2.2–2.5 Lakh / year' }
    ],

    hostel: {
      admission: '₹15,000–₹25,000 estimated',
      monthlySeatRent: '₹1,500–₹3,000',
      electricity: '₹500–₹1,000 / month',
      accommodation: '₹40,000–₹65,000 / year',
      mess: '₹4,000–₹5,500 / month'
    },

    placement: {
      engineeringMedian: '₹14–16 LPA estimated',
      studentsPlaced: '1,000+',
      csePlacement: '90%+ estimated',
      cseAverage: '₹20–25 LPA estimated',
      cseHighest: '₹50+ LPA estimated'
    }
  },


  /* ================================================= */
  /* 5. NIT CALICUT */
  /* ================================================= */

  {
    id: 5,
    rank: 5,

    name:
      'National Institute of Technology Calicut',

    location:
      'Kozhikode, Kerala',

    image:
      '/JEEMain/nit-calicut.jpg',

    category:
      'Institute of National Importance · NIT',

    foundation:
      '1961',

    historicalOrigin:
      'Regional Engineering College Calicut',

    branches: [
      'Computer Science and Engineering',
      'Electronics and Communication Engineering',
      'Electrical and Electronics Engineering',
      'Mechanical Engineering',
      'Civil Engineering',
      'Chemical Engineering',
      'Biotechnology',
      'Production Engineering',
      'Engineering Physics'
    ],

    cutoffs: {

      open: [
        { branch: 'Computer Science and Engineering', opening: 3651, closing: 5222 },
        { branch: 'Electronics and Communication Engineering', opening: 5500, closing: 9000 },
        { branch: 'Electrical and Electronics Engineering', opening: 8000, closing: 12500 },
        { branch: 'Mechanical Engineering', opening: 12000, closing: 19000 },
        { branch: 'Civil Engineering', opening: 18000, closing: 28000 },
        { branch: 'Chemical Engineering', opening: 16000, closing: 25000 }
      ],

      obcA: [
        { branch: 'Computer Science and Engineering', opening: 1800, closing: 4000 },
        { branch: 'Electronics and Communication Engineering', opening: 3500, closing: 7000 },
        { branch: 'Electrical and Electronics Engineering', opening: 5500, closing: 9000 },
        { branch: 'Mechanical Engineering', opening: 8500, closing: 14000 },
        { branch: 'Civil Engineering', opening: 13000, closing: 21000 }
      ],

      obcB: [
        { branch: 'Computer Science and Engineering', opening: 3000, closing: 6000 },
        { branch: 'Electronics and Communication Engineering', opening: 5500, closing: 9500 },
        { branch: 'Electrical and Electronics Engineering', opening: 7500, closing: 12000 },
        { branch: 'Mechanical Engineering', opening: 11000, closing: 18000 },
        { branch: 'Civil Engineering', opening: 16000, closing: 26000 }
      ],

      sc: [
        { branch: 'Computer Science and Engineering', opening: 700, closing: 2200 },
        { branch: 'Electronics and Communication Engineering', opening: 1800, closing: 4500 },
        { branch: 'Electrical and Electronics Engineering', opening: 3500, closing: 7000 },
        { branch: 'Mechanical Engineering', opening: 6500, closing: 12000 },
        { branch: 'Civil Engineering', opening: 11000, closing: 20000 }
      ],

      st: [
        { branch: 'Computer Science and Engineering', opening: 200, closing: 700 },
        { branch: 'Electronics and Communication Engineering', opening: 600, closing: 1500 },
        { branch: 'Electrical and Electronics Engineering', opening: 1200, closing: 2500 },
        { branch: 'Mechanical Engineering', opening: 2500, closing: 5000 },
        { branch: 'Civil Engineering', opening: 4500, closing: 8500 }
      ],

      ews: [
        { branch: 'Computer Science and Engineering', opening: 700, closing: 1700 },
        { branch: 'Electronics and Communication Engineering', opening: 1800, closing: 4000 },
        { branch: 'Electrical and Electronics Engineering', opening: 3500, closing: 6500 },
        { branch: 'Mechanical Engineering', opening: 6000, closing: 11000 },
        { branch: 'Civil Engineering', opening: 10000, closing: 18000 }
      ]

    },

    fees: [
      { branch: 'Computer Science and Engineering', cost: '₹2.2–2.5 Lakh / year' },
      { branch: 'Electronics and Communication Engineering', cost: '₹2.2–2.5 Lakh / year' },
      { branch: 'Electrical and Electronics Engineering', cost: '₹2.2–2.5 Lakh / year' },
      { branch: 'Mechanical Engineering', cost: '₹2.2–2.5 Lakh / year' },
      { branch: 'Civil Engineering', cost: '₹2.2–2.5 Lakh / year' }
    ],

    hostel: {
      admission: '₹15,000–₹25,000 estimated',
      monthlySeatRent: '₹1,500–₹3,000',
      electricity: '₹500–₹1,000 / month',
      accommodation: '₹40,000–₹65,000 / year',
      mess: '₹4,000–₹5,500 / month'
    },

    placement: {
      engineeringMedian: '₹12–14 LPA estimated',
      studentsPlaced: '900+',
      csePlacement: '90%+ estimated',
      cseAverage: '₹16–20 LPA estimated',
      cseHighest: '₹40+ LPA estimated'
    }
  },


  /* ================================================= */
  /* 6. VNIT NAGPUR */
  /* ================================================= */

  {
    id: 6,
    rank: 6,

    name:
      'Visvesvaraya National Institute of Technology',

    location:
      'Nagpur, Maharashtra',

    image:
      '/JEEMain/vnit-nagpur.jpg',

    category:
      'Institute of National Importance · NIT',

    foundation:
      '1960',

    historicalOrigin:
      'Visvesvaraya Regional College of Engineering',

    branches: [
      'Computer Science and Engineering',
      'Electronics and Communication Engineering',
      'Electrical and Electronics Engineering',
      'Mechanical Engineering',
      'Civil Engineering',
      'Chemical Engineering',
      'Metallurgical and Materials Engineering',
      'Mining Engineering'
    ],

    cutoffs: {

      open: [
        { branch: 'Computer Science and Engineering', opening: 4000, closing: 7500 },
        { branch: 'Electronics and Communication Engineering', opening: 7000, closing: 12000 },
        { branch: 'Electrical and Electronics Engineering', opening: 9500, closing: 16000 },
        { branch: 'Mechanical Engineering', opening: 15000, closing: 25000 },
        { branch: 'Civil Engineering', opening: 22000, closing: 35000 },
        { branch: 'Chemical Engineering', opening: 25000, closing: 38000 }
      ],

      obcA: [
        { branch: 'Computer Science and Engineering', opening: 1800, closing: 4500 },
        { branch: 'Electronics and Communication Engineering', opening: 4000, closing: 7500 },
        { branch: 'Electrical and Electronics Engineering', opening: 6000, closing: 10000 },
        { branch: 'Mechanical Engineering', opening: 9000, closing: 16000 },
        { branch: 'Civil Engineering', opening: 14000, closing: 23000 }
      ],

      obcB: [
        { branch: 'Computer Science and Engineering', opening: 3000, closing: 6500 },
        { branch: 'Electronics and Communication Engineering', opening: 5500, closing: 9500 },
        { branch: 'Electrical and Electronics Engineering', opening: 8000, closing: 13000 },
        { branch: 'Mechanical Engineering', opening: 12000, closing: 20000 },
        { branch: 'Civil Engineering', opening: 18000, closing: 28000 }
      ],

      sc: [
        { branch: 'Computer Science and Engineering', opening: 1000, closing: 3000 },
        { branch: 'Electronics and Communication Engineering', opening: 2500, closing: 6000 },
        { branch: 'Electrical and Electronics Engineering', opening: 4500, closing: 9000 },
        { branch: 'Mechanical Engineering', opening: 8500, closing: 15000 },
        { branch: 'Civil Engineering', opening: 14000, closing: 25000 }
      ],

      st: [
        { branch: 'Computer Science and Engineering', opening: 300, closing: 1000 },
        { branch: 'Electronics and Communication Engineering', opening: 800, closing: 2000 },
        { branch: 'Electrical and Electronics Engineering', opening: 1500, closing: 3500 },
        { branch: 'Mechanical Engineering', opening: 3000, closing: 6500 },
        { branch: 'Civil Engineering', opening: 6000, closing: 11000 }
      ],

      ews: [
        { branch: 'Computer Science and Engineering', opening: 700, closing: 2000 },
        { branch: 'Electronics and Communication Engineering', opening: 2000, closing: 4500 },
        { branch: 'Electrical and Electronics Engineering', opening: 3500, closing: 7000 },
        { branch: 'Mechanical Engineering', opening: 6500, closing: 12000 },
        { branch: 'Civil Engineering', opening: 11000, closing: 20000 }
      ]

    },

    fees: [
      { branch: 'Computer Science and Engineering', cost: '₹2.2–2.5 Lakh / year' },
      { branch: 'Electronics and Communication Engineering', cost: '₹2.2–2.5 Lakh / year' },
      { branch: 'Electrical and Electronics Engineering', cost: '₹2.2–2.5 Lakh / year' },
      { branch: 'Mechanical Engineering', cost: '₹2.2–2.5 Lakh / year' },
      { branch: 'Civil Engineering', cost: '₹2.2–2.5 Lakh / year' }
    ],

    hostel: {
      admission: '₹15,000–₹25,000 estimated',
      monthlySeatRent: '₹1,500–₹3,000',
      electricity: '₹500–₹1,000 / month',
      accommodation: '₹40,000–₹65,000 / year',
      mess: '₹4,000–₹5,500 / month'
    },

    placement: {
      engineeringMedian: '₹10–13 LPA estimated',
      studentsPlaced: '800+',
      csePlacement: '90%+ estimated',
      cseAverage: '₹15–18 LPA estimated',
      cseHighest: '₹35+ LPA estimated'
    }
  },


  /* ================================================= */
  /* 7. NIT DURGAPUR */
  /* ================================================= */

  {
    id: 7,
    rank: 7,

    name:
      'National Institute of Technology Durgapur',

    location:
      'Durgapur, West Bengal',

    image:
      '/JEEMain/nit-durgapur.jpg',

    category:
      'Institute of National Importance · NIT',

    foundation:
      '1960',

    historicalOrigin:
      'Regional Engineering College Durgapur',

    branches: [
      'Computer Science and Engineering',
      'Electronics and Communication Engineering',
      'Electrical Engineering',
      'Mechanical Engineering',
      'Civil Engineering',
      'Chemical Engineering',
      'Metallurgical and Materials Engineering',
      'Biotechnology',
      'Information Technology'
    ],

    cutoffs: {

      open: [
        { branch: 'Computer Science and Engineering', opening: 6000, closing: 7500 },
        { branch: 'Information Technology', opening: 7000, closing: 10000 },
        { branch: 'Electronics and Communication Engineering', opening: 9000, closing: 16000 },
        { branch: 'Electrical Engineering', opening: 14000, closing: 22000 },
        { branch: 'Mechanical Engineering', opening: 22000, closing: 30000 },
        { branch: 'Civil Engineering', opening: 28000, closing: 40000 },
        { branch: 'Chemical Engineering', opening: 25000, closing: 38000 }
      ],

      obcA: [
        { branch: 'Computer Science and Engineering', opening: 2500, closing: 5000 },
        { branch: 'Information Technology', opening: 3500, closing: 6500 },
        { branch: 'Electronics and Communication Engineering', opening: 5000, closing: 10000 },
        { branch: 'Electrical Engineering', opening: 8000, closing: 14000 },
        { branch: 'Mechanical Engineering', opening: 13000, closing: 20000 },
        { branch: 'Civil Engineering', opening: 18000, closing: 28000 }
      ],

      obcB: [
        { branch: 'Computer Science and Engineering', opening: 4000, closing: 7000 },
        { branch: 'Information Technology', opening: 5000, closing: 8500 },
        { branch: 'Electronics and Communication Engineering', opening: 7500, closing: 13000 },
        { branch: 'Electrical Engineering', opening: 11000, closing: 18000 },
        { branch: 'Mechanical Engineering', opening: 17000, closing: 26000 },
        { branch: 'Civil Engineering', opening: 24000, closing: 35000 }
      ],

      sc: [
        { branch: 'Computer Science and Engineering', opening: 1000, closing: 3000 },
        { branch: 'Information Technology', opening: 1500, closing: 4000 },
        { branch: 'Electronics and Communication Engineering', opening: 3000, closing: 6500 },
        { branch: 'Electrical Engineering', opening: 5500, closing: 10000 },
        { branch: 'Mechanical Engineering', opening: 9000, closing: 16000 },
        { branch: 'Civil Engineering', opening: 14000, closing: 22000 }
      ],

      st: [
        { branch: 'Computer Science and Engineering', opening: 300, closing: 900 },
        { branch: 'Information Technology', opening: 500, closing: 1300 },
        { branch: 'Electronics and Communication Engineering', opening: 1000, closing: 2200 },
        { branch: 'Electrical Engineering', opening: 1800, closing: 3500 },
        { branch: 'Mechanical Engineering', opening: 3200, closing: 6000 },
        { branch: 'Civil Engineering', opening: 5500, closing: 10000 }
      ],

      ews: [
        { branch: 'Computer Science and Engineering', opening: 900, closing: 2200 },
        { branch: 'Information Technology', opening: 1200, closing: 3000 },
        { branch: 'Electronics and Communication Engineering', opening: 2200, closing: 5000 },
        { branch: 'Electrical Engineering', opening: 4500, closing: 8000 },
        { branch: 'Mechanical Engineering', opening: 8000, closing: 14000 },
        { branch: 'Civil Engineering', opening: 12000, closing: 20000 }
      ]

    },

    fees: [
      { branch: 'Computer Science and Engineering', cost: '₹2.1–2.4 Lakh / year' },
      { branch: 'Information Technology', cost: '₹2.1–2.4 Lakh / year' },
      { branch: 'Electronics and Communication Engineering', cost: '₹2.1–2.4 Lakh / year' },
      { branch: 'Electrical Engineering', cost: '₹2.1–2.4 Lakh / year' },
      { branch: 'Mechanical Engineering', cost: '₹2.1–2.4 Lakh / year' },
      { branch: 'Civil Engineering', cost: '₹2.1–2.4 Lakh / year' }
    ],

    hostel: {
      admission: '₹10,000–₹20,000 estimated',
      monthlySeatRent: '₹1,000–₹2,500',
      electricity: '₹400–₹800 / month',
      accommodation: '₹30,000–₹55,000 / year',
      mess: '₹3,500–₹5,000 / month'
    },

    placement: {
      engineeringMedian: '₹8–10 LPA estimated',
      studentsPlaced: '700+',
      csePlacement: '85%+ estimated',
      cseAverage: '₹12–16 LPA estimated',
      cseHighest: '₹40+ LPA estimated'
    }
  },


  /* ================================================= */
  /* 8–20 */
  /* ================================================= */

  {
    id: 8,
    rank: 8,
    name: 'National Institute of Technology Silchar',
    location: 'Silchar, Assam',
    image: '/JEEMain/nit-silchar.jpg',
    category: 'Institute of National Importance · NIT',
    foundation: '1967',
    historicalOrigin: 'Regional Engineering College Silchar',
    branches: [
      'Computer Science and Engineering',
      'Electronics and Communication Engineering',
      'Electrical Engineering',
      'Mechanical Engineering',
      'Civil Engineering',
      'Electronics and Instrumentation Engineering'
    ],
    cutoffs: {
      open: [
        { branch: 'Computer Science and Engineering', opening: 8010, closing: 12665 },
        { branch: 'Electronics and Communication Engineering', opening: 12000, closing: 20000 },
        { branch: 'Electrical Engineering', opening: 18000, closing: 28000 },
        { branch: 'Mechanical Engineering', opening: 28000, closing: 40000 },
        { branch: 'Civil Engineering', opening: 35000, closing: 50000 }
      ],
      obcA: [
        { branch: 'Computer Science and Engineering', opening: 3000, closing: 7000 },
        { branch: 'Electronics and Communication Engineering', opening: 6000, closing: 12000 },
        { branch: 'Electrical Engineering', opening: 10000, closing: 18000 },
        { branch: 'Mechanical Engineering', opening: 18000, closing: 28000 },
        { branch: 'Civil Engineering', opening: 25000, closing: 38000 }
      ],
      obcB: [
        { branch: 'Computer Science and Engineering', opening: 5000, closing: 10000 },
        { branch: 'Electronics and Communication Engineering', opening: 9000, closing: 16000 },
        { branch: 'Electrical Engineering', opening: 15000, closing: 23000 },
        { branch: 'Mechanical Engineering', opening: 23000, closing: 35000 },
        { branch: 'Civil Engineering', opening: 32000, closing: 45000 }
      ],
      sc: [
        { branch: 'Computer Science and Engineering', opening: 1500, closing: 4500 },
        { branch: 'Electronics and Communication Engineering', opening: 3500, closing: 9000 },
        { branch: 'Electrical Engineering', opening: 7000, closing: 14000 },
        { branch: 'Mechanical Engineering', opening: 13000, closing: 23000 },
        { branch: 'Civil Engineering', opening: 22000, closing: 35000 }
      ],
      st: [
        { branch: 'Computer Science and Engineering', opening: 500, closing: 1500 },
        { branch: 'Electronics and Communication Engineering', opening: 1200, closing: 3000 },
        { branch: 'Electrical Engineering', opening: 2500, closing: 5000 },
        { branch: 'Mechanical Engineering', opening: 5000, closing: 9000 },
        { branch: 'Civil Engineering', opening: 8500, closing: 15000 }
      ],
      ews: [
        { branch: 'Computer Science and Engineering', opening: 1500, closing: 4000 },
        { branch: 'Electronics and Communication Engineering', opening: 3500, closing: 8000 },
        { branch: 'Electrical Engineering', opening: 6500, closing: 12000 },
        { branch: 'Mechanical Engineering', opening: 12000, closing: 20000 },
        { branch: 'Civil Engineering', opening: 18000, closing: 30000 }
      ]
    },
    fees: [
      { branch: 'Computer Science and Engineering', cost: '₹2.0–2.4 Lakh / year' },
      { branch: 'Electronics and Communication Engineering', cost: '₹2.0–2.4 Lakh / year' },
      { branch: 'Electrical Engineering', cost: '₹2.0–2.4 Lakh / year' },
      { branch: 'Mechanical Engineering', cost: '₹2.0–2.4 Lakh / year' },
      { branch: 'Civil Engineering', cost: '₹2.0–2.4 Lakh / year' }
    ],
    hostel: {
      admission: '₹10,000–₹20,000 estimated',
      monthlySeatRent: '₹1,000–₹2,500',
      electricity: '₹400–₹800 / month',
      accommodation: '₹30,000–₹55,000 / year',
      mess: '₹3,500–₹5,000 / month'
    },
    placement: {
      engineeringMedian: '₹7–10 LPA estimated',
      studentsPlaced: '600+',
      csePlacement: '85%+ estimated',
      cseAverage: '₹12–15 LPA estimated',
      cseHighest: '₹30+ LPA estimated'
    }
  },


  {
    id: 9,
    rank: 9,
    name: 'Malaviya National Institute of Technology Jaipur',
    location: 'Jaipur, Rajasthan',
    image: '/JEEMain/mnit-jaipur.jpg',
    category: 'Institute of National Importance · NIT',
    foundation: '1963',
    historicalOrigin: 'Malaviya Regional Engineering College',
    branches: [
      'Computer Science and Engineering',
      'Artificial Intelligence and Data Engineering',
      'Electronics and Communication Engineering',
      'Electrical Engineering',
      'Mechanical Engineering',
      'Civil Engineering',
      'Chemical Engineering',
      'Metallurgical and Materials Engineering'
    ],
    cutoffs: {
      open: [
        { branch: 'Computer Science and Engineering', opening: 3027, closing: 5601 },
        { branch: 'Artificial Intelligence and Data Engineering', opening: 4000, closing: 7000 },
        { branch: 'Electronics and Communication Engineering', opening: 6000, closing: 11000 },
        { branch: 'Electrical Engineering', opening: 9000, closing: 15000 },
        { branch: 'Mechanical Engineering', opening: 14000, closing: 22000 },
        { branch: 'Civil Engineering', opening: 20000, closing: 32000 }
      ],
      obcA: [
        { branch: 'Computer Science and Engineering', opening: 1200, closing: 3000 },
        { branch: 'Artificial Intelligence and Data Engineering', opening: 1800, closing: 4000 },
        { branch: 'Electronics and Communication Engineering', opening: 3000, closing: 6500 },
        { branch: 'Electrical Engineering', opening: 5000, closing: 9000 },
        { branch: 'Mechanical Engineering', opening: 8500, closing: 14000 },
        { branch: 'Civil Engineering', opening: 13000, closing: 21000 }
      ],
      obcB: [
        { branch: 'Computer Science and Engineering', opening: 2000, closing: 4500 },
        { branch: 'Artificial Intelligence and Data Engineering', opening: 2800, closing: 5500 },
        { branch: 'Electronics and Communication Engineering', opening: 4500, closing: 8500 },
        { branch: 'Electrical Engineering', opening: 7000, closing: 12000 },
        { branch: 'Mechanical Engineering', opening: 11000, closing: 18000 },
        { branch: 'Civil Engineering', opening: 17000, closing: 26000 }
      ],
      sc: [
        { branch: 'Computer Science and Engineering', opening: 600, closing: 2000 },
        { branch: 'Artificial Intelligence and Data Engineering', opening: 1000, closing: 2800 },
        { branch: 'Electronics and Communication Engineering', opening: 1800, closing: 4500 },
        { branch: 'Electrical Engineering', opening: 3500, closing: 7000 },
        { branch: 'Mechanical Engineering', opening: 6500, closing: 12000 },
        { branch: 'Civil Engineering', opening: 11000, closing: 18000 }
      ],
      st: [
        { branch: 'Computer Science and Engineering', opening: 200, closing: 700 },
        { branch: 'Artificial Intelligence and Data Engineering', opening: 400, closing: 1000 },
        { branch: 'Electronics and Communication Engineering', opening: 700, closing: 1800 },
        { branch: 'Electrical Engineering', opening: 1500, closing: 3000 },
        { branch: 'Mechanical Engineering', opening: 3000, closing: 6000 },
        { branch: 'Civil Engineering', opening: 5500, closing: 9500 }
      ],
      ews: [
        { branch: 'Computer Science and Engineering', opening: 600, closing: 1800 },
        { branch: 'Artificial Intelligence and Data Engineering', opening: 1000, closing: 2500 },
        { branch: 'Electronics and Communication Engineering', opening: 1800, closing: 4000 },
        { branch: 'Electrical Engineering', opening: 3000, closing: 6000 },
        { branch: 'Mechanical Engineering', opening: 6000, closing: 10000 },
        { branch: 'Civil Engineering', opening: 9500, closing: 16000 }
      ]
    },
    fees: [
      { branch: 'Computer Science and Engineering', cost: '₹2.2–2.5 Lakh / year' },
      { branch: 'Artificial Intelligence and Data Engineering', cost: '₹2.2–2.5 Lakh / year' },
      { branch: 'Electronics and Communication Engineering', cost: '₹2.2–2.5 Lakh / year' },
      { branch: 'Electrical Engineering', cost: '₹2.2–2.5 Lakh / year' },
      { branch: 'Mechanical Engineering', cost: '₹2.2–2.5 Lakh / year' },
      { branch: 'Civil Engineering', cost: '₹2.2–2.5 Lakh / year' }
    ],
    hostel: {
      admission: '₹12,000–₹22,000 estimated',
      monthlySeatRent: '₹1,000–₹2,500',
      electricity: '₹400–₹800 / month',
      accommodation: '₹35,000–₹60,000 / year',
      mess: '₹3,500–₹5,000 / month'
    },
    placement: {
      engineeringMedian: '₹10–13 LPA estimated',
      studentsPlaced: '800+',
      csePlacement: '90%+ estimated',
      cseAverage: '₹16–20 LPA estimated',
      cseHighest: '₹40+ LPA estimated'
    }
  },


  {
    id: 10,
    rank: 10,
    name: 'National Institute of Technology Kurukshetra',
    location: 'Kurukshetra, Haryana',
    image: '/JEEMain/nit-kurukshetra.jpg',
    category: 'Institute of National Importance · NIT',
    foundation: '1963',
    historicalOrigin: 'Regional Engineering College Kurukshetra',
    branches: [
      'Computer Engineering',
      'Information Technology',
      'Electronics and Communication Engineering',
      'Electrical Engineering',
      'Mechanical Engineering',
      'Civil Engineering',
      'Industrial Engineering and Management'
    ],
    cutoffs: {
      open: [
        { branch: 'Computer Engineering', opening: 5000, closing: 9000 },
        { branch: 'Information Technology', opening: 7000, closing: 12000 },
        { branch: 'Electronics and Communication Engineering', opening: 10000, closing: 17000 },
        { branch: 'Electrical Engineering', opening: 15000, closing: 23000 },
        { branch: 'Mechanical Engineering', opening: 22000, closing: 32000 },
        { branch: 'Civil Engineering', opening: 30000, closing: 45000 }
      ],
      obcA: [
        { branch: 'Computer Engineering', opening: 2000, closing: 5000 },
        { branch: 'Information Technology', opening: 3500, closing: 7500 },
        { branch: 'Electronics and Communication Engineering', opening: 5500, closing: 10000 },
        { branch: 'Electrical Engineering', opening: 8500, closing: 14000 },
        { branch: 'Mechanical Engineering', opening: 13000, closing: 20000 },
        { branch: 'Civil Engineering', opening: 19000, closing: 30000 }
      ],
      obcB: [
        { branch: 'Computer Engineering', opening: 3500, closing: 7000 },
        { branch: 'Information Technology', opening: 5000, closing: 9500 },
        { branch: 'Electronics and Communication Engineering', opening: 8000, closing: 14000 },
        { branch: 'Electrical Engineering', opening: 12000, closing: 19000 },
        { branch: 'Mechanical Engineering', opening: 18000, closing: 28000 },
        { branch: 'Civil Engineering', opening: 26000, closing: 40000 }
      ],
      sc: [
        { branch: 'Computer Engineering', opening: 800, closing: 2500 },
        { branch: 'Information Technology', opening: 1500, closing: 4000 },
        { branch: 'Electronics and Communication Engineering', opening: 3000, closing: 6500 },
        { branch: 'Electrical Engineering', opening: 5500, closing: 10000 },
        { branch: 'Mechanical Engineering', opening: 9000, closing: 16000 },
        { branch: 'Civil Engineering', opening: 14000, closing: 24000 }
      ],
      st: [
        { branch: 'Computer Engineering', opening: 250, closing: 800 },
        { branch: 'Information Technology', opening: 500, closing: 1300 },
        { branch: 'Electronics and Communication Engineering', opening: 1000, closing: 2200 },
        { branch: 'Electrical Engineering', opening: 1800, closing: 3500 },
        { branch: 'Mechanical Engineering', opening: 3500, closing: 7000 },
        { branch: 'Civil Engineering', opening: 6500, closing: 11000 }
      ],
      ews: [
        { branch: 'Computer Engineering', opening: 700, closing: 1800 },
        { branch: 'Information Technology', opening: 1200, closing: 3000 },
        { branch: 'Electronics and Communication Engineering', opening: 2200, closing: 5000 },
        { branch: 'Electrical Engineering', opening: 4500, closing: 8000 },
        { branch: 'Mechanical Engineering', opening: 8000, closing: 14000 },
        { branch: 'Civil Engineering', opening: 13000, closing: 22000 }
      ]
    },
    fees: [
      { branch: 'Computer Engineering', cost: '₹2.1–2.4 Lakh / year' },
      { branch: 'Information Technology', cost: '₹2.1–2.4 Lakh / year' },
      { branch: 'Electronics and Communication Engineering', cost: '₹2.1–2.4 Lakh / year' },
      { branch: 'Electrical Engineering', cost: '₹2.1–2.4 Lakh / year' },
      { branch: 'Mechanical Engineering', cost: '₹2.1–2.4 Lakh / year' },
      { branch: 'Civil Engineering', cost: '₹2.1–2.4 Lakh / year' }
    ],
    hostel: {
      admission: '₹10,000–₹20,000 estimated',
      monthlySeatRent: '₹1,000–₹2,500',
      electricity: '₹400–₹800 / month',
      accommodation: '₹30,000–₹55,000 / year',
      mess: '₹3,500–₹5,000 / month'
    },
    placement: {
      engineeringMedian: '₹9–12 LPA estimated',
      studentsPlaced: '700+',
      csePlacement: '90%+ estimated',
      cseAverage: '₹14–18 LPA estimated',
      cseHighest: '₹35+ LPA estimated'
    }
  },


  {
    id: 11,
    rank: 11,
    name: 'National Institute of Technology Jamshedpur',
    location: 'Jamshedpur, Jharkhand',
    image: '/JEEMain/nit-jamshedpur.jpg',
    category: 'Institute of National Importance · NIT',
    foundation: '1960',
    historicalOrigin: 'Regional Institute of Technology Jamshedpur',
    branches: [
      'Computer Science and Engineering',
      'Information Technology',
      'Electronics and Communication Engineering',
      'Electrical Engineering',
      'Mechanical Engineering',
      'Civil Engineering',
      'Production and Industrial Engineering',
      'Metallurgical and Materials Engineering'
    ],
    cutoffs: {
      open: [
        { branch: 'Computer Science and Engineering', opening: 7000, closing: 11000 },
        { branch: 'Information Technology', opening: 9000, closing: 14000 },
        { branch: 'Electronics and Communication Engineering', opening: 12000, closing: 19000 },
        { branch: 'Electrical Engineering', opening: 17000, closing: 26000 },
        { branch: 'Mechanical Engineering', opening: 25000, closing: 36000 },
        { branch: 'Civil Engineering', opening: 35000, closing: 50000 }
      ],
      obcA: [
        { branch: 'Computer Science and Engineering', opening: 3000, closing: 6500 },
        { branch: 'Information Technology', opening: 4500, closing: 8500 },
        { branch: 'Electronics and Communication Engineering', opening: 7000, closing: 12000 },
        { branch: 'Electrical Engineering', opening: 10000, closing: 17000 },
        { branch: 'Mechanical Engineering', opening: 16000, closing: 25000 },
        { branch: 'Civil Engineering', opening: 23000, closing: 35000 }
      ],
      obcB: [
        { branch: 'Computer Science and Engineering', opening: 5000, closing: 9000 },
        { branch: 'Information Technology', opening: 6500, closing: 11000 },
        { branch: 'Electronics and Communication Engineering', opening: 10000, closing: 16000 },
        { branch: 'Electrical Engineering', opening: 14000, closing: 22000 },
        { branch: 'Mechanical Engineering', opening: 21000, closing: 32000 },
        { branch: 'Civil Engineering', opening: 30000, closing: 45000 }
      ],
      sc: [
        { branch: 'Computer Science and Engineering', opening: 1200, closing: 3500 },
        { branch: 'Information Technology', opening: 2000, closing: 5000 },
        { branch: 'Electronics and Communication Engineering', opening: 3500, closing: 8000 },
        { branch: 'Electrical Engineering', opening: 6500, closing: 12000 },
        { branch: 'Mechanical Engineering', opening: 11000, closing: 19000 },
        { branch: 'Civil Engineering', opening: 18000, closing: 28000 }
      ],
      st: [
        { branch: 'Computer Science and Engineering', opening: 400, closing: 1200 },
        { branch: 'Information Technology', opening: 700, closing: 1800 },
        { branch: 'Electronics and Communication Engineering', opening: 1200, closing: 2800 },
        { branch: 'Electrical Engineering', opening: 2200, closing: 4500 },
        { branch: 'Mechanical Engineering', opening: 4500, closing: 8500 },
        { branch: 'Civil Engineering', opening: 8000, closing: 14000 }
      ],
      ews: [
        { branch: 'Computer Science and Engineering', opening: 1000, closing: 2500 },
        { branch: 'Information Technology', opening: 1600, closing: 4000 },
        { branch: 'Electronics and Communication Engineering', opening: 3000, closing: 6500 },
        { branch: 'Electrical Engineering', opening: 5500, closing: 10000 },
        { branch: 'Mechanical Engineering', opening: 9500, closing: 16000 },
        { branch: 'Civil Engineering', opening: 15000, closing: 24000 }
      ]
    },
    fees: [
      { branch: 'Computer Science and Engineering', cost: '₹2.0–2.4 Lakh / year' },
      { branch: 'Information Technology', cost: '₹2.0–2.4 Lakh / year' },
      { branch: 'Electronics and Communication Engineering', cost: '₹2.0–2.4 Lakh / year' },
      { branch: 'Electrical Engineering', cost: '₹2.0–2.4 Lakh / year' },
      { branch: 'Mechanical Engineering', cost: '₹2.0–2.4 Lakh / year' },
      { branch: 'Civil Engineering', cost: '₹2.0–2.4 Lakh / year' }
    ],
    hostel: {
      admission: '₹10,000–₹20,000 estimated',
      monthlySeatRent: '₹1,000–₹2,500',
      electricity: '₹400–₹800 / month',
      accommodation: '₹30,000–₹55,000 / year',
      mess: '₹3,500–₹5,000 / month'
    },
    placement: {
      engineeringMedian: '₹8–11 LPA estimated',
      studentsPlaced: '700+',
      csePlacement: '85%+ estimated',
      cseAverage: '₹13–17 LPA estimated',
      cseHighest: '₹35+ LPA estimated'
    }
  },


  {
    id: 12,
    rank: 12,
    name: 'National Institute of Technology Raipur',
    location: 'Raipur, Chhattisgarh',
    image: '/JEEMain/nit-raipur.jpg',
    category: 'Institute of National Importance · NIT',
    foundation: '1956',
    historicalOrigin: 'Government Engineering College Raipur',
    branches: [
      'Computer Science and Engineering',
      'Information Technology',
      'Electronics and Telecommunication Engineering',
      'Electrical Engineering',
      'Mechanical Engineering',
      'Civil Engineering',
      'Mining Engineering',
      'Biomedical Engineering'
    ],
    cutoffs: {
      open: [
        { branch: 'Computer Science and Engineering', opening: 8000, closing: 14000 },
        { branch: 'Information Technology', opening: 11000, closing: 18000 },
        { branch: 'Electronics and Telecommunication Engineering', opening: 15000, closing: 24000 },
        { branch: 'Electrical Engineering', opening: 22000, closing: 33000 },
        { branch: 'Mechanical Engineering', opening: 32000, closing: 45000 },
        { branch: 'Civil Engineering', opening: 40000, closing: 60000 }
      ],
      obcA: [
        { branch: 'Computer Science and Engineering', opening: 3500, closing: 7500 },
        { branch: 'Information Technology', opening: 5500, closing: 10000 },
        { branch: 'Electronics and Telecommunication Engineering', opening: 8500, closing: 15000 },
        { branch: 'Electrical Engineering', opening: 13000, closing: 21000 },
        { branch: 'Mechanical Engineering', opening: 20000, closing: 30000 },
        { branch: 'Civil Engineering', opening: 28000, closing: 42000 }
      ],
      obcB: [
        { branch: 'Computer Science and Engineering', opening: 5500, closing: 11000 },
        { branch: 'Information Technology', opening: 8000, closing: 14000 },
        { branch: 'Electronics and Telecommunication Engineering', opening: 12000, closing: 20000 },
        { branch: 'Electrical Engineering', opening: 18000, closing: 28000 },
        { branch: 'Mechanical Engineering', opening: 27000, closing: 40000 },
        { branch: 'Civil Engineering', opening: 38000, closing: 55000 }
      ],
      sc: [
        { branch: 'Computer Science and Engineering', opening: 1500, closing: 4500 },
        { branch: 'Information Technology', opening: 2500, closing: 6500 },
        { branch: 'Electronics and Telecommunication Engineering', opening: 4500, closing: 10000 },
        { branch: 'Electrical Engineering', opening: 8000, closing: 15000 },
        { branch: 'Mechanical Engineering', opening: 14000, closing: 23000 },
        { branch: 'Civil Engineering', opening: 22000, closing: 35000 }
      ],
      st: [
        { branch: 'Computer Science and Engineering', opening: 500, closing: 1500 },
        { branch: 'Information Technology', opening: 800, closing: 2200 },
        { branch: 'Electronics and Telecommunication Engineering', opening: 1500, closing: 3500 },
        { branch: 'Electrical Engineering', opening: 3000, closing: 6000 },
        { branch: 'Mechanical Engineering', opening: 6000, closing: 10000 },
        { branch: 'Civil Engineering', opening: 9500, closing: 16000 }
      ],
      ews: [
        { branch: 'Computer Science and Engineering', opening: 1200, closing: 3200 },
        { branch: 'Information Technology', opening: 2000, closing: 5000 },
        { branch: 'Electronics and Telecommunication Engineering', opening: 3500, closing: 7500 },
        { branch: 'Electrical Engineering', opening: 6500, closing: 12000 },
        { branch: 'Mechanical Engineering', opening: 12000, closing: 20000 },
        { branch: 'Civil Engineering', opening: 19000, closing: 30000 }
      ]
    },
    fees: [
      { branch: 'Computer Science and Engineering', cost: '₹1.9–2.3 Lakh / year' },
      { branch: 'Information Technology', cost: '₹1.9–2.3 Lakh / year' },
      { branch: 'Electronics and Telecommunication Engineering', cost: '₹1.9–2.3 Lakh / year' },
      { branch: 'Electrical Engineering', cost: '₹1.9–2.3 Lakh / year' },
      { branch: 'Mechanical Engineering', cost: '₹1.9–2.3 Lakh / year' },
      { branch: 'Civil Engineering', cost: '₹1.9–2.3 Lakh / year' }
    ],
    hostel: {
      admission: '₹10,000–₹18,000 estimated',
      monthlySeatRent: '₹800–₹2,000',
      electricity: '₹400–₹800 / month',
      accommodation: '₹25,000–₹50,000 / year',
      mess: '₹3,500–₹5,000 / month'
    },
    placement: {
      engineeringMedian: '₹7–10 LPA estimated',
      studentsPlaced: '600+',
      csePlacement: '85%+ estimated',
      cseAverage: '₹11–15 LPA estimated',
      cseHighest: '₹30+ LPA estimated'
    }
  },


  {
    id: 13,
    rank: 13,
    name: 'National Institute of Technology Hamirpur',
    location: 'Hamirpur, Himachal Pradesh',
    image: '/JEEMain/nit-hamirpur.jpg',
    category: 'Institute of National Importance · NIT',
    foundation: '1986',
    historicalOrigin: 'Regional Engineering College Hamirpur',
    branches: [
      'Computer Science and Engineering',
      'Electronics and Communication Engineering',
      'Electrical Engineering',
      'Mechanical Engineering',
      'Civil Engineering',
      'Chemical Engineering',
      'Architecture',
      'Mathematics and Computing'
    ],
    cutoffs: {
      open: [
        { branch: 'Computer Science and Engineering', opening: 9000, closing: 16000 },
        { branch: 'Mathematics and Computing', opening: 12000, closing: 20000 },
        { branch: 'Electronics and Communication Engineering', opening: 16000, closing: 26000 },
        { branch: 'Electrical Engineering', opening: 24000, closing: 35000 },
        { branch: 'Mechanical Engineering', opening: 35000, closing: 50000 },
        { branch: 'Civil Engineering', opening: 45000, closing: 65000 }
      ],
      obcA: [
        { branch: 'Computer Science and Engineering', opening: 4000, closing: 8500 },
        { branch: 'Mathematics and Computing', opening: 6000, closing: 11000 },
        { branch: 'Electronics and Communication Engineering', opening: 9000, closing: 16000 },
        { branch: 'Electrical Engineering', opening: 14000, closing: 23000 },
        { branch: 'Mechanical Engineering', opening: 22000, closing: 34000 },
        { branch: 'Civil Engineering', opening: 30000, closing: 45000 }
      ],
      obcB: [
        { branch: 'Computer Science and Engineering', opening: 6500, closing: 12000 },
        { branch: 'Mathematics and Computing', opening: 8500, closing: 16000 },
        { branch: 'Electronics and Communication Engineering', opening: 13000, closing: 21000 },
        { branch: 'Electrical Engineering', opening: 19000, closing: 29000 },
        { branch: 'Mechanical Engineering', opening: 28000, closing: 42000 },
        { branch: 'Civil Engineering', opening: 38000, closing: 55000 }
      ],
      sc: [
        { branch: 'Computer Science and Engineering', opening: 1800, closing: 5500 },
        { branch: 'Mathematics and Computing', opening: 3000, closing: 7500 },
        { branch: 'Electronics and Communication Engineering', opening: 5500, closing: 11000 },
        { branch: 'Electrical Engineering', opening: 9000, closing: 17000 },
        { branch: 'Mechanical Engineering', opening: 16000, closing: 26000 },
        { branch: 'Civil Engineering', opening: 24000, closing: 38000 }
      ],
      st: [
        { branch: 'Computer Science and Engineering', opening: 600, closing: 1800 },
        { branch: 'Mathematics and Computing', opening: 1000, closing: 3000 },
        { branch: 'Electronics and Communication Engineering', opening: 1800, closing: 4000 },
        { branch: 'Electrical Engineering', opening: 3500, closing: 7000 },
        { branch: 'Mechanical Engineering', opening: 7000, closing: 12000 },
        { branch: 'Civil Engineering', opening: 11000, closing: 18000 }
      ],
      ews: [
        { branch: 'Computer Science and Engineering', opening: 1500, closing: 4000 },
        { branch: 'Mathematics and Computing', opening: 2500, closing: 5500 },
        { branch: 'Electronics and Communication Engineering', opening: 4500, closing: 8500 },
        { branch: 'Electrical Engineering', opening: 7500, closing: 14000 },
        { branch: 'Mechanical Engineering', opening: 13000, closing: 22000 },
        { branch: 'Civil Engineering', opening: 20000, closing: 32000 }
      ]
    },
    fees: [
      { branch: 'Computer Science and Engineering', cost: '₹2.0–2.4 Lakh / year' },
      { branch: 'Mathematics and Computing', cost: '₹2.0–2.4 Lakh / year' },
      { branch: 'Electronics and Communication Engineering', cost: '₹2.0–2.4 Lakh / year' },
      { branch: 'Electrical Engineering', cost: '₹2.0–2.4 Lakh / year' },
      { branch: 'Mechanical Engineering', cost: '₹2.0–2.4 Lakh / year' },
      { branch: 'Civil Engineering', cost: '₹2.0–2.4 Lakh / year' }
    ],
    hostel: {
      admission: '₹10,000–₹20,000 estimated',
      monthlySeatRent: '₹1,000–₹2,500',
      electricity: '₹400–₹800 / month',
      accommodation: '₹30,000–₹55,000 / year',
      mess: '₹3,500–₹5,000 / month'
    },
    placement: {
      engineeringMedian: '₹7–10 LPA estimated',
      studentsPlaced: '500+',
      csePlacement: '85%+ estimated',
      cseAverage: '₹11–15 LPA estimated',
      cseHighest: '₹30+ LPA estimated'
    }
  },


  {
    id: 14,
    rank: 14,
    name: 'Motilal Nehru National Institute of Technology Allahabad',
    location: 'Prayagraj, Uttar Pradesh',
    image: '/JEEMain/mnnit-allahabad.jpg',
    category: 'Institute of National Importance · NIT',
    foundation: '1961',
    historicalOrigin: 'Motilal Nehru Regional Engineering College',
    branches: [
      'Computer Science and Engineering',
      'Information Technology',
      'Electronics and Communication Engineering',
      'Electrical Engineering',
      'Mechanical Engineering',
      'Civil Engineering',
      'Chemical Engineering',
      'Biotechnology'
    ],
    cutoffs: {
      open: [
        { branch: 'Computer Science and Engineering', opening: 2500, closing: 5000 },
        { branch: 'Information Technology', opening: 4000, closing: 7000 },
        { branch: 'Electronics and Communication Engineering', opening: 6000, closing: 10000 },
        { branch: 'Electrical Engineering', opening: 8500, closing: 14000 },
        { branch: 'Mechanical Engineering', opening: 14000, closing: 22000 },
        { branch: 'Civil Engineering', opening: 22000, closing: 35000 }
      ],
      obcA: [
        { branch: 'Computer Science and Engineering', opening: 1000, closing: 2500 },
        { branch: 'Information Technology', opening: 1800, closing: 4000 },
        { branch: 'Electronics and Communication Engineering', opening: 2800, closing: 5500 },
        { branch: 'Electrical Engineering', opening: 4000, closing: 7500 },
        { branch: 'Mechanical Engineering', opening: 7500, closing: 12000 },
        { branch: 'Civil Engineering', opening: 11000, closing: 18000 }
      ],
      obcB: [
        { branch: 'Computer Science and Engineering', opening: 1800, closing: 3500 },
        { branch: 'Information Technology', opening: 2800, closing: 5000 },
        { branch: 'Electronics and Communication Engineering', opening: 4000, closing: 7000 },
        { branch: 'Electrical Engineering', opening: 6000, closing: 10000 },
        { branch: 'Mechanical Engineering', opening: 10000, closing: 16000 },
        { branch: 'Civil Engineering', opening: 15000, closing: 24000 }
      ],
      sc: [
        { branch: 'Computer Science and Engineering', opening: 500, closing: 1500 },
        { branch: 'Information Technology', opening: 900, closing: 2500 },
        { branch: 'Electronics and Communication Engineering', opening: 1500, closing: 3500 },
        { branch: 'Electrical Engineering', opening: 2500, closing: 5000 },
        { branch: 'Mechanical Engineering', opening: 5000, closing: 8500 },
        { branch: 'Civil Engineering', opening: 8000, closing: 13000 }
      ],
      st: [
        { branch: 'Computer Science and Engineering', opening: 150, closing: 500 },
        { branch: 'Information Technology', opening: 250, closing: 700 },
        { branch: 'Electronics and Communication Engineering', opening: 500, closing: 1200 },
        { branch: 'Electrical Engineering', opening: 1000, closing: 2000 },
        { branch: 'Mechanical Engineering', opening: 2000, closing: 4000 },
        { branch: 'Civil Engineering', opening: 3500, closing: 6500 }
      ],
      ews: [
        { branch: 'Computer Science and Engineering', opening: 500, closing: 1300 },
        { branch: 'Information Technology', opening: 900, closing: 2000 },
        { branch: 'Electronics and Communication Engineering', opening: 1400, closing: 3000 },
        { branch: 'Electrical Engineering', opening: 2500, closing: 4500 },
        { branch: 'Mechanical Engineering', opening: 4500, closing: 7500 },
        { branch: 'Civil Engineering', opening: 7000, closing: 12000 }
      ]
    },
    fees: [
      { branch: 'Computer Science and Engineering', cost: '₹2.2–2.5 Lakh / year' },
      { branch: 'Information Technology', cost: '₹2.2–2.5 Lakh / year' },
      { branch: 'Electronics and Communication Engineering', cost: '₹2.2–2.5 Lakh / year' },
      { branch: 'Electrical Engineering', cost: '₹2.2–2.5 Lakh / year' },
      { branch: 'Mechanical Engineering', cost: '₹2.2–2.5 Lakh / year' },
      { branch: 'Civil Engineering', cost: '₹2.2–2.5 Lakh / year' }
    ],
    hostel: {
      admission: '₹12,000–₹22,000 estimated',
      monthlySeatRent: '₹1,000–₹2,500',
      electricity: '₹400–₹800 / month',
      accommodation: '₹35,000–₹60,000 / year',
      mess: '₹3,500–₹5,000 / month'
    },
    placement: {
      engineeringMedian: '₹11–14 LPA estimated',
      studentsPlaced: '800+',
      csePlacement: '90%+ estimated',
      cseAverage: '₹18–22 LPA estimated',
      cseHighest: '₹50+ LPA estimated'
    }
  },


  {
    id: 15,
    rank: 15,
    name: 'Indian Institute of Information Technology Allahabad',
    location: 'Prayagraj, Uttar Pradesh',
    image: '/JEEMain/iiit-allahabad.jpg',
    category: 'Institute of National Importance · IIIT',
    foundation: '1999',
    historicalOrigin: 'Established as an Institute of Information Technology',
    branches: [
      'Information Technology',
      'Information Technology - Business Informatics',
      'Electronics and Communication Engineering'
    ],
    cutoffs: {
      open: [
        { branch: 'Information Technology', opening: 1000, closing: 5000 },
        { branch: 'Information Technology - Business Informatics', opening: 2500, closing: 7000 },
        { branch: 'Electronics and Communication Engineering', opening: 7000, closing: 14000 }
      ],
      obcA: [
        { branch: 'Information Technology', opening: 400, closing: 2200 },
        { branch: 'Information Technology - Business Informatics', opening: 1000, closing: 3000 },
        { branch: 'Electronics and Communication Engineering', opening: 2500, closing: 6000 }
      ],
      obcB: [
        { branch: 'Information Technology', opening: 700, closing: 3000 },
        { branch: 'Information Technology - Business Informatics', opening: 1500, closing: 4500 },
        { branch: 'Electronics and Communication Engineering', opening: 3500, closing: 8000 }
      ],
      sc: [
        { branch: 'Information Technology', opening: 200, closing: 1000 },
        { branch: 'Information Technology - Business Informatics', opening: 500, closing: 1500 },
        { branch: 'Electronics and Communication Engineering', opening: 1000, closing: 3000 }
      ],
      st: [
        { branch: 'Information Technology', opening: 50, closing: 300 },
        { branch: 'Information Technology - Business Informatics', opening: 150, closing: 500 },
        { branch: 'Electronics and Communication Engineering', opening: 400, closing: 900 }
      ],
      ews: [
        { branch: 'Information Technology', opening: 200, closing: 900 },
        { branch: 'Information Technology - Business Informatics', opening: 400, closing: 1300 },
        { branch: 'Electronics and Communication Engineering', opening: 900, closing: 2500 }
      ]
    },
    fees: [
      { branch: 'Information Technology', cost: '₹2.5–3.0 Lakh / year' },
      { branch: 'Information Technology - Business Informatics', cost: '₹2.5–3.0 Lakh / year' },
      { branch: 'Electronics and Communication Engineering', cost: '₹2.5–3.0 Lakh / year' }
    ],
    hostel: {
      admission: '₹15,000–₹25,000 estimated',
      monthlySeatRent: '₹1,500–₹3,000',
      electricity: '₹500–₹1,000 / month',
      accommodation: '₹40,000–₹70,000 / year',
      mess: '₹4,000–₹5,500 / month'
    },
    placement: {
      engineeringMedian: '₹18–22 LPA estimated',
      studentsPlaced: '400+',
      csePlacement: '95%+ estimated',
      cseAverage: '₹25–30 LPA estimated',
      cseHighest: '₹60+ LPA estimated'
    }
  },


  {
    id: 16,
    rank: 16,
    name: 'Indian Institute of Information Technology Lucknow',
    location: 'Lucknow, Uttar Pradesh',
    image: '/JEEMain/iiit-lucknow.jpg',
    category: 'Institute of National Importance · IIIT',
    foundation: '2015',
    historicalOrigin: 'Established as an IIIT under PPP model',
    branches: [
      'Computer Science and Engineering',
      'Information Technology',
      'Computer Science and Artificial Intelligence',
      'Computer Science and Business'
    ],
    cutoffs: {
      open: [
        { branch: 'Computer Science and Engineering', opening: 8000, closing: 18000 },
        { branch: 'Computer Science and Artificial Intelligence', opening: 9000, closing: 20000 },
        { branch: 'Information Technology', opening: 12000, closing: 24000 },
        { branch: 'Computer Science and Business', opening: 15000, closing: 28000 }
      ],
      obcA: [
        { branch: 'Computer Science and Engineering', opening: 3000, closing: 8000 },
        { branch: 'Computer Science and Artificial Intelligence', opening: 4000, closing: 9000 },
        { branch: 'Information Technology', opening: 5000, closing: 11000 },
        { branch: 'Computer Science and Business', opening: 7000, closing: 14000 }
      ],
      obcB: [
        { branch: 'Computer Science and Engineering', opening: 5000, closing: 11000 },
        { branch: 'Computer Science and Artificial Intelligence', opening: 6000, closing: 13000 },
        { branch: 'Information Technology', opening: 8000, closing: 16000 },
        { branch: 'Computer Science and Business', opening: 10000, closing: 19000 }
      ],
      sc: [
        { branch: 'Computer Science and Engineering', opening: 1200, closing: 4000 },
        { branch: 'Computer Science and Artificial Intelligence', opening: 1500, closing: 5000 },
        { branch: 'Information Technology', opening: 2500, closing: 7000 },
        { branch: 'Computer Science and Business', opening: 3500, closing: 9000 }
      ],
      st: [
        { branch: 'Computer Science and Engineering', opening: 300, closing: 1000 },
        { branch: 'Computer Science and Artificial Intelligence', opening: 400, closing: 1200 },
        { branch: 'Information Technology', opening: 700, closing: 1800 },
        { branch: 'Computer Science and Business', opening: 1000, closing: 2500 }
      ],
      ews: [
        { branch: 'Computer Science and Engineering', opening: 1000, closing: 3000 },
        { branch: 'Computer Science and Artificial Intelligence', opening: 1200, closing: 3500 },
        { branch: 'Information Technology', opening: 1800, closing: 4500 },
        { branch: 'Computer Science and Business', opening: 2500, closing: 6000 }
      ]
    },
    fees: [
      { branch: 'Computer Science and Engineering', cost: '₹2.3–2.7 Lakh / year' },
      { branch: 'Computer Science and Artificial Intelligence', cost: '₹2.3–2.7 Lakh / year' },
      { branch: 'Information Technology', cost: '₹2.3–2.7 Lakh / year' },
      { branch: 'Computer Science and Business', cost: '₹2.3–2.7 Lakh / year' }
    ],
    hostel: {
      admission: '₹15,000–₹25,000 estimated',
      monthlySeatRent: '₹1,500–₹3,000',
      electricity: '₹500–₹1,000 / month',
      accommodation: '₹40,000–₹65,000 / year',
      mess: '₹4,000–₹5,500 / month'
    },
    placement: {
      engineeringMedian: '₹14–18 LPA estimated',
      studentsPlaced: '350+',
      csePlacement: '90%+ estimated',
      cseAverage: '₹18–22 LPA estimated',
      cseHighest: '₹50+ LPA estimated'
    }
  },


  {
    id: 17,
    rank: 17,
    name: 'Indian Institute of Information Technology Design and Manufacturing Jabalpur',
    location: 'Jabalpur, Madhya Pradesh',
    image: '/JEEMain/iiitdm-jabalpur.jpg',
    category: 'Institute of National Importance · IIITDM',
    foundation: '2005',
    historicalOrigin: 'Established as an IIITDM institute',
    branches: [
      'Computer Science and Engineering',
      'Electronics and Communication Engineering',
      'Mechanical Engineering',
      'Smart Manufacturing',
      'Design'
    ],
    cutoffs: {
      open: [
        { branch: 'Computer Science and Engineering', opening: 8000, closing: 22000 },
        { branch: 'Electronics and Communication Engineering', opening: 18000, closing: 35000 },
        { branch: 'Mechanical Engineering', opening: 30000, closing: 55000 },
        { branch: 'Smart Manufacturing', opening: 35000, closing: 65000 }
      ],
      obcA: [
        { branch: 'Computer Science and Engineering', opening: 3000, closing: 9000 },
        { branch: 'Electronics and Communication Engineering', opening: 7000, closing: 16000 },
        { branch: 'Mechanical Engineering', opening: 12000, closing: 25000 },
        { branch: 'Smart Manufacturing', opening: 15000, closing: 30000 }
      ],
      obcB: [
        { branch: 'Computer Science and Engineering', opening: 5000, closing: 14000 },
        { branch: 'Electronics and Communication Engineering', opening: 11000, closing: 23000 },
        { branch: 'Mechanical Engineering', opening: 18000, closing: 35000 },
        { branch: 'Smart Manufacturing', opening: 22000, closing: 42000 }
      ],
      sc: [
        { branch: 'Computer Science and Engineering', opening: 1200, closing: 5000 },
        { branch: 'Electronics and Communication Engineering', opening: 4000, closing: 10000 },
        { branch: 'Mechanical Engineering', opening: 8000, closing: 18000 },
        { branch: 'Smart Manufacturing', opening: 10000, closing: 22000 }
      ],
      st: [
        { branch: 'Computer Science and Engineering', opening: 300, closing: 1200 },
        { branch: 'Electronics and Communication Engineering', opening: 900, closing: 2500 },
        { branch: 'Mechanical Engineering', opening: 2500, closing: 6000 },
        { branch: 'Smart Manufacturing', opening: 3500, closing: 8000 }
      ],
      ews: [
        { branch: 'Computer Science and Engineering', opening: 1000, closing: 3500 },
        { branch: 'Electronics and Communication Engineering', opening: 3000, closing: 7500 },
        { branch: 'Mechanical Engineering', opening: 6500, closing: 14000 },
        { branch: 'Smart Manufacturing', opening: 8000, closing: 18000 }
      ]
    },
    fees: [
      { branch: 'Computer Science and Engineering', cost: '₹2.2–2.6 Lakh / year' },
      { branch: 'Electronics and Communication Engineering', cost: '₹2.2–2.6 Lakh / year' },
      { branch: 'Mechanical Engineering', cost: '₹2.2–2.6 Lakh / year' },
      { branch: 'Smart Manufacturing', cost: '₹2.2–2.6 Lakh / year' }
    ],
    hostel: {
      admission: '₹12,000–₹22,000 estimated',
      monthlySeatRent: '₹1,000–₹2,500',
      electricity: '₹400–₹800 / month',
      accommodation: '₹35,000–₹60,000 / year',
      mess: '₹3,500–₹5,000 / month'
    },
    placement: {
      engineeringMedian: '₹8–11 LPA estimated',
      studentsPlaced: '300+',
      csePlacement: '85%+ estimated',
      cseAverage: '₹13–17 LPA estimated',
      cseHighest: '₹35+ LPA estimated'
    }
  },


  {
    id: 18,
    rank: 18,
    name: 'Indian Institute of Information Technology Guwahati',
    location: 'Guwahati, Assam',
    image: '/JEEMain/iiit-guwahati.jpg',
    category: 'Institute of National Importance · IIIT',
    foundation: '2013',
    historicalOrigin: 'Established under the IIIT Act',
    branches: [
      'Computer Science and Engineering',
      'Electronics and Communication Engineering'
    ],
    cutoffs: {
      open: [
        { branch: 'Computer Science and Engineering', opening: 15000, closing: 30000 },
        { branch: 'Electronics and Communication Engineering', opening: 25000, closing: 50000 }
      ],
      obcA: [
        { branch: 'Computer Science and Engineering', opening: 6000, closing: 14000 },
        { branch: 'Electronics and Communication Engineering', opening: 11000, closing: 25000 }
      ],
      obcB: [
        { branch: 'Computer Science and Engineering', opening: 9000, closing: 20000 },
        { branch: 'Electronics and Communication Engineering', opening: 17000, closing: 35000 }
      ],
      sc: [
        { branch: 'Computer Science and Engineering', opening: 2000, closing: 7000 },
        { branch: 'Electronics and Communication Engineering', opening: 5000, closing: 12000 }
      ],
      st: [
        { branch: 'Computer Science and Engineering', opening: 500, closing: 1800 },
        { branch: 'Electronics and Communication Engineering', opening: 1200, closing: 3500 }
      ],
      ews: [
        { branch: 'Computer Science and Engineering', opening: 1500, closing: 5000 },
        { branch: 'Electronics and Communication Engineering', opening: 3500, closing: 9000 }
      ]
    },
    fees: [
      { branch: 'Computer Science and Engineering', cost: '₹2.3–2.7 Lakh / year' },
      { branch: 'Electronics and Communication Engineering', cost: '₹2.3–2.7 Lakh / year' }
    ],
    hostel: {
      admission: '₹12,000–₹22,000 estimated',
      monthlySeatRent: '₹1,000–₹2,500',
      electricity: '₹400–₹800 / month',
      accommodation: '₹35,000–₹60,000 / year',
      mess: '₹3,500–₹5,000 / month'
    },
    placement: {
      engineeringMedian: '₹8–11 LPA estimated',
      studentsPlaced: '200+',
      csePlacement: '85%+ estimated',
      cseAverage: '₹12–16 LPA estimated',
      cseHighest: '₹30+ LPA estimated'
    }
  },


  {
    id: 19,
    rank: 19,
    name: 'Delhi Technological University',
    location: 'New Delhi, Delhi',
    image: '/JEEMain/dtu.jpg',
    category: 'State University · Engineering University',
    foundation: '1941',
    historicalOrigin: 'Delhi Polytechnic, later Delhi College of Engineering',
    branches: [
      'Computer Science and Engineering',
      'Information Technology',
      'Software Engineering',
      'Mathematics and Computing',
      'Electronics and Communication Engineering',
      'Electrical Engineering',
      'Mechanical Engineering',
      'Civil Engineering',
      'Production and Industrial Engineering'
    ],
    cutoffs: {
      open: [
        { branch: 'Computer Science and Engineering', opening: 5000, closing: 15000 },
        { branch: 'Information Technology', opening: 8000, closing: 20000 },
        { branch: 'Software Engineering', opening: 10000, closing: 23000 },
        { branch: 'Mathematics and Computing', opening: 7000, closing: 18000 },
        { branch: 'Electronics and Communication Engineering', opening: 15000, closing: 30000 },
        { branch: 'Electrical Engineering', opening: 25000, closing: 45000 },
        { branch: 'Mechanical Engineering', opening: 45000, closing: 75000 },
        { branch: 'Civil Engineering', opening: 60000, closing: 100000 }
      ],
      obcA: [
        { branch: 'Computer Science and Engineering', opening: 2500, closing: 8000 },
        { branch: 'Information Technology', opening: 4000, closing: 11000 },
        { branch: 'Software Engineering', opening: 5000, closing: 13000 },
        { branch: 'Mathematics and Computing', opening: 3500, closing: 9500 },
        { branch: 'Electronics and Communication Engineering', opening: 8000, closing: 17000 },
        { branch: 'Electrical Engineering', opening: 14000, closing: 26000 }
      ],
      obcB: [
        { branch: 'Computer Science and Engineering', opening: 4000, closing: 12000 },
        { branch: 'Information Technology', opening: 6000, closing: 16000 },
        { branch: 'Software Engineering', opening: 7500, closing: 18000 },
        { branch: 'Mathematics and Computing', opening: 5000, closing: 13000 },
        { branch: 'Electronics and Communication Engineering', opening: 12000, closing: 24000 },
        { branch: 'Electrical Engineering', opening: 20000, closing: 35000 }
      ],
      sc: [
        { branch: 'Computer Science and Engineering', opening: 1000, closing: 4000 },
        { branch: 'Information Technology', opening: 1800, closing: 5500 },
        { branch: 'Software Engineering', opening: 2000, closing: 6500 },
        { branch: 'Mathematics and Computing', opening: 1500, closing: 4500 },
        { branch: 'Electronics and Communication Engineering', opening: 4500, closing: 10000 },
        { branch: 'Electrical Engineering', opening: 8000, closing: 16000 }
      ],
      st: [
        { branch: 'Computer Science and Engineering', opening: 300, closing: 1500 },
        { branch: 'Information Technology', opening: 500, closing: 2000 },
        { branch: 'Software Engineering', opening: 600, closing: 2500 },
        { branch: 'Mathematics and Computing', opening: 400, closing: 1700 },
        { branch: 'Electronics and Communication Engineering', opening: 1500, closing: 4000 },
        { branch: 'Electrical Engineering', opening: 3000, closing: 7000 }
      ],
      ews: [
        { branch: 'Computer Science and Engineering', opening: 800, closing: 3000 },
        { branch: 'Information Technology', opening: 1200, closing: 4000 },
        { branch: 'Software Engineering', opening: 1500, closing: 5000 },
        { branch: 'Mathematics and Computing', opening: 1000, closing: 3500 },
        { branch: 'Electronics and Communication Engineering', opening: 3500, closing: 8000 },
        { branch: 'Electrical Engineering', opening: 6500, closing: 13000 }
      ]
    },
    fees: [
      { branch: 'Computer Science and Engineering', cost: '₹2.0–2.5 Lakh / year' },
      { branch: 'Information Technology', cost: '₹2.0–2.5 Lakh / year' },
      { branch: 'Software Engineering', cost: '₹2.0–2.5 Lakh / year' },
      { branch: 'Mathematics and Computing', cost: '₹2.0–2.5 Lakh / year' },
      { branch: 'Electronics and Communication Engineering', cost: '₹2.0–2.5 Lakh / year' },
      { branch: 'Electrical Engineering', cost: '₹2.0–2.5 Lakh / year' }
    ],
    hostel: {
      admission: '₹15,000–₹30,000 estimated',
      monthlySeatRent: '₹1,500–₹3,000',
      electricity: '₹500–₹1,000 / month',
      accommodation: '₹45,000–₹75,000 / year',
      mess: '₹4,000–₹5,500 / month'
    },
    placement: {
      engineeringMedian: '₹12–15 LPA estimated',
      studentsPlaced: '1,500+',
      csePlacement: '90%+ estimated',
      cseAverage: '₹20–25 LPA estimated',
      cseHighest: '₹60+ LPA estimated'
    }
  },


  {
    id: 20,
    rank: 20,
    name: 'Netaji Subhas University of Technology',
    location: 'New Delhi, Delhi',
    image: '/JEEMain/nsut.jpg',
    category: 'State University · Engineering University',
    foundation: '1983',
    historicalOrigin: 'Established as Delhi Institute of Technology',
    branches: [
      'Computer Science and Engineering',
      'Computer Engineering',
      'Information Technology',
      'Artificial Intelligence',
      'Data Science',
      'Electronics and Communication Engineering',
      'Electrical Engineering',
      'Instrumentation and Control Engineering',
      'Mechanical Engineering',
      'Manufacturing Process and Automation Engineering'
    ],
    cutoffs: {
      open: [
        { branch: 'Computer Science and Engineering', opening: 5000, closing: 15000 },
        { branch: 'Computer Engineering', opening: 7000, closing: 18000 },
        { branch: 'Information Technology', opening: 8000, closing: 20000 },
        { branch: 'Artificial Intelligence', opening: 6000, closing: 17000 },
        { branch: 'Data Science', opening: 8000, closing: 22000 },
        { branch: 'Electronics and Communication Engineering', opening: 15000, closing: 32000 },
        { branch: 'Electrical Engineering', opening: 25000, closing: 45000 },
        { branch: 'Mechanical Engineering', opening: 50000, closing: 85000 }
      ],
      obcA: [
        { branch: 'Computer Science and Engineering', opening: 2500, closing: 8000 },
        { branch: 'Computer Engineering', opening: 3500, closing: 9500 },
        { branch: 'Information Technology', opening: 4000, closing: 11000 },
        { branch: 'Artificial Intelligence', opening: 3000, closing: 9000 },
        { branch: 'Data Science', opening: 4500, closing: 12000 },
        { branch: 'Electronics and Communication Engineering', opening: 8000, closing: 18000 },
        { branch: 'Electrical Engineering', opening: 14000, closing: 26000 }
      ],
      obcB: [
        { branch: 'Computer Science and Engineering', opening: 4000, closing: 12000 },
        { branch: 'Computer Engineering', opening: 5000, closing: 14000 },
        { branch: 'Information Technology', opening: 6000, closing: 16000 },
        { branch: 'Artificial Intelligence', opening: 5000, closing: 14000 },
        { branch: 'Data Science', opening: 6500, closing: 18000 },
        { branch: 'Electronics and Communication Engineering', opening: 12000, closing: 25000 },
        { branch: 'Electrical Engineering', opening: 20000, closing: 35000 }
      ],
      sc: [
        { branch: 'Computer Science and Engineering', opening: 1000, closing: 4000 },
        { branch: 'Computer Engineering', opening: 1500, closing: 5000 },
        { branch: 'Information Technology', opening: 1800, closing: 5500 },
        { branch: 'Artificial Intelligence', opening: 1200, closing: 4500 },
        { branch: 'Data Science', opening: 2000, closing: 6000 },
        { branch: 'Electronics and Communication Engineering', opening: 4500, closing: 11000 },
        { branch: 'Electrical Engineering', opening: 8000, closing: 16000 }
      ],
      st: [
        { branch: 'Computer Science and Engineering', opening: 300, closing: 1500 },
        { branch: 'Computer Engineering', opening: 400, closing: 1700 },
        { branch: 'Information Technology', opening: 500, closing: 2000 },
        { branch: 'Artificial Intelligence', opening: 350, closing: 1600 },
        { branch: 'Data Science', opening: 600, closing: 2200 },
        { branch: 'Electronics and Communication Engineering', opening: 1500, closing: 4000 },
        { branch: 'Electrical Engineering', opening: 3000, closing: 7000 }
      ],
      ews: [
        { branch: 'Computer Science and Engineering', opening: 800, closing: 3000 },
        { branch: 'Computer Engineering', opening: 1000, closing: 3500 },
        { branch: 'Information Technology', opening: 1200, closing: 4000 },
        { branch: 'Artificial Intelligence', opening: 900, closing: 3200 },
        { branch: 'Data Science', opening: 1300, closing: 4500 },
        { branch: 'Electronics and Communication Engineering', opening: 3500, closing: 8500 },
        { branch: 'Electrical Engineering', opening: 6500, closing: 13000 }
      ]
    },
    fees: [
      { branch: 'Computer Science and Engineering', cost: '₹2.0–2.5 Lakh / year' },
      { branch: 'Computer Engineering', cost: '₹2.0–2.5 Lakh / year' },
      { branch: 'Information Technology', cost: '₹2.0–2.5 Lakh / year' },
      { branch: 'Artificial Intelligence', cost: '₹2.0–2.5 Lakh / year' },
      { branch: 'Data Science', cost: '₹2.0–2.5 Lakh / year' },
      { branch: 'Electronics and Communication Engineering', cost: '₹2.0–2.5 Lakh / year' },
      { branch: 'Electrical Engineering', cost: '₹2.0–2.5 Lakh / year' }
    ],
    hostel: {
      admission: '₹15,000–₹30,000 estimated',
      monthlySeatRent: '₹1,500–₹3,000',
      electricity: '₹500–₹1,000 / month',
      accommodation: '₹45,000–₹75,000 / year',
      mess: '₹4,000–₹5,500 / month'
    },
    placement: {
      engineeringMedian: '₹12–16 LPA estimated',
      studentsPlaced: '1,200+',
      csePlacement: '90%+ estimated',
      cseAverage: '₹18–24 LPA estimated',
      cseHighest: '₹60+ LPA estimated'
    }
  }

]


export default jeeMainColleges