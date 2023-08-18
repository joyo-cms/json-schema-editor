const attributes = {
    description: {
        name: '描述',
        type: 'string'
    },
    minimum: {
        name: '最小值（包含）',
        type: 'number'
    },
    maximum: {
        name: '最大值（包含）',
        type: 'number'
    },
    exlusiveMinimum: {
        name: '最小值（不包含）',
        type: 'number'
    },
    exlusiveMaxinum: {
        name: '最大值（不包含）',
        type: 'number'
    }
}
const required = ['description']
export { attributes, required }