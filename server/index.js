const app = require("./app");
require("env2")("config.env");

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`http://localhost:${app.get("port")}`);
});
