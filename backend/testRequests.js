const axios = require('axios');

axios.get('https://restcountries.com/v3.1/name/colombia')
    .then((response) =>{
        console.log(response.data);
})