const express = require("express");
const app = express();
const port = 3000;
const apiRouter = require("./routes/apiRoutes");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

//for POST -> we need to fill in the information in the body
app.use("/all", apiRouter);

/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});

app.listen(port, () => {
  console.log(`app listening at ${port}`);
});
