
module.exports = {
    deleteUse: function(id){
        const axios = require('axios');
        axios.delete(`http://localhost:3000/users/${id}/`)
        .then(response => {
        console.log(response.data)
        })
        .catch(error => {
        console.log(error);
}); 
    },
    deleteUserUseFetch: function(id){
        const fetch = require('node-fetch');
        let url = `http://localhost:3000/users/${id}/`;
        fetch(url, { 
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(response => res.json())
            .then(response => {
                console.log('Done ', response.message);
            })
            .catch(error => {
                console.log(error);
            })
    }
};