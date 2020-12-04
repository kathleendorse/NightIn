const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const dotenv = require("dotenv");
const cors = require("cors");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bodyParser = require("body-parser");

dotenv.config();

// cross-origin request security (CORS)
// prevents requests to unauthorized domains
// accept requests from the client
// app.use(cors());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
// Define middleware here //added need to test
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nightindb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// app.use(cors({ origin: "https://localhost:3000", credentials: true }));
// Sessions
app.use(
  session({
    secret: "facebook-special",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

// Add routes, both API and view
app.use(routes);

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
