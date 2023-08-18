const attributes = {
    description: {
        name: '描述',
        type: 'string'
    },
    maxItems: {
        name: '最大元素个数',
        type: 'integer'
    },
    minItems: {
        name: '最小元素个数',
        type: 'integer'
    },
    uniqueItems: {
        name: '元素不可重复',
        type: 'boolean'
    }
}
const required = ['description']
export { attributes, required }