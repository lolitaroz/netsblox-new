/* Copyright G. Hemingway, @2024 - All rights reserved */
"use strict";

import path from "node:path";
import * as url from "node:url";
import express from "express";
import logger from "morgan";
import bodyParser from "body-parser";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const port = process.env.PORT ? process.env.PORT : 8080;
const env = process.env.NODE_ENV ? process.env.NODE_ENV : "dev";

// Setup our Express pipeline
let app = express();
if (env !== "test") app.use(logger("dev"));
app.use(express.static(path.join(__dirname, "../../public")));
app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({ extended: true }));

// Import our routes
import routes from "./routes.js";
await routes(app);

// Build up the server-side data structures
app.users = [
  {
    username: "usera",
    password: "secret",
    first_name: "George",
    last_name: "Walker",
    city: "Dallas",
    primary_email: "usera@sample.com",
    games: [],
  },
  {
    username: "userb",
    password: "secret",
    first_name: "Sarah",
    last_name: "Clinton",
    city: "Hope",
    primary_email: "userb@sample.com",
    games: [],
  },
  {
    username: "userc",
    password: "secret",
    first_name: "Michelle",
    last_name: "Henderson",
    city: "Chicago",
    primary_email: "userc@sample.com",
    games: [],
  },
  {
    username: "userd",
    password: "secret",
    first_name: "Jimmy",
    last_name: "Bush",
    city: "Kennebunkport",
    primary_email: "userd@sample.com",
    games: [],
  },
  {
    username: "usere",
    password: "secret",
    first_name: "Ronald",
    last_name: "Smith",
    city: "Los Angeles",
    primary_email: "usere@sample.com",
    games: [],
  },
];

// There are no games yet!
app.games = [];

// No matter what the client asks for, serve the SPA base HTML
const indexFile = path.resolve(__dirname, "../../public/index.html");
app.get("*", (req, res) => {
  res.sendFile(indexFile);
});

// Run the server itself
const server = app.listen(port, () => {
  console.log("Assignment 3 app listening on " + server.address().port);
});
