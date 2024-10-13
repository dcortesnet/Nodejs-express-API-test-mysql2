const { pool } = require("../../db");

class UserModel {
  static getAll() {
    return new Promise((resolve, reject) => {
      let query = "SELECT * FROM users";
      pool.query(query, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }
}

module.exports = UserModel;
