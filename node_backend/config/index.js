module.exports = {
    express: {
        port: 3000,
        static_dir: '/dist',
        home_route: '/home'
    },

    JWT: {
        secret: 'some_random_secret_123'
    }
}