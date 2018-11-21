
var deleteUser = require('./method/deleteUser');
var findFull   = require('./method/findFullText');
var findUserId = require('./method/findUserById');
var getUsers   = require('./method/getUsers');
var postPut    = require('./method/post_putUser');
var sort       = require('./method/sortUser');

//Test
//postPut.postNewUserUseFetch(8, 'Huy', "Hiem", 'Kiemngyen@gmail.com');
findFull.findFullTextUseFetch("Lucy");