module.exports = {
    express: {
        port: 80,
        static_dir: '/dist',
        home_route: '/home'
    },

    JWT: {
        secret: 'some_random_secret_123'
    }
}