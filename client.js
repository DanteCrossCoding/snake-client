const { Server } = require('http');
const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({ 
    IP,
    PORT,
  });
    
    conn.setEncoding('utf8'); 
    
   conn.on('connect', data => {
    console.log('Successfully connected');
    conn.write('Name: DSC');
    // conn.write("Move: up");
    // conn.write("Move: down");
    // conn.write("Move: left");
    // conn.write("Move: right");
  })

  conn.on('data', (data) => {
  console.log('Server says: ', data);
  });

  return conn;
}
module.exports = connect