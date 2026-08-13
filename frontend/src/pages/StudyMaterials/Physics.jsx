import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Physics() {

  const navigate = useNavigate()

  const [materials, setMaterials] = useState({})
  const [loading, setLoading] = useState(true)

  const materialTypes = [
    {
      key: 'notes',
      title: 'Notes',
      icon: '📘',
    },
    {
      key: 'formulas',
      title: 'Formulas',
      icon: '📐',
    },
    {
      key: 'pyq',
      title: 'PYQ',
      icon: '📝',
    },
    {
      key: 'practice_questions',
      title: 'Practice Questions',
      icon: '🎯',
    },
  ]

  // ========================================
  // LOAD PHYSICS MATERIALS FROM BACKEND
  // ========================================

  useEffect(() => {

    const loadMaterials = async () => {

      try {

        const response = await fetch(
          'http://localhost:5000/api/study-materials/Physics'
        )

        const result = await response.json()

        if (!response.ok || !result.success) {
          throw new Error(
            result.message ||
            'Failed to load Physics materials'
          )
        }

        console.log(
          'Physics data from backend:',
          result.data
        )

        setMaterials(result.data)

      } catch (error) {

        console.error(
          'Error loading Physics materials:',
          error
        )

        setMaterials({})

      } finally {

        setLoading(false)

      }

    }

    loadMaterials()

  }, [])


  // ========================================
  // OPEN PDF
  // ========================================

  const openMaterial = (type) => {

    const pdfPath = materials[type.key]

    console.log(
      'Clicked:',
      type.key
    )

    console.log(
      'PDF path:',
      pdfPath
    )

    if (!pdfPath) {

      alert(
        `${type.title} is not available yet.`
      )

      return
    }

    const pdfUrl =
      `http://localhost:5173${pdfPath}`

    console.log(
      'Opening PDF:',
      pdfUrl
    )

    window.open(
      pdfUrl,
      '_blank'
    )
  }


  return (
    <main className="material-detail-page">

      <div className="material-detail-container">


        {/* BACK BUTTON */}

        <button
          className="material-back-button"
          onClick={() => navigate(-1)}
          type="button"
        >
          ← Back
        </button>


        {/* HEADER */}

        <div className="material-detail-header">

          <div className="material-detail-icon physics-detail-icon">
            ⚡
          </div>

          <span>
            DREAMCAMPUS
          </span>

          <h1>
            Physics
          </h1>

          <p>
            Notes, formulas, PYQs and practice questions.
          </p>

        </div>


        {/* MATERIALS */}

        {loading ? (

          <div className="material-loading">
            Loading materials...
          </div>

        ) : (

          <div className="material-type-grid">

            {materialTypes.map((type) => (

              <button
                key={type.key}
                className="material-type-card"
                onClick={() =>
                  openMaterial(type)
                }
                type="button"
              >

                <div className="material-type-icon">
                  {type.icon}
                </div>


                <div className="material-type-info">

                  <h2>
                    {type.title}
                  </h2>

                  <p>
                    Access Physics{' '}
                    {type.title.toLowerCase()}.
                  </p>

                </div>


                <span>
                  →
                </span>

              </button>

            ))}

          </div>

        )}

      </div>

    </main>
  )
}

export default Physics