// app.js
'use strict';
const Hapi = require('hapi');
const config = require('./config');
const hello_route = require('./routes/index');

const server = new Hapi.Server();
// 配置服务器启动 host 与端口
server.connection({
    port: config.port,
    host: config.host,
});

const init = async () => {
    try {
        server.route([
            // 创建一个简单的 hello hapi 接口
            {
                ...hello_route
            },
        ]);
    } catch (e) {
        console.log(e);   // uncaught
    }

    // 启动服务
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

init();