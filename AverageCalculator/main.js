const express = require('express');
const { fetchNumbers, isUnique, calculateAverage } = require('./helper');
const { SIZE, API_URL } = require('./configuration');

const app = express();
const port = process.env.PORT;

let numberWindow = [];

app.get('/numbers/:numberId', async (req, res) => {
  const numberId = req.params.numberId;s
  const validNumberIds = new Set(['p', 'f', 'e', 'r']);
  if (!validNumberIds.has(numberId)) {
    return res.status(400).json({ error: 'The number id is invalid' });
  }

  const windowPrevState = [...numberWindow];

  try {
    let newNumbers = await fetchNumbers(numberId);
    newNumbers = newNumbers.filter(num => isUnique(num, numberWindow));

    newNumbers.forEach(num => {
      if (numberWindow.length >= SIZE) {
        numberWindow.shift();
      }
      numberWindow.push(num);
    });

    const windowCurrState = [...numberWindow];
    const avg = calculateAverage(numberWindow);

    res.json({
      windowPrevState,
      windowCurrState,
      numbers: newNumbers,
      avg,
    });
  } catch (error) {
    console.error('Error fetching numbers:', error.message);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
