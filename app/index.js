const express = require("express");
const http = require("http");

const port = process.env["PORT"] || 8080;

const app = express();
app.get("/", (_, res) => res.send("Hello, world!"));

const server = http.createServer(app);
server.listen(port, () => console.log(`Listening on ${port}`));
const close = (signal) => {
    console.log(`Caught ${signal}, closing server`);
    server.close(() => {
        console.log("Server closed, exiting");
        process.exit(0);
    });
};
process.on("SIGTERM", () => close("SIGTERM"));
process.on("SIGINT", () => close("SIGINT"));
