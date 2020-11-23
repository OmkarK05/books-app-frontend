module.exports = {
    client: {
        service : {
            name : 'frontend',
            url : 'http://localhost:8000/graphql',
        },
        includes : [
            'src/**/*.vue',
            'src/**/*.js'
        ],
    },
}