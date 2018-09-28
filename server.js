const express = require("express");
const fs = require("fs");

var wiki = require("./routes/wiki.js");

const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine(
  "jsx",
  require("express-react-views").createEngine({ beautify: true })
);

app.use((req, res, next) => {
  const now = new Date().toString();
  const log = `${now}: ${req.method} ${req.originalUrl}`;
  console.log(log);
  fs.appendFile(
    "server.log",
    log + "\n",
    err => err && console.log("Unable to log.")
  );
  next();
});

app.use((req, res, next) => {
  res.render("maintenance", {
    pageTitle: "Maintenance Page",
    currentYear: currentYear()
  });
});

app.use(express.static(__dirname + "/public"));
app.use("/wiki", wiki);

const currentYear = () => new Date().getFullYear();
app.get("/", (req, res) => {
  res.render("index", {
    pageTitle: "Home Page",
    currentYear: currentYear(),
    welcomeMessage: "Welcome to my website"
  });
});

app.get("/json", (req, res) => {
  res.send({ name: "Carlton", age: 52 });
});

app.get("/about", (req, res) => {
  res.render("about", {
    pageTitle: "About Page",
    currentYear: currentYear()
  });
});

app.get("/bad", (req, res) => {
  res.send({ errorMessage: "Error handling the request." });
});

app.get("/tr", (req, res) => {
  res.render("index", { name: "John", title: "John's Page" });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is up and listening on port ${port}.`);
});
