

const net = require("net");
// establishes a connection with the game server
//used createConnection function to create an object called conn
//conn object represents the connection that you have with the server
//Conn object is filled with useful properties that can now be used to interact with the server.
const connect = function () {
  const conn = net.createConnection({
    host:'135.23.223.133', // IP address here,
    port: 50542 // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    const name = "AB"
    conn.write('Name: AB')
    // always use single quotes and not template literals
   // conn.write('Move: up');

    
  });

  conn.on("data", (data) => {
    console.log("DATA CAME IN");
    console.log(data);
  })

  

  

  return conn;
};

module.exports = {
  connect,
  net
};