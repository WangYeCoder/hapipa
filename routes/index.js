const GROUP_NAME = 'shops';


let index = {
    method: 'GET',
    path: `/`,
    handler: async (request, reply) => {
        reply();
    },
    config: {
        tags: ['api', 'tests'],
        description: '测试hello-hapi',
    },
}

let list = {
    method: 'GET',
    path: `/${GROUP_NAME}`,
    handler: async (request, reply) => {
        reply();
    },
    config: {
        tags: ['api', GROUP_NAME],
        description: '获取店铺列表',
    },
}
let goodList = {
    method: 'GET',
    path: `/${GROUP_NAME}/{shopId}/goods`,
    handler: async (request, reply) => {
        reply();
    },
    config: {
        tags: ['api', GROUP_NAME],
        description: '获取店铺的商品列表',
    },
}

module.exports = [index, list, goodList]