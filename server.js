const express = require('express');
const cors = require('cors');
const {setupLogging} = require("./src/middleware/logging");
const {setupProxies} = require("./src/middleware/proxy");
const {ROUTES} = require("./src/routes/routes");
const {setupRateLimit} = require("./src/middleware/ratelimit");

const app = express()
const port = 3000;
app.use(cors());

app.use(require('express-status-monitor')());
setupLogging(app);
setupRateLimit(app, ROUTES);
setupProxies(app, ROUTES);


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})