const config = require("config");
const App = require("core/App");
const Server = require("core/Server");

let RunApp = async () => {
  await App.init();
  const server = new Server(App);
  await server.start(process.env.PORT || config.appPort);
};

RunApp();
