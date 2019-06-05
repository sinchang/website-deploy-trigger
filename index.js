'use strict'

const axios = require('axios')

axios.post('https://api.netlify.com/build_hooks/5cf771bdd78373f395fedb8b')
  .then(res => console.log(res))
  .catch(e => console.log(e))