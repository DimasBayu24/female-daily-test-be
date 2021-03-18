const express = require('express');
const pool = require('./dbpg')
class Server {
  constructor() {
    this.app = express();
    this.setup();
  }

  run(port) {
    this.server = this.app.listen(port, () => {
      console.log(`server running on port ${port}`);
    });
  }

  setup() {
    this.app.use(express.json());
    this.app.get('/get-item', async (req, res) => {
      try {
        const getAll = await pool.query("SELECT * FROM developer")
        res.status(200).json(getAll.rows)
      } catch (error) {
        console.log(error.message);
      }
    })
  }
}

module.exports = Server;
