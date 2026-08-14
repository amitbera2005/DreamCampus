import { useState } from 'react'
import './AIDashboard.css'


function AIDashboard() {

  const [message, setMessage] = useState('')

  const [chatMessages, setChatMessages] = useState([
    {
      role: 'ai',
      text:
        "Hi! 👋 I'm your AI study assistant. Ask me a question and I'll help you understand it step by step.",
    },
  ])

  const [loading, setLoading] = useState(false)


  /* ============================= */
  /* SEND MESSAGE TO AI */
  /* ============================= */

  const handleSend = async (event) => {

    event.preventDefault()

    const userMessage = message.trim()

    if (!userMessage || loading) {
      return
    }


    /* ============================= */
    /* SHOW USER MESSAGE */
    /* ============================= */

    setChatMessages((previousMessages) => [

      ...previousMessages,

      {
        role: 'user',
        text: userMessage,
      },

    ])


    setMessage('')
    setLoading(true)


    try {

      const response = await fetch(
        'http://localhost:5000/api/ai/chat',
        {
          method: 'POST',

          headers: {
            'Content-Type': 'application/json',
          },

          body: JSON.stringify({
            message: userMessage,
          }),
        }
      )


      const result = await response.json()


      if (!response.ok || !result.success) {

        throw new Error(
          result.message ||
          'Failed to get AI response'
        )

      }


      /* ============================= */
      /* SHOW AI RESPONSE */
      /* ============================= */

      setChatMessages((previousMessages) => [

        ...previousMessages,

        {
          role: 'ai',
          text: result.data.reply,
        },

      ])

    } catch (error) {

      console.error(
        'AI chat error:',
        error
      )


      setChatMessages((previousMessages) => [

        ...previousMessages,

        {
          role: 'ai',
          text:
            'Sorry, I could not connect to the AI right now. Please try again.',
        },

      ])

    } finally {

      setLoading(false)

    }

  }


  return (
    <main className="ai-dashboard-page">

      <div className="ai-dashboard-container">


        {/* ============================= */}
        {/* HEADER */}
        {/* ============================= */}

        <section className="ai-dashboard-header">

          <div className="ai-header-icon">
            🤖
          </div>

          <div className="ai-header-content">

            <span>
              DREAMCAMPUS AI
            </span>

            <h1>
              Your Personal AI Study Assistant
            </h1>

            <p>
              Ask questions and improve your preparation
              with your personal AI study assistant.
            </p>

          </div>

        </section>


        {/* ============================= */}
        {/* WELCOME */}
        {/* ============================= */}

        <section className="ai-welcome-card">

          <div>

            <span className="ai-welcome-label">
              AI STUDY ASSISTANT
            </span>

            <h2>
              What do you want to study today?
            </h2>

            <p>
              Ask me anything about Physics, Chemistry,
              Mathematics, Biology, WBJEE, JEE Main or NEET.
            </p>

          </div>

          <div className="ai-welcome-emoji">
            ✨
          </div>

        </section>


        {/* ============================= */}
        {/* AI CHAT */}
        {/* ============================= */}

        <section className="ai-chat-section">

          <div className="ai-chat-header">

            <div className="ai-chat-title">

              <div className="ai-chat-icon">
                💬
              </div>

              <div>

                <span>
                  AI CHAT
                </span>

                <h2>
                  Ask DreamCampus AI
                </h2>

              </div>

            </div>


            <div className="ai-online-status">

              <span />

              Online

            </div>

          </div>


          {/* ============================= */}
          {/* CHAT BODY */}
          {/* ============================= */}

          <div className="ai-chat-body">

            {chatMessages.map(
              (chatMessage, index) => (

                <div
                  key={index}
                  className={`ai-message ${
                    chatMessage.role === 'user'
                      ? 'ai-message-user'
                      : 'ai-message-bot'
                  }`}
                >

                  <div className="ai-message-avatar">

                    {chatMessage.role === 'user'
                      ? '👤'
                      : '🤖'}

                  </div>


                  <div className="ai-message-content">

                    <span>

                      {chatMessage.role === 'user'
                        ? 'You'
                        : 'DreamCampus AI'}

                    </span>

                    <p>
                      {chatMessage.text}
                    </p>

                  </div>

                </div>

              )
            )}


            {/* ============================= */}
            {/* LOADING */}
            {/* ============================= */}

            {loading && (

              <div className="ai-message ai-message-bot">

                <div className="ai-message-avatar">
                  🤖
                </div>

                <div className="ai-message-content">

                  <span>
                    DreamCampus AI
                  </span>

                  <p>
                    Thinking...
                  </p>

                </div>

              </div>

            )}

          </div>


          {/* ============================= */}
          {/* CHAT INPUT */}
          {/* ============================= */}

          <form
            className="ai-chat-input-area"
            onSubmit={handleSend}
          >

            <input
              type="text"
              value={message}
              onChange={(event) =>
                setMessage(event.target.value)
              }
              placeholder={
                loading
                  ? 'DreamCampus AI is thinking...'
                  : 'Ask anything about your studies...'
              }
              disabled={loading}
            />

            <button
              type="submit"
              disabled={
                !message.trim() ||
                loading
              }
            >
              ➤
            </button>

          </form>

        </section>


        {/* ============================= */}
        {/* FOOTER */}
        {/* ============================= */}

        <div className="ai-dashboard-footer">

          <span>
            🤖
          </span>

          DreamCampus AI · Your intelligent study companion

        </div>

      </div>

    </main>
  )
}


export default AIDashboard