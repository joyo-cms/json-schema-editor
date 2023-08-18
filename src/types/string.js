const attributes = {
    description: {
        name: '描述',
        type: 'string'
    },
    minLength: {
        name: '最小长度',
        type: 'number'
    },
    maxLength: {
        name: '最大长度',
        type: 'number'
    },
    pattern: {
        name: '正则表达式',
        type: 'string'
    },
    format: {
        name: '格式',
        type: 'string'
    }
}

const formats = [
    { name: 'date-time', description: '日期和时间（2018-11-13T20:20:39+00:0）' },
    { name: 'date', description: '日期（2018-11-13）' },
    { name: 'time', description: '时间（20:20:39+00:00）' },
    { name: 'email', description: '电子邮件地址' },
    { name: 'ipv4', description: 'IP地址（ipv4）' },
    { name: 'ipv6', description: 'IP地址（ipv6）' },
    { name: 'uri', description: 'URI' },
    { name: 'json-pointer', description: 'JSON 指针' },
    { name: 'regex', description: '正则表达式' },
]

const required = ['description']

export { attributes, formats, required }