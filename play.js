
//const connect = require('./client');
const {connect, net} = require('./client');
//this is how we unpack data and functions we are recieving from our client
const {setupInput} = require('./input');
//We dont have to unpack our handleUserInput function because it is only called by our setupInput function and it is already in the same file as setInput







console.log("Connecting ...");
connect();

setupInput(connect());