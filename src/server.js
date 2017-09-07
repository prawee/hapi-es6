/*
 * @Author: Prawee Wongsa <prawee@hotmail.com>; 
 * @Date: 2017-03-24 12:18:33 
 * @Last Modified by: Prawee Wongsa
 * @Last Modified time: 2017-09-07 17:22:31
 * Import libraries for make services
 */
import Glue from 'glue';
import JsonMerger from 'json_merger';

/**
 * Create server instance and make connection
 */
const options = {
  relativeTo: __dirname
};
const Manifest = JsonMerger.fromFile('config/app.json');
Glue.compose(Manifest, options, (err, server) => {
  if (err) {
    throw err;
  }

  // start service
  server.start(error => {
    if (error) {
      console.error(error);
    }
    console.log(`Server started at ${server.info.uri}`);
  });
});
