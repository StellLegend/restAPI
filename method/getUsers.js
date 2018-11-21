
module.exports = {
//Axios
    getUser: function(){
      const axios = require('axios');
      axios.get('http://localhost:3000/users')
        .then(response => {
          data = response.data;
          data.forEach(e => {
            console.log(`${e.first_name}, ${e.last_name}, ${e.email}`);
          });
        })
        .catch(error => {
          console.log(error);
        });  
    },
    getUserById: function(id){
      const axios = require('axios');
      let link = `http://localhost:3000/users/${id}`;
      axios.get(link)
        .then(response => {
          data = response.data;
          console.log(data);
        })
        .catch(error => {
          console.log(error);
        });  
    },
//Fetch
    getUserUseFetch: function(){
      const fetch = require('node-fetch');
      let url = `http://localhost:3000/users`;
      fetch(url)
          .then(response => {
              response.json().then(data => {
                  console.log(data);
              })
          })
          .catch(error => {
            console.log(error);
          })
    },
    getUserByIdUseFetch: function(id){
      const fetch = require('node-fetch');
      let url = `http://localhost:3000/users/${id}`;
      fetch(url)
          .then(response => {
              response.json().then(data => {
                  console.log(data);
              })
          })
          .catch(error => {
            console.log(error);
          })
    }
};