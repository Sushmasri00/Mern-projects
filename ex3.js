const express = require("express");
const http = require("http");
const app = express();
const PORT = 3000;
app.get("/", (req, res) => {
    res.send("Hello from Express + HTTP");
});
const server = http.createServer(app);
server.listen(5000, () => {
    console.log(`Server running at http://localhost:${5000}`);
});