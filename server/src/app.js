import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import appConfig from "./config/appconfig.js";
import  router  from "./routes/index.js";



const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false, limit: "1mb" }));
app.use(cors({
  origin: appConfig.corsOrigin,
  methods: ["GET", "POST", "DELETE", "PUT", "PATCH", "OPTIONS"],
  credentials: true,
}));
app.use('/api/v1/', router);

app.get("/", (_, res) => {
  res.json({
    message: `Ecommerce server running at port:${appConfig.port}`,
    author: 'Anish Verma',
    time: `${new Date().toDateString()} ${new Date().toLocaleTimeString()}`,
  });
});



export default app;