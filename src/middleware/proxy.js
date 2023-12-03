// For More Information: https://www.npmjs.com/package/http-proxy-middleware
const { createProxyMiddleware } = require('http-proxy-middleware');

const setupProxies = (app, routes) => {
    routes.forEach(r => {
        app.use(r.url, createProxyMiddleware(r.proxy));
    })
}

exports.setupProxies = setupProxies