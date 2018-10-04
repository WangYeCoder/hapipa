// app.js
'use strict';
const Hapi = require('hapi');
require('env2')('./.env');
const config = require('./config');
const swagger = require('./plugins/hapi-swagger');
const orderrouters = require('./routes/order')
const shoprouters = require('./routes/shops')
const server = new Hapi.Server();

// 配置服务器启动 host 与端口
server.connection({
    port: config.port,
    host: config.host,
});

const init = async () => {

    await server.register([
        ...swagger
    ]);

    await server.route(
        orderrouters
    );
    await server.route(
        shoprouters
    );


    // 启动服务
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

init();