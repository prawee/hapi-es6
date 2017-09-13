/*
 * @Author: Prawee Wongsa <prawee.w@integra8t.com>
 * @Date: 2017-09-12 12:45:13 
 * @Last Modified by: Prawee Wongsa
 * @Last Modified time: 2017-09-13 12:17:33
 */
import Good from 'good';

exports.register = (server, options, next) => {
    console.log('plugins is loaded.');
    server.register({
        register: Good,
        options: {
            reporters: {
            console: [
                {
                module: 'good-squeeze',
                name: 'Squeeze',
                args: [{
                    log: '*',
                    response: '*',
                    payload: '*'
                }]
                },
                {
                module: 'good-console'
                },
                'stdout'
            ]
            }
        }
    }, err => {
        if (err) console.error(err);
    });
    next();
};

exports.register.attributes = {
    name: 'plugins'
};
