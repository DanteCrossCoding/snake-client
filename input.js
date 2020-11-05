const net = require('net');
const constants = require('./constants');
let connection;

const userInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }  
  conn.write(MOVE_UP_KEY)
  conn.write(MOVE_DOWN_KEY)
  
  if ( key === 'a') {
    conn.write('Move: left')
  }
  if ( key === 'd') {
    conn.write('Move: right')
  }
  if (key === 'h') {
    conn.write('Say: Hi!')
  }
  if (key === 'g') {
    conn.write('Say: GG')
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