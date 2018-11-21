
module.exports = {
  findUserById: function(end, start = 1){
    const axios = require('axios');
    axios.get(`http://localhost:3000/users?id_gte=${start}&id_lte=${end}`)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      }); 
  },
  findUserByIdUseFetch: function(end, start = 1){
    const fetch = require('node-fetch');
    let url = `http://localhost:3000/users?id_gte=${start}&id_lte=${end}`;
    fetch(url)
      .then(response => {
        response.json().then(data => {
          console.log(data);
        })
      })
      .catch(error => {
        console.log(error);
      });
  }
};
