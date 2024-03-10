import express from 'express'
import {pi} from "./route/pi";
import {health} from "./route/health";

const app = express();
const port = 3000

// simple route mapping
app.get('/pi', pi);
app.get('/health', health);

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}. Make a request to http://localhost:${port}/pi?input=YOUR_INPUT to extract personal info from it.`);
});
