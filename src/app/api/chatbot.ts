import { NextApiRequest, NextApiResponse } from 'next';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Only POST requests are allowed' });
    return;
  }

  const { query } = req.body;

  if (!query) {
    res.status(400).json({ message: 'Query is required' });
    return;
  }

  try {
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: query,
      max_tokens: 150,
    });

    const result = response.data.choices[0].text;
    res.status(200).json({ response: result });
  } catch (error) {
    console.error('ERROR:', error.response ? error.response.data : error.message);
    res.status(500).json({ error: 'Error detecting intent' });
  }
}
