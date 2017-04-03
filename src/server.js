/**
 * Import libraries for make services
 */
import Hapi from 'hapi';
import Inert from 'inert';
import RestHapi from 'rest-hapi';
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
server.register([Inert, {
  register: RestHapi,
  options: {
    mongoose: Mongoose
  }
}
], (err) => {
  if (err) {
    throw err;
  }
  // server.route({
  //   method: 'GET',
  //   path: '/',
  //   handler: (request, reply) => {
  //     reply.file('./public/index.html');
  //   }
  // });

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
