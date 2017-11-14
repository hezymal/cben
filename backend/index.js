const express = require("express");
const app = express();

app.use(
  express.static("backend/view", {
    extensions: ["html", "js", "css"],
    index: "index.html"
  })
);

app.get("/update", (request, response) => {
  const action = require("./actions/update");
  action(request, response);
});

app.listen(3000, () => {
  console.log("cben: listening on port 3000!");
});
