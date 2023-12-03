# 🚀 API Gateway Readme

## Project Overview
This project is a custom-made API Gateway, designed to route and manage HTTP requests between clients and various backend services. The gateway employs middleware components for logging, rate limiting, proxying, and CORS handling. The core purpose of this API Gateway is to streamline communication between clients and the underlying Core Service by managing routes, applying security measures, and providing a centralized entry point for the API ecosystem.

### Key Features
- Logging Middleware (logging.js): Detailed request logging using morgan for enhanced monitoring.
- Rate Limit Middleware (rateLimit.js): Dynamic rate limiting based on configurable policies defined in rateLimitPolicies.js.
- Proxy Middleware (proxy.js): Efficient forwarding of requests from the API Gateway to the Core Service using http-proxy-middleware.

### Components
1. Middleware Components
- Logging Middleware (logging.js)
     The logging middleware (morgan) is configured to log detailed information about incoming requests, such as request method, URL, response status, and response time.

- Rate Limit Middleware (rateLimit.js)
The rate limit middleware is used to control the rate of incoming requests based on predefined policies. The rate limit policies are defined in the rateLimitPolicies.js file.

- Proxy Middleware (proxy.js)
The proxy middleware (http-proxy-middleware) is responsible for forwarding requests from the API Gateway to the Core Service. It uses configurations specified in the route definitions.

2. Rate Limit Policies (rateLimitPolicies.js)
This file contains predefined rate limit configurations for different services, such as customer services, employee services, admin services, and authentication services. These configurations include settings like the time window for counting requests (windowMs) and the maximum number of requests allowed (max).

3. Route Definitions (routes.js)
The routes.js file defines the routes that the API Gateway will handle. Each route includes information such as the target URL, authentication requirement, rate limit policy, and proxy configuration. The routes are categorized into authentication routes, customer routes, and admin routes.

4. Main Runner File (app.js)
The main runner file (app.js) configures and initializes the Express application. It includes the following steps:

- Enables CORS for handling cross-origin requests.
- Utilizes the `express-status-monitor` middleware for monitoring the server's health.
- Sets up logging using the logging middleware.
- Applies rate limiting based on the predefined policies.
- Configures proxies for handling requests to different services.

### Installation Guide
Follow these steps to install and run the API Gateway:

- Clone the repository: git clone https://github.com/yourusername/api-gateway.git
- Navigate to the project directory: `cd api-gateway`
- Install dependencies: `npm install`
- Create a `.env` file with the following environment variables:
```
CORE_SERVICE_HOST=your_core_service_host
CORE_SERVICE_BASE_PATH=your_core_service_base_path
```
- Start the API Gateway: `npm start`
- The gateway will be accessible at http://localhost:3000.

### Additional Notes
Make sure to update the route definitions in `routes.js` based on the specific endpoints and services in your environment.
Customize rate limit policies in `rateLimitPolicies.js` according to the requirements of your application.
Feel free to reach out if you have any questions or need further assistance with this API Gateway project. 🌐🔧
