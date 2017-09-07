/*
 * @Author: Prawee Wongsa <prawee@hotmail.com>
 * @Date: 2017-09-07 17:48:02 
 * @Last Modified by: Prawee Wongsa
 * @Last Modified time: 2017-09-07 18:36:34
 */
exports.register = (server, options, next) => {
    /**
     * default route
     */
    server.route({
        method: 'GET',
        path: '/',
        config: {
            handler: (request, reply) => {
                reply({
                    status: 'running... :)'
                })
            }
        }
    });
    return next();
};

exports.register.attributes = {
    name: 'routes'
};