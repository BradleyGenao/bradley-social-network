const baseUrl =
    process.env.NODE_ENV !== 'production'
        ? 'http://localhost:3000'
        : 'https://social-network-sigma.vercel.app';

module.exports = baseUrl;
