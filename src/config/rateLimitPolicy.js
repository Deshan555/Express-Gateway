
// For More Information: https://www.npmjs.com/package/express-rate-limit

// YOU can define your own rate limit config policies here

const defaultRateLimitConfigPolicy = {
    windowMs: 15 * 60 * 1000,
    max: 5
};

const customerServicesRateLimitConfigPolicy = {
    windowMs: 15 * 60 * 1000,
    max: 5
};

const employeeServicesRateLimitConfigPolicy = {
    windowMs: 15 * 60 * 1000,
    max: 5
};

const adminServicesRateLimitConfigPolicy = {
    windowMs: 15 * 60 * 1000,
    max: 5
};

const authServicesRateLimitConfigPolicy = {
    windowMs: 15 * 60 * 1000,
    max: 5
};

module.exports = {
    defaultRateLimitConfigPolicy,
    customerServicesRateLimitConfigPolicy,
    employeeServicesRateLimitConfigPolicy,
    adminServicesRateLimitConfigPolicy,
    authServicesRateLimitConfigPolicy
}