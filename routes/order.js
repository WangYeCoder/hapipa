const GROUP_NAME = 'orders';
const Joi = require('joi');

let ordercreate = {
    method: 'POST',
    path: `/${GROUP_NAME}`,
    handler: async (request, reply) => {
        reply('123');
    },
    config: {
        tags: ['api', GROUP_NAME],
        description: '创建订单',
    },
};

let orderpay = {
    method: 'POST',
    path: `/${GROUP_NAME}/{orderId}/pay`,
    handler:
        async (request, reply) => {
            reply();
        },
    config:
        {
            tags: ['api', GROUP_NAME],
            description:
                '支付某条订单',
        },
};

module.exports = [ordercreate, orderpay];
