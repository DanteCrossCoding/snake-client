const net = require('net');
let connection;

const userInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }  
  if ( key === w) {
    conn.write('Move: up')
  }
  if ( key === s) {
    conn.write('Move: down')
  }
  if ( key === a) {
    conn.write('Move: left')
  }
  if ( key === d) {
    conn.write('Move: right')
  }
};


const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', userInput)
  
  return stdin;
}

module.exports = setupInput