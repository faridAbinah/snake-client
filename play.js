
//const connect = require('./client');
const {connect, net} = require('./client');
//this is how we unpack data and functions we are recieving from our clie

// setup interface to handle user input from stdin
/**
 * 
 * In Client Setup, we returned a conn object from the connect function that allowed us to interact with the server.

Similarly, the stdin object returned by setupInput will allow us to listen for keyboard input and react to it.
 */
const handleUserInput = function (input) {
  // your code here
  if(input === '\u0003') {
    process.exit();
  }

  // if(input === 'l') {
  //   process.exit();
  // }

  console.log(input);
};
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

//Here is an event handler listening for any data we type to the stdin,  then it will call our callback function handle user input
//Note that WE ARE NOT CALLING HANDLERUserInput, we are simply passing this function as a parameter. This is why in our function expression above we still have access to the input parameter
  stdin.on('data',handleUserInput);

  return stdin;
};





console.log("Connecting ...");
connect();

setupInput();