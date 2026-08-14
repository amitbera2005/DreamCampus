const chatWithAI = async (req, res) => {

  try {

    const { message } = req.body


    if (!message || !message.trim()) {

      return res.status(400).json({
        success: false,
        message: 'Message is required'
      })

    }


    const ollamaResponse = await fetch(
      'http://127.0.0.1:11434/api/chat',
      {
        method: 'POST',

        headers: {
          'Content-Type': 'application/json'
        },

        body: JSON.stringify({

          model: 'llama3.2:3b',

          messages: [

            {
              role: 'system',

              content: `
You are DreamCampus AI.

Help students with WBJEE, JEE Main and NEET.

Subjects:
Physics, Chemistry, Mathematics and Biology.

Give short, clear and useful answers.

For simple questions:
- Answer directly.
- Keep the answer within 3 to 6 sentences.

For numerical problems:
- Show only the important steps.
- Give the final answer clearly.

For concept questions:
- Give a short definition.
- Give one simple example when useful.

Do not repeat the question.
Do not add unnecessary introduction.
Do not make the answer unnecessarily long.
`
            },

            {
              role: 'user',
              content: message.trim()
            }

          ],

          stream: false,

          options: {
            temperature: 0.3,
            num_predict: 180
          }

        })
      }
    )


    if (!ollamaResponse.ok) {

      const errorText =
        await ollamaResponse.text()

      console.error(
        'Ollama response error:',
        errorText
      )

      return res.status(500).json({

        success: false,

        message:
          'Local AI failed'

      })

    }


    const data =
      await ollamaResponse.json()


    const reply =
      data?.message?.content


    if (!reply) {

      return res.status(500).json({

        success: false,

        message:
          'AI returned an empty response'

      })

    }


    res.json({

      success: true,

      data: {
        reply: reply.trim()
      }

    })


  } catch (error) {

    console.error(
      'AI controller error:',
      error
    )


    res.status(500).json({

      success: false,

      message:
        'Failed to connect to local AI'

    })

  }

}


module.exports = {
  chatWithAI
}