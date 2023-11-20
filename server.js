const express = require("express");
const app = express();
app.use(express.json());

const { dbconnection } = require("./model");
dbconnection
  .sync({ force: false })
  .then(() => console.log("db connected"))
  .catch((error) => console.log(error));

app.use("/auth", require("./routes/authroute"));

app.listen(9500, () => {
  console.log("app started at 9500");
});
