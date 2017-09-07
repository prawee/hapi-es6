/*
 * @Author: Prawee Wongsa <prawee@hotmail.com>; 
 * @Date: 2017-03-24 12:18:33 
 * @Last Modified by: Prawee Wongsa
 * @Last Modified time: 2017-09-07 12:30:47
 * Import libraries for make services
 */
import Hapi from 'hapi';
import Inert from 'inert';
import Mongoose from 'mongoose';

/**
 * Create server instance and make connection
 */
const server = new Hapi.Server();
server.connection({
  port: 8080,
  host: 'localhost'
});

/**
 * Plugin and Route 
 */
server.register([Inert], (err) => {
  if (err) {
    throw err;
  }

/**
 * Start services
 */
  server.start(err => {
    if (err) {
      console.error('Error was handled!');
      console.error(err);
    }
    console.log(`Server started at ${server.info.uri}`);
  });

});
