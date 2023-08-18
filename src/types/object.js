const attributes = {
    description: {
        name: '描述',
        type: 'string'
    },
    key: {
        name: '主键',
        type: 'string'
    },
    another_key: {
        name: '第二主键',
        type: 'string'
    },
    properties: {
        name: '属性',
        type: 'object'
    }
}
const required = ['description']
export { attributes, required }