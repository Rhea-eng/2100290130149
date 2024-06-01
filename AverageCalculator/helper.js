const axios = require('axios');
const { API_URLS } = require('./configuration');

const fetchNumbers = async numberId => {
  const url = API_URLS[numberId];
  const response = await axios.get(url, { timeout: 500 });

  if (response.status === 200) {
    if (numberId === 'e' || numberId === 'r') {
      return response.data
        .split('\n')
        .map(num => parseInt(num))
        .filter(num => !isNaN(num));
    }
    return response.data.slice(0, 10);
  }

  return [];
};

const isUnique = (number, numberList) => {
  return !numberList.includes(number);
};

const calculateAverage = numbers => {
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return parseFloat((sum / numbers.length).toFixed(2));
};

module.exports = {
  fetchNumbers,
  isUnique,
  calculateAverage,
};
