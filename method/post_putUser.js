
module.exports = {
//Axios
    postNewUser: function(id, first_name, last_name, email){
        const axios = require('axios');
        let arr = [];
        arr = [...arr, id, first_name, last_name, email];

        axios.post('http://localhost:3000/users', {
            id: arr[0],
            first_name: arr[1],
            last_name: arr[2],
            email: arr[3]
        })
            .then( response => {
                console.log(response.data);
            })
            .catch( error => {
                console.log(error);
            });   
    },
    putUser: function(id, first_name, last_name, email){
        const axios = require('axios');
        let arr = [];
        arr = [...arr, id, first_name, last_name, email];

        axios.put(`http://localhost:3000/users/${arr[0]}/`, {
            first_name: arr[1],
            last_name: arr[2],
            email: arr[3]
        })
            .then( response => {
                console.log(response.data);
            })
            .catch( error => {
                console.log(error);
            });   
    },
    postNewUserUseFetch: function(id, first_name, last_name, email){
        const fetch = require('node-fetch');
        let url = 'http://localhost:3000/users';
        let arr = [];
        arr = [...arr, id, first_name, last_name, email];
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: arr[0],
                first_name: arr[1],
                last_name: arr[2],
                email: arr[3]
            })
        })
            .then(response => {
                console.log(response.statusText);
            })
            .catch(error => {
                console.log(error);
            })
    },
    putUserUseFetch: function(id, first_name, last_name, email){
        const fetch = require('node-fetch');
        let arr = [];
        arr = [...arr, id, first_name, last_name, email];
        let url = `http://localhost:3000/users/${arr[0]}/`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                first_name: arr[1],
                last_name: arr[2],
                email: arr[3]
            })
        })
            .then(response => {
                console.log(response.statusText);
            })
            .catch(error => {
                console.log(error);
            })
    }
};