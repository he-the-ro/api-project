const express = require('express');
const { getCoinData } = require('./api');
const app = express();
const port = process.env.PORT || 3001;

app.get('/coins/:id', async (req, res) => {
  try {
    const coinData = await getCoinData(req.params.id);
    res.json(coinData);
  } catch (error) {
    res.status(500).send({ error: 'An error occurred fetching coin data.' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
