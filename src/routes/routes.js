// Here we define the routes that will be used by the API Gateway to proxy requests to the Core Service.
require('dotenv').config();
const rateLimitConfig = require ("../config/rateLimitPolicy");

const coreServiceHost = process.env.CORE_SERVICE_HOST;
const coreServiceBaseURL = process.env.CORE_SERVICE_BASE_PATH;

const createAdminRoutes = (hostURL, baseURL, targetSuffix) => ({
    url: `${baseURL}${targetSuffix}`,
    auth: false,
    rateLimit: rateLimitConfig.adminServicesRateLimitConfigPolicy,
    proxy: {
        target: `${hostURL}${baseURL}${targetSuffix}`,
        changeOrigin: true,
        pathRewrite: {
            [`^${baseURL}${targetSuffix}`]: '',
        },
    }
});

const createAuthRoutes = (hostURL, baseURL, targetSuffix) => ({
    url: `${baseURL}${targetSuffix}`,
    auth: false,
    rateLimit: rateLimitConfig.authServicesRateLimitConfigPolicy,
    proxy: {
        target: `${hostURL}${baseURL}${targetSuffix}`,
        changeOrigin: true,
        pathRewrite: {
            [`^${baseURL}${targetSuffix}`]: '',
        },
    }
});

const createCustomerRoutes = (hostURL, baseURL, targetSuffix) => ({
    url: `${baseURL}${targetSuffix}`,
    auth: true,
    rateLimit: rateLimitConfig.customerServicesRateLimitConfigPolicy,
    proxy: {
        target: `${hostURL}${baseURL}${targetSuffix}`,
        changeOrigin: true,
        pathRewrite: {
            [`^${baseURL}${targetSuffix}`]: '',
        },
    }
});

const ROUTES = [
    createAuthRoutes(coreServiceHost, coreServiceBaseURL, '/auth/customer'),
    createAuthRoutes(coreServiceHost, coreServiceBaseURL, '/auth/employee'),
    createCustomerRoutes(coreServiceHost, coreServiceBaseURL, '/customers'),
    createCustomerRoutes(coreServiceHost, coreServiceBaseURL, '/customers/add'),
    createCustomerRoutes(coreServiceHost, coreServiceBaseURL, '/customers/:CustomerID'),
    createCustomerRoutes(coreServiceHost, coreServiceBaseURL, '/customers/update/:CustomerID'),
    createCustomerRoutes(coreServiceHost, coreServiceBaseURL, '/customers/drop/:CustomerID'),
    createAdminRoutes(coreServiceHost, coreServiceBaseURL, '/employees'),
    createAdminRoutes(coreServiceHost, coreServiceBaseURL, '/employees/add'),
    createAdminRoutes(coreServiceHost, coreServiceBaseURL, '/employees/:EmployeeID'),
    createAdminRoutes(coreServiceHost, coreServiceBaseURL, '/employees/update/:EmployeeID'),
    createAdminRoutes(coreServiceHost, coreServiceBaseURL, '/employees/drop/:EmployeeID'),
    createAdminRoutes(coreServiceHost, coreServiceBaseURL, '/regions'),
    createAdminRoutes(coreServiceHost, coreServiceBaseURL, '/regions/add'),
    createAdminRoutes(coreServiceHost, coreServiceBaseURL, '/regions/:RegionID'),
    createAdminRoutes(coreServiceHost, coreServiceBaseURL, '/regions/update/:RegionID'),
    createAdminRoutes(coreServiceHost, coreServiceBaseURL, '/regions/drop/:RegionID'),
    createAdminRoutes(coreServiceHost, coreServiceBaseURL, '/factories'),
    createAdminRoutes(coreServiceHost, coreServiceBaseURL, '/factories/add'),
    createAdminRoutes(coreServiceHost, coreServiceBaseURL, '/factories/:FactoryID'),
    createAdminRoutes(coreServiceHost, coreServiceBaseURL, '/factories/update/:FactoryID'),
    createAdminRoutes(coreServiceHost, coreServiceBaseURL, '/factories/drop/:FactoryID'),
    createAdminRoutes(coreServiceHost, coreServiceBaseURL, '/environmentalists'),
    createAdminRoutes(coreServiceHost, coreServiceBaseURL, '/environmentalists/add'),
    createAdminRoutes(coreServiceHost, coreServiceBaseURL, '/environmentalists/:EnvironmentalZoneID'),
    createAdminRoutes(coreServiceHost, coreServiceBaseURL, '/environmentalists/update/:EnvironmentalZoneID'),
    createAdminRoutes(coreServiceHost, coreServiceBaseURL, '/environmentalists/drop/:EnvironmentalZoneID'),
    createAdminRoutes(coreServiceHost, coreServiceBaseURL, '/vehicles'),
    createAdminRoutes(coreServiceHost, coreServiceBaseURL, '/vehicles/add'),
    createAdminRoutes(coreServiceHost, coreServiceBaseURL, '/vehicles/:VehicleID'),
    createAdminRoutes(coreServiceHost, coreServiceBaseURL, '/vehicles/update/:VehicleID'),
    createAdminRoutes(coreServiceHost, coreServiceBaseURL, '/vehicles/drop/:VehicleID'),
    createAdminRoutes(coreServiceHost, coreServiceBaseURL, '/dailyTeaCollection'),
    createAdminRoutes(coreServiceHost, coreServiceBaseURL, '/dailyTeaCollection/add'),
    createAdminRoutes(coreServiceHost, coreServiceBaseURL, '/dailyTeaCollection/:DailyTeaCollectionID'),
    createAdminRoutes(coreServiceHost, coreServiceBaseURL, '/dailyTeaCollection/update/:DailyTeaCollectionID'),
    createAdminRoutes(coreServiceHost, coreServiceBaseURL, '/dailyTeaCollection/drop/:DailyTeaCollectionID'),
    createAdminRoutes(coreServiceHost, coreServiceBaseURL, '/fertilizers'),
    createAdminRoutes(coreServiceHost, coreServiceBaseURL, '/fertilizers/add'),
    createAdminRoutes(coreServiceHost, coreServiceBaseURL, '/fertilizers/:FertilizerID'),
    createAdminRoutes(coreServiceHost, coreServiceBaseURL, '/fertilizers/update/:FertilizerID'),
    createAdminRoutes(coreServiceHost, coreServiceBaseURL, '/fertilizers/drop/:FertilizerID'),
    createAdminRoutes(coreServiceHost, coreServiceBaseURL, '/fieldInfo'),
    createAdminRoutes(coreServiceHost, coreServiceBaseURL, '/fieldInfo/add'),
    createAdminRoutes(coreServiceHost, coreServiceBaseURL, '/fieldInfo/:FieldID'),
    createAdminRoutes(coreServiceHost, coreServiceBaseURL, '/fieldInfo/update/:FieldID'),
    createAdminRoutes(coreServiceHost, coreServiceBaseURL, '/fieldInfo/drop/:FieldID'),
    createAdminRoutes(coreServiceHost, coreServiceBaseURL, '/roadRouting'),
    createAdminRoutes(coreServiceHost, coreServiceBaseURL, '/roadRouting/add'),
    createAdminRoutes(coreServiceHost, coreServiceBaseURL, '/roadRouting/:RoadRoutingID'),
    createAdminRoutes(coreServiceHost, coreServiceBaseURL, '/roadRouting/update/:RoadRoutingID'),
    createAdminRoutes(coreServiceHost, coreServiceBaseURL, '/roadRouting/drop/:RoadRoutingID'),
];

module.exports = {
    ROUTES
};