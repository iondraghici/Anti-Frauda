const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

const OPENAI_API_KEY = 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

app.post('/api/generate-response', async (req, res) => {
  const userText = req.body.text;
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: "gpt-4",
        messages: [{ role: "user", content: userText }],
        max_tokens: 120,
        temperature: 0.7
      },
      {
        headers: {
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );
    res.json({ reply: response.data.choices[0].message.content });
  } catch (err) {
    res.status(500).send('Error generating response');
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));
