import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Chemistry() {

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

  useEffect(() => {

    const loadMaterials = async () => {

      try {

        const response = await fetch(
          'http://localhost:5000/api/study-materials/Chemistry'
        )

        if (!response.ok) {
          throw new Error('Failed to load Chemistry materials')
        }

        const result = await response.json()

        if (result.success && result.data) {
          setMaterials(result.data)
        } else {
          throw new Error('Invalid API response')
        }

      } catch (error) {

        console.error(
          'Error loading Chemistry materials:',
          error
        )

      } finally {

        setLoading(false)

      }

    }

    loadMaterials()

  }, [])

  const openMaterial = (type) => {

    const pdfPath = materials[type.key]

    console.log('Clicked:', type.title)
    console.log('PDF path:', pdfPath)

    if (!pdfPath) {

      alert(
        `${type.title} is not available yet.`
      )

      return
    }

    window.open(
      `http://localhost:5173${pdfPath}`,
      '_blank'
    )
  }

  return (
    <main className="material-detail-page">

      <div className="material-detail-container">

        <button
          className="material-back-button"
          onClick={() => navigate(-1)}
          type="button"
        >
          ← Back
        </button>

        <div className="material-detail-header">

          <div className="material-detail-icon chemistry-detail-icon">
            🧪
          </div>

          <span>
            DREAMCAMPUS
          </span>

          <h1>
            Chemistry
          </h1>

          <p>
            Notes, formulas, PYQs and practice questions.
          </p>

        </div>

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
                onClick={() => openMaterial(type)}
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
                    Access Chemistry {type.title.toLowerCase()}.
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

export default Chemistry