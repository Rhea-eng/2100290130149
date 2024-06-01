const dotenv = require('dotenv');
dotenv.config();

const SIZE = parseInt(process.env.SIZE);
const API_URLS = {
  p: process.env.P_API_URL,
  f: process.env.F_API_URL,
  e: process.env.E_API_URL,
  r: process.env.R_API_URL,
};

module.exports = {
  SIZE,
  API_URLS,
};
