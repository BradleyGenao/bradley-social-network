const baseUrl =
    process.env.NODE_ENV !== 'production'
        ? 'http://localhost:3000'
        : 'https://social-network-alpha.vercel.app';

module.exports = baseUrl;
