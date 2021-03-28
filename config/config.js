require('dotenv').config();

module.exports = {
  "development": {
    "username": "root",
    "password": process.env.SEQUELIZE_PASSWORD,
    "database": "nodebird",
    "host": "127.0.0.1",
    "dialect": "mariadb"
  },
  "test": {
    "username": "root",
    "password": process.env.SEQUELIZE_PASSWORD,
    "database": "nodebird_test",
    "host": "127.0.0.1",
    "dialect": "mariadb"
  },
  "production": {
    "username": "root",
    "password": process.env.SEQUELIZE_PASSWORD,
    "database": "nodebird",
    "host": "127.0.0.1",
    "dialect": "mysql",
    logging: false //쿼리명령어 로깅(log)을 숨김
  }
}
