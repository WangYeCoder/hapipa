const models = require("../models");

module.exports = [
    {
        method: 'get',
        path: '/shops',
        handler: async (request, reply) => {
            // 通过 await 来异步查取数据
            const result = await models.shop.findAll({
                attributes: [
                    'id', 'name', 'thumb_url'
                ]
            });

            reply(result)
        },
    }
];