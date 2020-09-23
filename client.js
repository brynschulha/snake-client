const net = require('net');
const { IP, PORT } = require('./constants');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('connect', () => {
    conn.write("Name: BWS");
  });

  // conn.on('connect', (data) => {
  //   conn.write("Move: up");
  // });

  // conn.on('connect', (data) => {
  //   setInterval (() => {
  //   conn.write("Move: left");
  //   }, 500);
  // });

  // conn.on('connect', (data) => {
  //   setTimeout (() => {
  //   conn.write("Move: up");
  //   }, 1000);
  // });

  // conn.on('connect', (data) => {
  //   setTimeout (() => {
  //   conn.write("Move: left");
  //   }, 1500);
  // });

  conn.on('connect', () => {  
    console.log("Successfully connected to game server");
  });

  conn.on('data', (data) => {  
    console.log('Incomming:', data);
  });

  return conn;
}

module.exports = {connect};