const http = require("http");

const Routes = require("./routes/index");
const cors = require("cors");

class Server {
  $beforeInit;
  constructor(app, config) {
    this.app = app;
    this.config = config;
  }

  init() {
    if (this.$beforeInit) this.$beforeInit();
    this.app.use(cors());
    Routes(this.app);

    return http.createServer(this.app);
  }

  boot() {
    const server = this.init();

    this.config.port = process.env.PORT || this.config.port;

    server.listen(this.config.port, this.config.host, () => {
      console.log(
        `Listening on http://${this.config.host}:${this.config.port}`
      );
    });
  }

  close() {
    this.app.close();
  }
}

module.exports = Server;
