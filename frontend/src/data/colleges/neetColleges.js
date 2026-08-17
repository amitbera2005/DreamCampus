const neetColleges = [

  /* ===================================================== */
  /* 1. AIIMS NEW DELHI                                    */
  /* ===================================================== */

  {
    id: 1,
    rank: 1,
    name: 'All India Institute of Medical Sciences, New Delhi',
    location: 'New Delhi, Delhi',
    image: '/NEET/aiims-new-delhi.jpg',

    category: 'Government Medical Institute',
    foundation: '1956',

    historicalOrigin:
      'Established as a premier national medical institute by the Government of India',

    branches: [
      'MBBS',
      'MD',
      'MS',
      'DM',
      'M.Ch',
      'Ph.D.',
      'Research Programmes'
    ],

    cutoffs: {

      open: [
        { branch: 'MBBS', opening: 1, closing: 60 },
        { branch: 'MD', opening: 1, closing: 500 },
        { branch: 'MS', opening: 1, closing: 800 }
      ],

      obcA: [
        { branch: 'MBBS', opening: 60, closing: 250 },
        { branch: 'MD', opening: 300, closing: 1500 },
        { branch: 'MS', opening: 400, closing: 1800 }
      ],

      obcB: [
        { branch: 'MBBS', opening: 60, closing: 250 },
        { branch: 'MD', opening: 300, closing: 1500 },
        { branch: 'MS', opening: 400, closing: 1800 }
      ],

      sc: [
        { branch: 'MBBS', opening: 100, closing: 1500 },
        { branch: 'MD', opening: 1000, closing: 5000 },
        { branch: 'MS', opening: 1200, closing: 6000 }
      ],

      st: [
        { branch: 'MBBS', opening: 300, closing: 4000 },
        { branch: 'MD', opening: 2500, closing: 9000 },
        { branch: 'MS', opening: 3000, closing: 10000 }
      ],

      ews: [
        { branch: 'MBBS', opening: 50, closing: 150 },
        { branch: 'MD', opening: 200, closing: 1000 },
        { branch: 'MS', opening: 300, closing: 1200 }
      ]
    },

    fees: [
      { branch: 'MBBS', cost: 'Approx. ₹6,000 – ₹10,000/year' },
      { branch: 'MD', cost: 'Approx. ₹10,000 – ₹30,000/year' },
      { branch: 'MS', cost: 'Approx. ₹10,000 – ₹30,000/year' },
      { branch: 'DM', cost: 'Approx. ₹15,000 – ₹40,000/year' },
      { branch: 'M.Ch', cost: 'Approx. ₹15,000 – ₹40,000/year' }
    ],

    hostel: {
      admission: 'Available',
      monthlySeatRent: 'Approx. ₹500 – ₹2,000/month',
      electricity: 'Approx. ₹300 – ₹700/month',
      accommodation: 'Institute hostel available',
      mess: 'Mess facility available'
    },

    placement: {
      engineeringMedian: 'Approx. ₹12 – ₹18 lakh/year equivalent clinical career value',
      studentsPlaced: 'Medical internship and residency opportunities',
      csePlacement: 'Clinical internship / residency',
      cseAverage: 'Approx. ₹60,000 – ₹1,20,000/month during residency',
      cseHighest: 'Approx. ₹1,50,000+/month senior clinical roles'
    }
  },


  /* ===================================================== */
  /* 2. PGIMER CHANDIGARH                                 */
  /* ===================================================== */

  {
    id: 2,
    rank: 2,
    name: 'Post Graduate Institute of Medical Education and Research',
    location: 'Chandigarh, Chandigarh',
    image: '/NEET/pgimer-chandigarh.jpg',

    category: 'Government Medical Institute',
    foundation: '1960',

    historicalOrigin:
      'Premier postgraduate medical and research institute established in Chandigarh',

    branches: [
      'MD',
      'MS',
      'DM',
      'M.Ch',
      'Ph.D.',
      'Research Programmes'
    ],

    cutoffs: {

      open: [
        { branch: 'MD', opening: 1, closing: 800 },
        { branch: 'MS', opening: 1, closing: 1200 },
        { branch: 'DM', opening: 1, closing: 1000 }
      ],

      obcA: [
        { branch: 'MD', opening: 300, closing: 2000 },
        { branch: 'MS', opening: 400, closing: 2500 },
        { branch: 'DM', opening: 300, closing: 2200 }
      ],

      obcB: [
        { branch: 'MD', opening: 300, closing: 2000 },
        { branch: 'MS', opening: 400, closing: 2500 },
        { branch: 'DM', opening: 300, closing: 2200 }
      ],

      sc: [
        { branch: 'MD', opening: 1000, closing: 6000 },
        { branch: 'MS', opening: 1200, closing: 7000 },
        { branch: 'DM', opening: 1000, closing: 6000 }
      ],

      st: [
        { branch: 'MD', opening: 2000, closing: 10000 },
        { branch: 'MS', opening: 2500, closing: 12000 },
        { branch: 'DM', opening: 2000, closing: 10000 }
      ],

      ews: [
        { branch: 'MD', opening: 200, closing: 1200 },
        { branch: 'MS', opening: 250, closing: 1500 },
        { branch: 'DM', opening: 200, closing: 1300 }
      ]
    },

    fees: [
      { branch: 'MD', cost: 'Approx. ₹25,000 – ₹60,000/year' },
      { branch: 'MS', cost: 'Approx. ₹25,000 – ₹60,000/year' },
      { branch: 'DM', cost: 'Approx. ₹30,000 – ₹80,000/year' },
      { branch: 'M.Ch', cost: 'Approx. ₹30,000 – ₹80,000/year' }
    ],

    hostel: {
      admission: 'Available',
      monthlySeatRent: 'Approx. ₹500 – ₹2,500/month',
      electricity: 'Approx. ₹300 – ₹800/month',
      accommodation: 'Institute hostel available',
      mess: 'Mess facility available'
    },

    placement: {
      engineeringMedian: 'Approx. ₹12 – ₹20 lakh/year equivalent clinical career value',
      studentsPlaced: 'Medical internship and residency opportunities',
      csePlacement: 'Clinical residency opportunities',
      cseAverage: 'Approx. ₹70,000 – ₹1,20,000/month',
      cseHighest: 'Approx. ₹1,50,000+/month'
    }
  },


  /* ===================================================== */
  /* 3. CHRISTIAN MEDICAL COLLEGE                         */
  /* ===================================================== */

  {
    id: 3,
    rank: 3,
    name: 'Christian Medical College, Vellore',
    location: 'Vellore, Tamil Nadu',
    image: '/NEET/cmc-vellore.jpg',

    category: 'Private Medical College',
    foundation: '1900',

    historicalOrigin:
      'Established by Dr. Ida Scudder and developed into a major medical education and healthcare institution',

    branches: [
      'MBBS',
      'MD',
      'MS',
      'DM',
      'M.Ch',
      'Ph.D.',
      'Nursing',
      'Allied Health Sciences'
    ],

    cutoffs: {

      open: [
        { branch: 'MBBS', opening: 1, closing: 500 },
        { branch: 'MD', opening: 1, closing: 1500 },
        { branch: 'MS', opening: 1, closing: 2000 }
      ],

      obcA: [
        { branch: 'MBBS', opening: 200, closing: 1500 },
        { branch: 'MD', opening: 500, closing: 3000 },
        { branch: 'MS', opening: 600, closing: 3500 }
      ],

      obcB: [
        { branch: 'MBBS', opening: 200, closing: 1500 },
        { branch: 'MD', opening: 500, closing: 3000 },
        { branch: 'MS', opening: 600, closing: 3500 }
      ],

      sc: [
        { branch: 'MBBS', opening: 1000, closing: 6000 },
        { branch: 'MD', opening: 2000, closing: 8000 },
        { branch: 'MS', opening: 2500, closing: 9000 }
      ],

      st: [
        { branch: 'MBBS', opening: 2000, closing: 12000 },
        { branch: 'MD', opening: 4000, closing: 15000 },
        { branch: 'MS', opening: 5000, closing: 17000 }
      ],

      ews: [
        { branch: 'MBBS', opening: 300, closing: 2000 },
        { branch: 'MD', opening: 700, closing: 4000 },
        { branch: 'MS', opening: 800, closing: 4500 }
      ]
    },

    fees: [
      { branch: 'MBBS', cost: 'Approx. ₹1.5 – ₹3 lakh/year' },
      { branch: 'MD', cost: 'Approx. ₹2 – ₹5 lakh/year' },
      { branch: 'MS', cost: 'Approx. ₹2 – ₹5 lakh/year' },
      { branch: 'DM', cost: 'Approx. ₹3 – ₹7 lakh/year' },
      { branch: 'M.Ch', cost: 'Approx. ₹3 – ₹7 lakh/year' }
    ],

    hostel: {
      admission: 'Available',
      monthlySeatRent: 'Approx. ₹2,000 – ₹6,000/month',
      electricity: 'Approx. ₹500 – ₹1,000/month',
      accommodation: 'Campus hostel available',
      mess: 'Mess facility available'
    },

    placement: {
      engineeringMedian: 'Approx. ₹8 – ₹15 lakh/year equivalent clinical career value',
      studentsPlaced: 'Medical internship and hospital residency opportunities',
      csePlacement: 'Clinical internship / residency',
      cseAverage: 'Approx. ₹50,000 – ₹1,00,000/month',
      cseHighest: 'Approx. ₹1,50,000+/month'
    }
  },


  /* ===================================================== */
  /* 4. JIPMER PUDUCHERRY                                 */
  /* ===================================================== */

  {
    id: 4,
    rank: 4,
    name: 'Jawaharlal Institute of Postgraduate Medical Education and Research',
    location: 'Puducherry, Puducherry',
    image: '/NEET/jipmer-puducherry.jpg',

    category: 'Government Medical Institute',
    foundation: '1823',

    historicalOrigin:
      'Originated from the French medical institution established in Puducherry',

    branches: [
      'MBBS',
      'MD',
      'MS',
      'DM',
      'M.Ch',
      'Ph.D.'
    ],

    cutoffs: {

      open: [
        { branch: 'MBBS', opening: 1, closing: 300 },
        { branch: 'MD', opening: 1, closing: 1000 },
        { branch: 'MS', opening: 1, closing: 1200 }
      ],

      obcA: [
        { branch: 'MBBS', opening: 200, closing: 1000 },
        { branch: 'MD', opening: 500, closing: 2500 },
        { branch: 'MS', opening: 600, closing: 3000 }
      ],

      obcB: [
        { branch: 'MBBS', opening: 200, closing: 1000 },
        { branch: 'MD', opening: 500, closing: 2500 },
        { branch: 'MS', opening: 600, closing: 3000 }
      ],

      sc: [
        { branch: 'MBBS', opening: 500, closing: 5000 },
        { branch: 'MD', opening: 1500, closing: 6000 },
        { branch: 'MS', opening: 1800, closing: 7000 }
      ],

      st: [
        { branch: 'MBBS', opening: 1000, closing: 9000 },
        { branch: 'MD', opening: 2500, closing: 12000 },
        { branch: 'MS', opening: 3000, closing: 14000 }
      ],

      ews: [
        { branch: 'MBBS', opening: 100, closing: 500 },
        { branch: 'MD', opening: 300, closing: 1500 },
        { branch: 'MS', opening: 400, closing: 1800 }
      ]
    },

    fees: [
      { branch: 'MBBS', cost: 'Approx. ₹15,000 – ₹25,000/year' },
      { branch: 'MD', cost: 'Approx. ₹20,000 – ₹60,000/year' },
      { branch: 'MS', cost: 'Approx. ₹20,000 – ₹60,000/year' },
      { branch: 'DM', cost: 'Approx. ₹25,000 – ₹70,000/year' },
      { branch: 'M.Ch', cost: 'Approx. ₹25,000 – ₹70,000/year' }
    ],

    hostel: {
      admission: 'Available',
      monthlySeatRent: 'Approx. ₹300 – ₹1,000/month',
      electricity: 'Approx. ₹200 – ₹500/month',
      accommodation: 'Institute hostel available',
      mess: 'Mess facility available'
    },

    placement: {
      engineeringMedian: 'Approx. ₹10 – ₹18 lakh/year equivalent clinical career value',
      studentsPlaced: 'Medical internship and residency opportunities',
      csePlacement: 'Clinical internship / residency',
      cseAverage: 'Approx. ₹60,000 – ₹1,10,000/month',
      cseHighest: 'Approx. ₹1,50,000+/month'
    }
  },


  /* ===================================================== */
  /* 5. SGPGIMS LUCKNOW                                   */
  /* ===================================================== */

  {
    id: 5,
    rank: 5,
    name: 'Sanjay Gandhi Postgraduate Institute of Medical Sciences',
    location: 'Lucknow, Uttar Pradesh',
    image: '/NEET/sgpgi-lucknow.jpg',

    category: 'Government Medical Institute',
    foundation: '1983',

    historicalOrigin:
      'Established by the Government of Uttar Pradesh as a postgraduate medical institute',

    branches: [
      'DM',
      'M.Ch',
      'MD',
      'MS',
      'Ph.D.'
    ],

    cutoffs: {

      open: [
        { branch: 'MD', opening: 1, closing: 1000 },
        { branch: 'MS', opening: 1, closing: 1500 },
        { branch: 'DM', opening: 1, closing: 800 }
      ],

      obcA: [
        { branch: 'MD', opening: 300, closing: 2500 },
        { branch: 'MS', opening: 400, closing: 3000 },
        { branch: 'DM', opening: 200, closing: 2000 }
      ],

      obcB: [
        { branch: 'MD', opening: 300, closing: 2500 },
        { branch: 'MS', opening: 400, closing: 3000 },
        { branch: 'DM', opening: 200, closing: 2000 }
      ],

      sc: [
        { branch: 'MD', opening: 1200, closing: 7000 },
        { branch: 'MS', opening: 1500, closing: 8000 },
        { branch: 'DM', opening: 1000, closing: 6000 }
      ],

      st: [
        { branch: 'MD', opening: 2500, closing: 12000 },
        { branch: 'MS', opening: 3000, closing: 14000 },
        { branch: 'DM', opening: 2000, closing: 10000 }
      ],

      ews: [
        { branch: 'MD', opening: 250, closing: 1500 },
        { branch: 'MS', opening: 300, closing: 2000 },
        { branch: 'DM', opening: 200, closing: 1300 }
      ]
    },

    fees: [
      { branch: 'MD', cost: 'Approx. ₹30,000 – ₹80,000/year' },
      { branch: 'MS', cost: 'Approx. ₹30,000 – ₹80,000/year' },
      { branch: 'DM', cost: 'Approx. ₹40,000 – ₹1 lakh/year' },
      { branch: 'M.Ch', cost: 'Approx. ₹40,000 – ₹1 lakh/year' }
    ],

    hostel: {
      admission: 'Available',
      monthlySeatRent: 'Approx. ₹500 – ₹2,000/month',
      electricity: 'Approx. ₹300 – ₹700/month',
      accommodation: 'Institute hostel available',
      mess: 'Mess facility available'
    },

    placement: {
      engineeringMedian: 'Approx. ₹12 – ₹20 lakh/year equivalent clinical career value',
      studentsPlaced: 'Medical residency and super-speciality opportunities',
      csePlacement: 'Clinical residency opportunities',
      cseAverage: 'Approx. ₹70,000 – ₹1,30,000/month',
      cseHighest: 'Approx. ₹1,60,000+/month'
    }
  },


  /* ===================================================== */
  /* 6. IMS BHU                                            */
  /* ===================================================== */

  {
    id: 6,
    rank: 6,
    name: 'Institute of Medical Sciences, Banaras Hindu University',
    location: 'Varanasi, Uttar Pradesh',
    image: '/NEET/ims-bhu.jpg',

    category: 'Central Government Medical Institute',
    foundation: '1960',

    historicalOrigin:
      'Medical institute of Banaras Hindu University providing medical education and research',

    branches: [
      'MBBS',
      'MD',
      'MS',
      'DM',
      'M.Ch',
      'Ph.D.'
    ],

    cutoffs: {

      open: [
        { branch: 'MBBS', opening: 1, closing: 1500 },
        { branch: 'MD', opening: 1, closing: 2500 },
        { branch: 'MS', opening: 1, closing: 3000 }
      ],

      obcA: [
        { branch: 'MBBS', opening: 500, closing: 4000 },
        { branch: 'MD', opening: 1000, closing: 6000 },
        { branch: 'MS', opening: 1200, closing: 7000 }
      ],

      obcB: [
        { branch: 'MBBS', opening: 500, closing: 4000 },
        { branch: 'MD', opening: 1000, closing: 6000 },
        { branch: 'MS', opening: 1200, closing: 7000 }
      ],

      sc: [
        { branch: 'MBBS', opening: 1500, closing: 10000 },
        { branch: 'MD', opening: 3000, closing: 15000 },
        { branch: 'MS', opening: 3500, closing: 16000 }
      ],

      st: [
        { branch: 'MBBS', opening: 3000, closing: 20000 },
        { branch: 'MD', opening: 5000, closing: 25000 },
        { branch: 'MS', opening: 6000, closing: 28000 }
      ],

      ews: [
        { branch: 'MBBS', opening: 300, closing: 2500 },
        { branch: 'MD', opening: 700, closing: 4000 },
        { branch: 'MS', opening: 800, closing: 4500 }
      ]
    },

    fees: [
      { branch: 'MBBS', cost: 'Approx. ₹20,000 – ₹40,000/year' },
      { branch: 'MD', cost: 'Approx. ₹30,000 – ₹80,000/year' },
      { branch: 'MS', cost: 'Approx. ₹30,000 – ₹80,000/year' },
      { branch: 'DM', cost: 'Approx. ₹40,000 – ₹1 lakh/year' },
      { branch: 'M.Ch', cost: 'Approx. ₹40,000 – ₹1 lakh/year' }
    ],

    hostel: {
      admission: 'Available',
      monthlySeatRent: 'Approx. ₹500 – ₹2,000/month',
      electricity: 'Approx. ₹300 – ₹700/month',
      accommodation: 'University hostel available',
      mess: 'Mess facility available'
    },

    placement: {
      engineeringMedian: 'Approx. ₹8 – ₹15 lakh/year equivalent clinical career value',
      studentsPlaced: 'Medical internship and residency opportunities',
      csePlacement: 'Clinical internship / residency',
      cseAverage: 'Approx. ₹55,000 – ₹1,10,000/month',
      cseHighest: 'Approx. ₹1,40,000+/month'
    }
  },


  /* ===================================================== */
  /* 7. NIMHANS BENGALURU                                 */
  /* ===================================================== */

  {
    id: 7,
    rank: 7,
    name: 'National Institute of Mental Health and Neuro Sciences',
    location: 'Bengaluru, Karnataka',
    image: '/NEET/nimhans-bengaluru.jpg',

    category: 'Institute of National Importance',
    foundation: '1974',

    historicalOrigin:
      'National institute specialising in mental health, neurology and neurosciences',

    branches: [
      'MD',
      'DM',
      'M.Ch',
      'Ph.D.',
      'Postgraduate Programmes',
      'Research Programmes'
    ],

    cutoffs: {

      open: [
        { branch: 'MD Psychiatry', opening: 1, closing: 300 },
        { branch: 'DM Neurology', opening: 1, closing: 500 },
        { branch: 'M.Ch Neurosurgery', opening: 1, closing: 700 }
      ],

      obcA: [
        { branch: 'MD Psychiatry', opening: 100, closing: 800 },
        { branch: 'DM Neurology', opening: 150, closing: 1000 },
        { branch: 'M.Ch Neurosurgery', opening: 200, closing: 1200 }
      ],

      obcB: [
        { branch: 'MD Psychiatry', opening: 100, closing: 800 },
        { branch: 'DM Neurology', opening: 150, closing: 1000 },
        { branch: 'M.Ch Neurosurgery', opening: 200, closing: 1200 }
      ],

      sc: [
        { branch: 'MD Psychiatry', opening: 300, closing: 2500 },
        { branch: 'DM Neurology', opening: 500, closing: 3500 },
        { branch: 'M.Ch Neurosurgery', opening: 600, closing: 4000 }
      ],

      st: [
        { branch: 'MD Psychiatry', opening: 500, closing: 4000 },
        { branch: 'DM Neurology', opening: 800, closing: 5000 },
        { branch: 'M.Ch Neurosurgery', opening: 900, closing: 6000 }
      ],

      ews: [
        { branch: 'MD Psychiatry', opening: 80, closing: 500 },
        { branch: 'DM Neurology', opening: 100, closing: 700 },
        { branch: 'M.Ch Neurosurgery', opening: 150, closing: 900 }
      ]
    },

    fees: [
      { branch: 'MD Psychiatry', cost: 'Approx. ₹30,000 – ₹80,000/year' },
      { branch: 'DM Neurology', cost: 'Approx. ₹40,000 – ₹1 lakh/year' },
      { branch: 'M.Ch Neurosurgery', cost: 'Approx. ₹40,000 – ₹1 lakh/year' },
      { branch: 'Ph.D.', cost: 'Approx. ₹25,000 – ₹60,000/year' }
    ],

    hostel: {
      admission: 'Available',
      monthlySeatRent: 'Approx. ₹500 – ₹2,500/month',
      electricity: 'Approx. ₹300 – ₹800/month',
      accommodation: 'Institute hostel available',
      mess: 'Mess facility available'
    },

    placement: {
      engineeringMedian: 'Approx. ₹12 – ₹20 lakh/year equivalent clinical career value',
      studentsPlaced: 'Clinical residency and neuroscience research opportunities',
      csePlacement: 'Clinical residency opportunities',
      cseAverage: 'Approx. ₹70,000 – ₹1,30,000/month',
      cseHighest: 'Approx. ₹1,60,000+/month'
    }
  },


  /* ===================================================== */
  /* 8. KGMU LUCKNOW                                      */
  /* ===================================================== */

  {
    id: 8,
    rank: 8,
    name: 'King George Medical University',
    location: 'Lucknow, Uttar Pradesh',
    image: '/NEET/kgmu-lucknow.jpg',

    category: 'Government Medical University',
    foundation: '1905',

    historicalOrigin:
      'Historic government medical institution in Lucknow with extensive clinical facilities',

    branches: [
      'MBBS',
      'MD',
      'MS',
      'DM',
      'M.Ch',
      'Ph.D.'
    ],

    cutoffs: {

      open: [
        { branch: 'MBBS', opening: 1, closing: 2500 },
        { branch: 'MD', opening: 1, closing: 3500 },
        { branch: 'MS', opening: 1, closing: 4000 }
      ],

      obcA: [
        { branch: 'MBBS', opening: 500, closing: 7000 },
        { branch: 'MD', opening: 1000, closing: 9000 },
        { branch: 'MS', opening: 1200, closing: 10000 }
      ],

      obcB: [
        { branch: 'MBBS', opening: 500, closing: 7000 },
        { branch: 'MD', opening: 1000, closing: 9000 },
        { branch: 'MS', opening: 1200, closing: 10000 }
      ],

      sc: [
        { branch: 'MBBS', opening: 2000, closing: 15000 },
        { branch: 'MD', opening: 4000, closing: 22000 },
        { branch: 'MS', opening: 4500, closing: 25000 }
      ],

      st: [
        { branch: 'MBBS', opening: 4000, closing: 25000 },
        { branch: 'MD', opening: 6000, closing: 30000 },
        { branch: 'MS', opening: 7000, closing: 35000 }
      ],

      ews: [
        { branch: 'MBBS', opening: 400, closing: 4000 },
        { branch: 'MD', opening: 800, closing: 6000 },
        { branch: 'MS', opening: 1000, closing: 7000 }
      ]
    },

    fees: [
      { branch: 'MBBS', cost: 'Approx. ₹40,000 – ₹70,000/year' },
      { branch: 'MD', cost: 'Approx. ₹50,000 – ₹1 lakh/year' },
      { branch: 'MS', cost: 'Approx. ₹50,000 – ₹1 lakh/year' },
      { branch: 'DM', cost: 'Approx. ₹60,000 – ₹1.2 lakh/year' },
      { branch: 'M.Ch', cost: 'Approx. ₹60,000 – ₹1.2 lakh/year' }
    ],

    hostel: {
      admission: 'Available',
      monthlySeatRent: 'Approx. ₹500 – ₹2,500/month',
      electricity: 'Approx. ₹300 – ₹800/month',
      accommodation: 'University hostel available',
      mess: 'Mess facility available'
    },

    placement: {
      engineeringMedian: 'Approx. ₹8 – ₹15 lakh/year equivalent clinical career value',
      studentsPlaced: 'Medical internship and residency opportunities',
      csePlacement: 'Clinical internship / residency',
      cseAverage: 'Approx. ₹55,000 – ₹1,10,000/month',
      cseHighest: 'Approx. ₹1,50,000+/month'
    }
  },


  /* ===================================================== */
  /* 9. AMRITA                                            */
  /* ===================================================== */

  {
    id: 9,
    rank: 9,
    name: 'Amrita Vishwa Vidyapeetham',
    location: 'Coimbatore, Tamil Nadu',
    image: '/NEET/amrita-vishwa-vidyapeetham.jpg',

    category: 'Private Deemed University',
    foundation: '1998',

    historicalOrigin:
      'Established as a multidisciplinary deemed university with major healthcare institutions',

    branches: [
      'MBBS',
      'MD',
      'MS',
      'DM',
      'M.Ch'
    ],

    cutoffs: {

      open: [
        { branch: 'MBBS', opening: 5000, closing: 30000 },
        { branch: 'MD', opening: 500, closing: 5000 },
        { branch: 'MS', opening: 500, closing: 6000 }
      ],

      obcA: [
        { branch: 'MBBS', opening: 10000, closing: 50000 },
        { branch: 'MD', opening: 1000, closing: 8000 },
        { branch: 'MS', opening: 1000, closing: 9000 }
      ],

      obcB: [
        { branch: 'MBBS', opening: 10000, closing: 50000 },
        { branch: 'MD', opening: 1000, closing: 8000 },
        { branch: 'MS', opening: 1000, closing: 9000 }
      ],

      sc: [
        { branch: 'MBBS', opening: 30000, closing: 100000 },
        { branch: 'MD', opening: 3000, closing: 15000 },
        { branch: 'MS', opening: 4000, closing: 18000 }
      ],

      st: [
        { branch: 'MBBS', opening: 40000, closing: 120000 },
        { branch: 'MD', opening: 5000, closing: 20000 },
        { branch: 'MS', opening: 6000, closing: 22000 }
      ],

      ews: [
        { branch: 'MBBS', opening: 5000, closing: 30000 },
        { branch: 'MD', opening: 700, closing: 6000 },
        { branch: 'MS', opening: 800, closing: 7000 }
      ]
    },

    fees: [
      { branch: 'MBBS', cost: 'Approx. ₹20 – ₹25 lakh/year' },
      { branch: 'MD', cost: 'Approx. ₹8 – ₹15 lakh/year' },
      { branch: 'MS', cost: 'Approx. ₹8 – ₹15 lakh/year' },
      { branch: 'DM', cost: 'Approx. ₹10 – ₹18 lakh/year' },
      { branch: 'M.Ch', cost: 'Approx. ₹10 – ₹18 lakh/year' }
    ],

    hostel: {
      admission: 'Available',
      monthlySeatRent: 'Approx. ₹5,000 – ₹12,000/month',
      electricity: 'Approx. ₹500 – ₹1,000/month',
      accommodation: 'Campus hostel available',
      mess: 'Mess facility available'
    },

    placement: {
      engineeringMedian: 'Approx. ₹8 – ₹15 lakh/year equivalent clinical career value',
      studentsPlaced: 'Clinical internship and residency pathway',
      csePlacement: 'Clinical internship / residency',
      cseAverage: 'Approx. ₹50,000 – ₹1,00,000/month',
      cseHighest: 'Approx. ₹1,50,000+/month'
    }
  },


  /* ===================================================== */
  /* 10. KMC MANIPAL                                      */
  /* ===================================================== */

  {
    id: 10,
    rank: 10,
    name: 'Kasturba Medical College, Manipal',
    location: 'Manipal, Karnataka',
    image: '/NEET/kmc-manipal.jpg',

    category: 'Private Deemed Medical College',
    foundation: '1953',

    historicalOrigin:
      'Founded as a constituent medical college of Manipal Academy of Higher Education',

    branches: [
      'MBBS',
      'MD',
      'MS',
      'DM',
      'M.Ch'
    ],

    cutoffs: {

      open: [
        { branch: 'MBBS', opening: 10000, closing: 50000 },
        { branch: 'MD', opening: 1000, closing: 10000 },
        { branch: 'MS', opening: 1000, closing: 12000 }
      ],

      obcA: [
        { branch: 'MBBS', opening: 15000, closing: 70000 },
        { branch: 'MD', opening: 2000, closing: 15000 },
        { branch: 'MS', opening: 2000, closing: 17000 }
      ],

      obcB: [
        { branch: 'MBBS', opening: 15000, closing: 70000 },
        { branch: 'MD', opening: 2000, closing: 15000 },
        { branch: 'MS', opening: 2000, closing: 17000 }
      ],

      sc: [
        { branch: 'MBBS', opening: 30000, closing: 120000 },
        { branch: 'MD', opening: 5000, closing: 30000 },
        { branch: 'MS', opening: 6000, closing: 35000 }
      ],

      st: [
        { branch: 'MBBS', opening: 40000, closing: 150000 },
        { branch: 'MD', opening: 7000, closing: 40000 },
        { branch: 'MS', opening: 8000, closing: 45000 }
      ],

      ews: [
        { branch: 'MBBS', opening: 10000, closing: 60000 },
        { branch: 'MD', opening: 1500, closing: 12000 },
        { branch: 'MS', opening: 1500, closing: 14000 }
      ]
    },

    fees: [
      { branch: 'MBBS', cost: 'Approx. ₹12 – ₹15 lakh/year' },
      { branch: 'MD', cost: 'Approx. ₹8 – ₹18 lakh/year' },
      { branch: 'MS', cost: 'Approx. ₹8 – ₹18 lakh/year' },
      { branch: 'DM', cost: 'Approx. ₹10 – ₹20 lakh/year' },
      { branch: 'M.Ch', cost: 'Approx. ₹10 – ₹20 lakh/year' }
    ],

    hostel: {
      admission: 'Available',
      monthlySeatRent: 'Approx. ₹6,000 – ₹12,000/month',
      electricity: 'Approx. ₹500 – ₹1,000/month',
      accommodation: 'Multiple hostel options available',
      mess: 'Mess facility available'
    },

    placement: {
      engineeringMedian: 'Approx. ₹8 – ₹15 lakh/year equivalent clinical career value',
      studentsPlaced: 'Clinical internship / residency',
      csePlacement: 'Clinical internship / residency',
      cseAverage: 'Approx. ₹50,000 – ₹1,00,000/month',
      cseHighest: 'Approx. ₹1,50,000+/month'
    }
  },


  /* ===================================================== */
  /* 11. SAVEETHA                                         */
  /* ===================================================== */

  {
    id: 11,
    rank: 11,
    name: 'Saveetha Institute of Medical and Technical Sciences',
    location: 'Chennai, Tamil Nadu',
    image: '/NEET/saveetha.jpg',

    category: 'Private Deemed University',
    foundation: '2005',

    historicalOrigin:
      'Deemed university with medical education and healthcare facilities',

    branches: [
      'MBBS',
      'MD',
      'MS',
      'DM',
      'M.Ch'
    ],

    cutoffs: {

      open: [
        { branch: 'MBBS', opening: 10000, closing: 60000 },
        { branch: 'MD', opening: 2000, closing: 15000 },
        { branch: 'MS', opening: 2000, closing: 18000 }
      ],

      obcA: [
        { branch: 'MBBS', opening: 20000, closing: 90000 },
        { branch: 'MD', opening: 4000, closing: 25000 },
        { branch: 'MS', opening: 4000, closing: 28000 }
      ],

      obcB: [
        { branch: 'MBBS', opening: 20000, closing: 90000 },
        { branch: 'MD', opening: 4000, closing: 25000 },
        { branch: 'MS', opening: 4000, closing: 28000 }
      ],

      sc: [
        { branch: 'MBBS', opening: 40000, closing: 150000 },
        { branch: 'MD', opening: 8000, closing: 45000 },
        { branch: 'MS', opening: 9000, closing: 50000 }
      ],

      st: [
        { branch: 'MBBS', opening: 50000, closing: 180000 },
        { branch: 'MD', opening: 10000, closing: 55000 },
        { branch: 'MS', opening: 12000, closing: 60000 }
      ],

      ews: [
        { branch: 'MBBS', opening: 12000, closing: 70000 },
        { branch: 'MD', opening: 3000, closing: 18000 },
        { branch: 'MS', opening: 3000, closing: 20000 }
      ]
    },

    fees: [
      { branch: 'MBBS', cost: 'Approx. ₹20 – ₹25 lakh/year' },
      { branch: 'MD', cost: 'Approx. ₹8 – ₹18 lakh/year' },
      { branch: 'MS', cost: 'Approx. ₹8 – ₹18 lakh/year' },
      { branch: 'DM', cost: 'Approx. ₹10 – ₹20 lakh/year' },
      { branch: 'M.Ch', cost: 'Approx. ₹10 – ₹20 lakh/year' }
    ],

    hostel: {
      admission: 'Available',
      monthlySeatRent: 'Approx. ₹5,000 – ₹12,000/month',
      electricity: 'Approx. ₹500 – ₹1,000/month',
      accommodation: 'Campus hostel available',
      mess: 'Mess facility available'
    },

    placement: {
      engineeringMedian: 'Approx. ₹7 – ₹14 lakh/year equivalent clinical career value',
      studentsPlaced: 'Clinical internship / residency',
      csePlacement: 'Clinical internship / residency',
      cseAverage: 'Approx. ₹45,000 – ₹95,000/month',
      cseHighest: 'Approx. ₹1,40,000+/month'
    }
  },


  /* ===================================================== */
  /* 12. MADRAS MEDICAL COLLEGE                          */
  /* ===================================================== */

  {
    id: 12,
    rank: 12,
    name: 'Madras Medical College & Government General Hospital',
    location: 'Chennai, Tamil Nadu',
    image: '/NEET/madras-medical-college.jpg',

    category: 'Government Medical College',
    foundation: '1835',

    historicalOrigin:
      'One of the oldest modern medical colleges in India',

    branches: [
      'MBBS',
      'MD',
      'MS',
      'DM',
      'M.Ch'
    ],

    cutoffs: {

      open: [
        { branch: 'MBBS', opening: 100, closing: 5000 },
        { branch: 'MD', opening: 100, closing: 5000 },
        { branch: 'MS', opening: 100, closing: 6000 }
      ],

      obcA: [
        { branch: 'MBBS', opening: 1000, closing: 10000 },
        { branch: 'MD', opening: 800, closing: 9000 },
        { branch: 'MS', opening: 1000, closing: 10000 }
      ],

      obcB: [
        { branch: 'MBBS', opening: 1000, closing: 10000 },
        { branch: 'MD', opening: 800, closing: 9000 },
        { branch: 'MS', opening: 1000, closing: 10000 }
      ],

      sc: [
        { branch: 'MBBS', opening: 5000, closing: 30000 },
        { branch: 'MD', opening: 4000, closing: 25000 },
        { branch: 'MS', opening: 5000, closing: 30000 }
      ],

      st: [
        { branch: 'MBBS', opening: 8000, closing: 50000 },
        { branch: 'MD', opening: 7000, closing: 40000 },
        { branch: 'MS', opening: 8000, closing: 50000 }
      ],

      ews: [
        { branch: 'MBBS', opening: 500, closing: 8000 },
        { branch: 'MD', opening: 400, closing: 7000 },
        { branch: 'MS', opening: 500, closing: 8000 }
      ]
    },

    fees: [
      { branch: 'MBBS', cost: 'Approx. ₹20,000 – ₹50,000/year' },
      { branch: 'MD', cost: 'Approx. ₹30,000 – ₹1 lakh/year' },
      { branch: 'MS', cost: 'Approx. ₹30,000 – ₹1 lakh/year' },
      { branch: 'DM', cost: 'Approx. ₹40,000 – ₹1.2 lakh/year' },
      { branch: 'M.Ch', cost: 'Approx. ₹40,000 – ₹1.2 lakh/year' }
    ],

    hostel: {
      admission: 'Available',
      monthlySeatRent: 'Approx. ₹500 – ₹2,000/month',
      electricity: 'Approx. ₹300 – ₹700/month',
      accommodation: 'Government hostel available',
      mess: 'Mess facility available'
    },

    placement: {
      engineeringMedian: 'Approx. ₹8 – ₹15 lakh/year equivalent clinical career value',
      studentsPlaced: 'Medical internship and residency opportunities',
      csePlacement: 'Clinical internship / residency',
      cseAverage: 'Approx. ₹55,000 – ₹1,10,000/month',
      cseHighest: 'Approx. ₹1,40,000+/month'
    }
  },


  /* ===================================================== */
  /* 13. AIIMS RISHIKESH                                  */
  /* ===================================================== */

  {
    id: 13,
    rank: 13,
    name: 'All India Institute of Medical Sciences, Rishikesh',
    location: 'Rishikesh, Uttarakhand',
    image: '/NEET/aiims-rishikesh.jpg',

    category: 'Government Medical Institute',
    foundation: '2012',

    historicalOrigin:
      'Established as one of the new AIIMS institutions under the Government of India',

    branches: [
      'MBBS',
      'MD',
      'MS',
      'DM',
      'M.Ch',
      'Ph.D.'
    ],

    cutoffs: {

      open: [
        { branch: 'MBBS', opening: 1, closing: 2500 },
        { branch: 'MD', opening: 1, closing: 3000 },
        { branch: 'MS', opening: 1, closing: 4000 }
      ],

      obcA: [
        { branch: 'MBBS', opening: 500, closing: 6000 },
        { branch: 'MD', opening: 700, closing: 9000 },
        { branch: 'MS', opening: 900, closing: 10000 }
      ],

      obcB: [
        { branch: 'MBBS', opening: 500, closing: 6000 },
        { branch: 'MD', opening: 700, closing: 9000 },
        { branch: 'MS', opening: 900, closing: 10000 }
      ],

      sc: [
        { branch: 'MBBS', opening: 2000, closing: 18000 },
        { branch: 'MD', opening: 3000, closing: 25000 },
        { branch: 'MS', opening: 4000, closing: 30000 }
      ],

      st: [
        { branch: 'MBBS', opening: 4000, closing: 30000 },
        { branch: 'MD', opening: 5000, closing: 40000 },
        { branch: 'MS', opening: 6000, closing: 45000 }
      ],

      ews: [
        { branch: 'MBBS', opening: 300, closing: 4000 },
        { branch: 'MD', opening: 500, closing: 6000 },
        { branch: 'MS', opening: 700, closing: 7000 }
      ]
    },

    fees: [
      { branch: 'MBBS', cost: 'Approx. ₹10,000 – ₹20,000/year' },
      { branch: 'MD', cost: 'Approx. ₹20,000 – ₹50,000/year' },
      { branch: 'MS', cost: 'Approx. ₹20,000 – ₹50,000/year' },
      { branch: 'DM', cost: 'Approx. ₹25,000 – ₹60,000/year' },
      { branch: 'M.Ch', cost: 'Approx. ₹25,000 – ₹60,000/year' }
    ],

    hostel: {
      admission: 'Available',
      monthlySeatRent: 'Approx. ₹500 – ₹2,000/month',
      electricity: 'Approx. ₹300 – ₹700/month',
      accommodation: 'AIIMS hostel available',
      mess: 'Mess facility available'
    },

    placement: {
      engineeringMedian: 'Approx. ₹10 – ₹18 lakh/year equivalent clinical career value',
      studentsPlaced: 'Medical internship and residency opportunities',
      csePlacement: 'Clinical internship / residency',
      cseAverage: 'Approx. ₹60,000 – ₹1,20,000/month',
      cseHighest: 'Approx. ₹1,50,000+/month'
    }
  },


  /* ===================================================== */
  /* 14. AIIMS BHUBANESWAR                                */
  /* ===================================================== */

  {
    id: 14,
    rank: 14,
    name: 'All India Institute of Medical Sciences, Bhubaneswar',
    location: 'Bhubaneswar, Odisha',
    image: '/NEET/aiims-bhubaneswar.jpg',

    category: 'Government Medical Institute',
    foundation: '2012',

    historicalOrigin:
      'Established as a new AIIMS institution under the Government of India',

    branches: [
      'MBBS',
      'MD',
      'MS',
      'DM',
      'M.Ch',
      'Ph.D.'
    ],

    cutoffs: {

      open: [
        { branch: 'MBBS', opening: 1, closing: 3000 },
        { branch: 'MD', opening: 1, closing: 3500 },
        { branch: 'MS', opening: 1, closing: 4500 }
      ],

      obcA: [
        { branch: 'MBBS', opening: 500, closing: 7000 },
        { branch: 'MD', opening: 700, closing: 10000 },
        { branch: 'MS', opening: 1000, closing: 12000 }
      ],

      obcB: [
        { branch: 'MBBS', opening: 500, closing: 7000 },
        { branch: 'MD', opening: 700, closing: 10000 },
        { branch: 'MS', opening: 1000, closing: 12000 }
      ],

      sc: [
        { branch: 'MBBS', opening: 2500, closing: 20000 },
        { branch: 'MD', opening: 3500, closing: 28000 },
        { branch: 'MS', opening: 4500, closing: 32000 }
      ],

      st: [
        { branch: 'MBBS', opening: 5000, closing: 35000 },
        { branch: 'MD', opening: 6000, closing: 45000 },
        { branch: 'MS', opening: 7000, closing: 50000 }
      ],

      ews: [
        { branch: 'MBBS', opening: 400, closing: 5000 },
        { branch: 'MD', opening: 600, closing: 7000 },
        { branch: 'MS', opening: 800, closing: 8000 }
      ]
    },

    fees: [
      { branch: 'MBBS', cost: 'Approx. ₹10,000 – ₹20,000/year' },
      { branch: 'MD', cost: 'Approx. ₹20,000 – ₹50,000/year' },
      { branch: 'MS', cost: 'Approx. ₹20,000 – ₹50,000/year' },
      { branch: 'DM', cost: 'Approx. ₹25,000 – ₹60,000/year' },
      { branch: 'M.Ch', cost: 'Approx. ₹25,000 – ₹60,000/year' }
    ],

    hostel: {
      admission: 'Available',
      monthlySeatRent: 'Approx. ₹500 – ₹2,000/month',
      electricity: 'Approx. ₹300 – ₹700/month',
      accommodation: 'AIIMS hostel available',
      mess: 'Mess facility available'
    },

    placement: {
      engineeringMedian: 'Approx. ₹10 – ₹18 lakh/year equivalent clinical career value',
      studentsPlaced: 'Medical internship and residency opportunities',
      csePlacement: 'Clinical internship / residency',
      cseAverage: 'Approx. ₹60,000 – ₹1,20,000/month',
      cseHighest: 'Approx. ₹1,50,000+/month'
    }
  },


  /* ===================================================== */
  /* 15. SIKSHA O ANUSANDHAN                              */
  /* ===================================================== */

  {
    id: 15,
    rank: 15,
    name: 'Siksha O Anusandhan',
    location: 'Bhubaneswar, Odisha',
    image: '/NEET/siksha-o-anusandhan.jpg',

    category: 'Private Deemed University',
    foundation: '2007',

    historicalOrigin:
      'Deemed university with medical and multidisciplinary education',

    branches: [
      'MBBS',
      'MD',
      'MS',
      'DM',
      'M.Ch'
    ],

    cutoffs: {

      open: [
        { branch: 'MBBS', opening: 10000, closing: 70000 },
        { branch: 'MD', opening: 2000, closing: 18000 },
        { branch: 'MS', opening: 2000, closing: 20000 }
      ],

      obcA: [
        { branch: 'MBBS', opening: 20000, closing: 100000 },
        { branch: 'MD', opening: 4000, closing: 30000 },
        { branch: 'MS', opening: 4000, closing: 32000 }
      ],

      obcB: [
        { branch: 'MBBS', opening: 20000, closing: 100000 },
        { branch: 'MD', opening: 4000, closing: 30000 },
        { branch: 'MS', opening: 4000, closing: 32000 }
      ],

      sc: [
        { branch: 'MBBS', opening: 40000, closing: 160000 },
        { branch: 'MD', opening: 8000, closing: 50000 },
        { branch: 'MS', opening: 9000, closing: 55000 }
      ],

      st: [
        { branch: 'MBBS', opening: 50000, closing: 200000 },
        { branch: 'MD', opening: 10000, closing: 60000 },
        { branch: 'MS', opening: 12000, closing: 70000 }
      ],

      ews: [
        { branch: 'MBBS', opening: 15000, closing: 80000 },
        { branch: 'MD', opening: 3000, closing: 22000 },
        { branch: 'MS', opening: 3000, closing: 24000 }
      ]
    },

    fees: [
      { branch: 'MBBS', cost: 'Approx. ₹18 – ₹25 lakh/year' },
      { branch: 'MD', cost: 'Approx. ₹8 – ₹18 lakh/year' },
      { branch: 'MS', cost: 'Approx. ₹8 – ₹18 lakh/year' },
      { branch: 'DM', cost: 'Approx. ₹10 – ₹20 lakh/year' },
      { branch: 'M.Ch', cost: 'Approx. ₹10 – ₹20 lakh/year' }
    ],

    hostel: {
      admission: 'Available',
      monthlySeatRent: 'Approx. ₹5,000 – ₹12,000/month',
      electricity: 'Approx. ₹500 – ₹1,000/month',
      accommodation: 'Campus hostel available',
      mess: 'Mess facility available'
    },

    placement: {
      engineeringMedian: 'Approx. ₹7 – ₹14 lakh/year equivalent clinical career value',
      studentsPlaced: 'Clinical internship / residency',
      csePlacement: 'Clinical internship / residency',
      cseAverage: 'Approx. ₹45,000 – ₹95,000/month',
      cseHighest: 'Approx. ₹1,40,000+/month'
    }
  },


  /* ===================================================== */
  /* 16. SCTIMST                                           */
  /* ===================================================== */

  {
    id: 16,
    rank: 16,
    name: 'Sree Chitra Tirunal Institute for Medical Sciences and Technology',
    location: 'Thiruvananthapuram, Kerala',
    image: '/NEET/sctimst.jpg',

    category: 'Government Medical Institute',
    foundation: '1973',

    historicalOrigin:
      'National institute specialising in advanced medical sciences and technology',

    branches: [
      'DM',
      'M.Ch',
      'MD',
      'Ph.D.',
      'Research Programmes'
    ],

    cutoffs: {

      open: [
        { branch: 'MD', opening: 1, closing: 1500 },
        { branch: 'DM', opening: 1, closing: 1000 },
        { branch: 'M.Ch', opening: 1, closing: 1200 }
      ],

      obcA: [
        { branch: 'MD', opening: 200, closing: 3000 },
        { branch: 'DM', opening: 200, closing: 2500 },
        { branch: 'M.Ch', opening: 200, closing: 2800 }
      ],

      obcB: [
        { branch: 'MD', opening: 200, closing: 3000 },
        { branch: 'DM', opening: 200, closing: 2500 },
        { branch: 'M.Ch', opening: 200, closing: 2800 }
      ],

      sc: [
        { branch: 'MD', opening: 500, closing: 7000 },
        { branch: 'DM', opening: 500, closing: 6000 },
        { branch: 'M.Ch', opening: 600, closing: 7000 }
      ],

      st: [
        { branch: 'MD', opening: 800, closing: 10000 },
        { branch: 'DM', opening: 800, closing: 9000 },
        { branch: 'M.Ch', opening: 900, closing: 10000 }
      ],

      ews: [
        { branch: 'MD', opening: 200, closing: 3000 },
        { branch: 'DM', opening: 200, closing: 2500 },
        { branch: 'M.Ch', opening: 200, closing: 2800 }
      ]
    },

    fees: [
      { branch: 'MD', cost: 'Approx. ₹20,000 – ₹80,000/year' },
      { branch: 'DM', cost: 'Approx. ₹25,000 – ₹90,000/year' },
      { branch: 'M.Ch', cost: 'Approx. ₹25,000 – ₹90,000/year' },
      { branch: 'Ph.D.', cost: 'Approx. ₹20,000 – ₹60,000/year' }
    ],

    hostel: {
      admission: 'Available',
      monthlySeatRent: 'Approx. ₹500 – ₹2,500/month',
      electricity: 'Approx. ₹300 – ₹800/month',
      accommodation: 'Institute hostel available',
      mess: 'Mess facility available'
    },

    placement: {
      engineeringMedian: 'Approx. ₹12 – ₹20 lakh/year equivalent clinical career value',
      studentsPlaced: 'Advanced clinical residency and research opportunities',
      csePlacement: 'Clinical residency opportunities',
      cseAverage: 'Approx. ₹70,000 – ₹1,30,000/month',
      cseHighest: 'Approx. ₹1,60,000+/month'
    }
  },


  /* ===================================================== */
  /* 17. SRM                                               */
  /* ===================================================== */

  {
    id: 17,
    rank: 17,
    name: 'SRM Institute of Science and Technology',
    location: 'Chennai, Tamil Nadu',
    image: '/NEET/srm.jpg',

    category: 'Private Deemed University',
    foundation: '1985',

    historicalOrigin:
      'Private deemed university with medical, engineering and multidisciplinary education',

    branches: [
      'MBBS',
      'MD',
      'MS',
      'DM',
      'M.Ch'
    ],

    cutoffs: {

      open: [
        { branch: 'MBBS', opening: 15000, closing: 80000 },
        { branch: 'MD', opening: 3000, closing: 22000 },
        { branch: 'MS', opening: 3000, closing: 25000 }
      ],

      obcA: [
        { branch: 'MBBS', opening: 25000, closing: 110000 },
        { branch: 'MD', opening: 5000, closing: 35000 },
        { branch: 'MS', opening: 5000, closing: 38000 }
      ],

      obcB: [
        { branch: 'MBBS', opening: 25000, closing: 110000 },
        { branch: 'MD', opening: 5000, closing: 35000 },
        { branch: 'MS', opening: 5000, closing: 38000 }
      ],

      sc: [
        { branch: 'MBBS', opening: 50000, closing: 180000 },
        { branch: 'MD', opening: 10000, closing: 60000 },
        { branch: 'MS', opening: 12000, closing: 70000 }
      ],

      st: [
        { branch: 'MBBS', opening: 60000, closing: 220000 },
        { branch: 'MD', opening: 12000, closing: 70000 },
        { branch: 'MS', opening: 14000, closing: 80000 }
      ],

      ews: [
        { branch: 'MBBS', opening: 18000, closing: 90000 },
        { branch: 'MD', opening: 3500, closing: 26000 },
        { branch: 'MS', opening: 4000, closing: 28000 }
      ]
    },

    fees: [
      { branch: 'MBBS', cost: 'Approx. ₹20 – ₹25 lakh/year' },
      { branch: 'MD', cost: 'Approx. ₹8 – ₹18 lakh/year' },
      { branch: 'MS', cost: 'Approx. ₹8 – ₹18 lakh/year' },
      { branch: 'DM', cost: 'Approx. ₹10 – ₹20 lakh/year' },
      { branch: 'M.Ch', cost: 'Approx. ₹10 – ₹20 lakh/year' }
    ],

    hostel: {
      admission: 'Available',
      monthlySeatRent: 'Approx. ₹5,000 – ₹12,000/month',
      electricity: 'Approx. ₹500 – ₹1,000/month',
      accommodation: 'Campus hostel available',
      mess: 'Mess facility available'
    },

    placement: {
      engineeringMedian: 'Approx. ₹7 – ₹14 lakh/year equivalent clinical career value',
      studentsPlaced: 'Clinical internship / residency',
      csePlacement: 'Clinical internship / residency',
      cseAverage: 'Approx. ₹45,000 – ₹95,000/month',
      cseHighest: 'Approx. ₹1,40,000+/month'
    }
  },


  /* ===================================================== */
  /* 18. AIIMS JODHPUR                                    */
  /* ===================================================== */

  {
    id: 18,
    rank: 18,
    name: 'All India Institute of Medical Sciences, Jodhpur',
    location: 'Jodhpur, Rajasthan',
    image: '/NEET/aiims-jodhpur.jpg',

    category: 'Government Medical Institute',
    foundation: '2012',

    historicalOrigin:
      'Established as a new AIIMS institution under the Government of India',

    branches: [
      'MBBS',
      'MD',
      'MS',
      'DM',
      'M.Ch',
      'Ph.D.'
    ],

    cutoffs: {

      open: [
        { branch: 'MBBS', opening: 1, closing: 3500 },
        { branch: 'MD', opening: 1, closing: 4000 },
        { branch: 'MS', opening: 1, closing: 5000 }
      ],

      obcA: [
        { branch: 'MBBS', opening: 600, closing: 8000 },
        { branch: 'MD', opening: 800, closing: 11000 },
        { branch: 'MS', opening: 1000, closing: 13000 }
      ],

      obcB: [
        { branch: 'MBBS', opening: 600, closing: 8000 },
        { branch: 'MD', opening: 800, closing: 11000 },
        { branch: 'MS', opening: 1000, closing: 13000 }
      ],

      sc: [
        { branch: 'MBBS', opening: 2500, closing: 22000 },
        { branch: 'MD', opening: 3500, closing: 30000 },
        { branch: 'MS', opening: 4500, closing: 35000 }
      ],

      st: [
        { branch: 'MBBS', opening: 5000, closing: 40000 },
        { branch: 'MD', opening: 6500, closing: 50000 },
        { branch: 'MS', opening: 7500, closing: 55000 }
      ],

      ews: [
        { branch: 'MBBS', opening: 400, closing: 5500 },
        { branch: 'MD', opening: 600, closing: 8000 },
        { branch: 'MS', opening: 800, closing: 9000 }
      ]
    },

    fees: [
      { branch: 'MBBS', cost: 'Approx. ₹10,000 – ₹20,000/year' },
      { branch: 'MD', cost: 'Approx. ₹20,000 – ₹50,000/year' },
      { branch: 'MS', cost: 'Approx. ₹20,000 – ₹50,000/year' },
      { branch: 'DM', cost: 'Approx. ₹25,000 – ₹60,000/year' },
      { branch: 'M.Ch', cost: 'Approx. ₹25,000 – ₹60,000/year' }
    ],

    hostel: {
      admission: 'Available',
      monthlySeatRent: 'Approx. ₹500 – ₹2,000/month',
      electricity: 'Approx. ₹300 – ₹700/month',
      accommodation: 'AIIMS hostel available',
      mess: 'Mess facility available'
    },

    placement: {
      engineeringMedian: 'Approx. ₹10 – ₹18 lakh/year equivalent clinical career value',
      studentsPlaced: 'Medical internship and residency opportunities',
      csePlacement: 'Clinical internship / residency',
      cseAverage: 'Approx. ₹60,000 – ₹1,20,000/month',
      cseHighest: 'Approx. ₹1,50,000+/month'
    }
  },


  /* ===================================================== */
  /* 19. DMIHER                                            */
  /* ===================================================== */

  {
    id: 19,
    rank: 19,
    name: 'Datta Meghe Institute of Higher Education and Research',
    location: 'Wardha, Maharashtra',
    image: '/NEET/dmiher.jpg',

    category: 'Private Deemed University',
    foundation: '2005',

    historicalOrigin:
      'Deemed university providing medical, dental, nursing and allied health education',

    branches: [
      'MBBS',
      'MD',
      'MS',
      'DM',
      'M.Ch',
      'Ph.D.'
    ],

    cutoffs: {

      open: [
        { branch: 'MBBS', opening: 10000, closing: 60000 },
        { branch: 'MD', opening: 3000, closing: 25000 },
        { branch: 'MS', opening: 3000, closing: 28000 }
      ],

      obcA: [
        { branch: 'MBBS', opening: 20000, closing: 90000 },
        { branch: 'MD', opening: 5000, closing: 40000 },
        { branch: 'MS', opening: 5000, closing: 45000 }
      ],

      obcB: [
        { branch: 'MBBS', opening: 20000, closing: 90000 },
        { branch: 'MD', opening: 5000, closing: 40000 },
        { branch: 'MS', opening: 5000, closing: 45000 }
      ],

      sc: [
        { branch: 'MBBS', opening: 40000, closing: 150000 },
        { branch: 'MD', opening: 10000, closing: 70000 },
        { branch: 'MS', opening: 12000, closing: 80000 }
      ],

      st: [
        { branch: 'MBBS', opening: 50000, closing: 180000 },
        { branch: 'MD', opening: 12000, closing: 80000 },
        { branch: 'MS', opening: 15000, closing: 90000 }
      ],

      ews: [
        { branch: 'MBBS', opening: 12000, closing: 70000 },
        { branch: 'MD', opening: 3500, closing: 30000 },
        { branch: 'MS', opening: 4000, closing: 35000 }
      ]
    },

    fees: [
      { branch: 'MBBS', cost: 'Approx. ₹18 – ₹25 lakh/year' },
      { branch: 'MD', cost: 'Approx. ₹8 – ₹18 lakh/year' },
      { branch: 'MS', cost: 'Approx. ₹8 – ₹18 lakh/year' },
      { branch: 'DM', cost: 'Approx. ₹10 – ₹20 lakh/year' },
      { branch: 'M.Ch', cost: 'Approx. ₹10 – ₹20 lakh/year' }
    ],

    hostel: {
      admission: 'Available',
      monthlySeatRent: 'Approx. ₹5,000 – ₹12,000/month',
      electricity: 'Approx. ₹500 – ₹1,000/month',
      accommodation: 'Campus hostel available',
      mess: 'Mess facility available'
    },

    placement: {
      engineeringMedian: 'Approx. ₹7 – ₹14 lakh/year equivalent clinical career value',
      studentsPlaced: 'Clinical internship / residency',
      csePlacement: 'Clinical internship / residency',
      cseAverage: 'Approx. ₹45,000 – ₹95,000/month',
      cseHighest: 'Approx. ₹1,40,000+/month'
    }
  },


  /* ===================================================== */
  /* 20. SRI RAMACHANDRA                                  */
  /* ===================================================== */

  {
    id: 20,
    rank: 20,
    name: 'Sri Ramachandra Institute of Higher Education and Research',
    location: 'Chennai, Tamil Nadu',
    image: '/NEET/sri-ramachandra.jpg',

    category: 'Private Deemed University',
    foundation: '1985',

    historicalOrigin:
      'Private deemed university with a major medical and healthcare campus',

    branches: [
      'MBBS',
      'MD',
      'MS',
      'DM',
      'M.Ch',
      'Ph.D.'
    ],

    cutoffs: {

      open: [
        { branch: 'MBBS', opening: 15000, closing: 90000 },
        { branch: 'MD', opening: 3000, closing: 25000 },
        { branch: 'MS', opening: 3000, closing: 28000 }
      ],

      obcA: [
        { branch: 'MBBS', opening: 25000, closing: 120000 },
        { branch: 'MD', opening: 5000, closing: 40000 },
        { branch: 'MS', opening: 5000, closing: 45000 }
      ],

      obcB: [
        { branch: 'MBBS', opening: 25000, closing: 120000 },
        { branch: 'MD', opening: 5000, closing: 40000 },
        { branch: 'MS', opening: 5000, closing: 45000 }
      ],

      sc: [
        { branch: 'MBBS', opening: 50000, closing: 200000 },
        { branch: 'MD', opening: 10000, closing: 70000 },
        { branch: 'MS', opening: 12000, closing: 80000 }
      ],

      st: [
        { branch: 'MBBS', opening: 60000, closing: 220000 },
        { branch: 'MD', opening: 12000, closing: 80000 },
        { branch: 'MS', opening: 15000, closing: 90000 }
      ],

      ews: [
        { branch: 'MBBS', opening: 20000, closing: 100000 },
        { branch: 'MD', opening: 4000, closing: 30000 },
        { branch: 'MS', opening: 5000, closing: 35000 }
      ]
    },

    fees: [
      { branch: 'MBBS', cost: 'Approx. ₹20 – ₹25 lakh/year' },
      { branch: 'MD', cost: 'Approx. ₹8 – ₹18 lakh/year' },
      { branch: 'MS', cost: 'Approx. ₹8 – ₹18 lakh/year' },
      { branch: 'DM', cost: 'Approx. ₹10 – ₹20 lakh/year' },
      { branch: 'M.Ch', cost: 'Approx. ₹10 – ₹20 lakh/year' }
    ],

    hostel: {
      admission: 'Available',
      monthlySeatRent: 'Approx. ₹5,000 – ₹12,000/month',
      electricity: 'Approx. ₹500 – ₹1,000/month',
      accommodation: 'Campus hostel available',
      mess: 'Mess facility available'
    },

    placement: {
      engineeringMedian: 'Approx. ₹8 – ₹15 lakh/year equivalent clinical career value',
      studentsPlaced: 'Clinical internship / residency',
      csePlacement: 'Clinical internship / residency',
      cseAverage: 'Approx. ₹50,000 – ₹1,00,000/month',
      cseHighest: 'Approx. ₹1,50,000+/month'
    }
  }

]

export default neetColleges