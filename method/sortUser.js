

module.exports = {
    sortUser: function(property, type = 'asc'){
        const axios = require('axios');
        axios.get(`http://localhost:3000/users/?_sort=${property}&_order=${type}`)
        .then(response => {
            data = response.data;
            data.forEach(e => {
                console.log(`${e.first_name}, ${e.last_name}, ${e.email}`)
            });
        })
        .catch(error => {
            console.log(error);
        });
    },
    sortUserUseFetch: function(property, type = 'asc'){
        const fetch = require('node-fetch');
        let url = `http://localhost:3000/users/?_sort=${property}&_order=${type}`;
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