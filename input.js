//setup interface to handle user input from stdin
/**
 * 
 * In Client Setup, we returned a conn object from the connect function that allowed us to interact with the server.

Similarly, the stdin object returned by setupInput will allow us to listen for keyboard input and react to it.
 */
let connection;

const handleUserInput = function (input) {
  // your code here
  if(input === '\u0003') {
    process.exit();
  }

  if(input === "w") {
    connection.write("Move: up");
  } 
  
  if(input === "a") {
    connection.write("Move: left");
  }

  if(input === "s") {
    connection.write("Move: down");
  }

  if(input === "d") {
    connection.write("Move: right");
  }

  // if(input === "r") {
  //   connection.write();  
  // }

  connection.write(`Say: ${input}`);
  console.log(input);
  
};
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

//Here is an event handler listening for any data we type to the stdin,  then it will call our callback function handle user input
//Note that WE ARE NOT CALLING HANDLERUserInput, we are simply passing this function as a parameter. This is why in our function expression above we still have access to the input parameter
  stdin.on('data',handleUserInput);

  return stdin;
};

module.exports = {setupInput};