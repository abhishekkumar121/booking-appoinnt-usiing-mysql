const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./config/database");
const appointmentRoutes = require("./routes/appointmentRoutes");

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static("public"));

// Routes
app.use("/api", appointmentRoutes);

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
});
