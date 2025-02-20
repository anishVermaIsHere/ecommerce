import app from "./app.js";
import appConfig from "./config/appconfig.js";
import { dbConnection } from "./config/db/connect.js";


const server = app.listen(appConfig.port, () => {
  console.log(`***** Server started at port ${server.address().port} *****`);
  dbConnection();
});
