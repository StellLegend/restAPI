
 module.exports = {
    findFullTextAxios: function(param){
        const axios = require('axios');
        axios.get(`http://localhost:3000/users?q=${param}`)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        })
    },
    findFullTextUseFetch: function(param){
        const fetch = require('node-fetch');
        let url = `http://localhost:3000/users?q=${param}`;
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