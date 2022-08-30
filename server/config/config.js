
import fs from 'fs'
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
export default{
  // development: {
  //   username: process.env.ICANICANUSER,
  //   password: process.env.ICANPASSWORD,
  //   database: process.env.ICANDATABASE,
  //   host: process.env.ICANHOST,
  //   port: process.env.ICANPORT,
  //   dialect: process.env.ICANDIALECT,
  //   dialectOptions: {
  //     bigNumberStrings: true
  //   }
  development: {
    username: 'postgres',
    password: 'password',
    database: 'ican',
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
    dialectOptions: {
      bigNumberStrings: true
    }
  },
  test: {
    username: process.env.CI_DB_USERNAME,
    password: process.env.CI_DB_PASSWORD,
    database: process.env.CI_DB_NAME,
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql',
    dialectOptions: {
      bigNumberStrings: true
    }
  },
  // production: {
  //   username: process.env.PROD_DB_USERNAME,
  //   password: process.env.PROD_DB_PASSWORD,
  //   database: process.env.PROD_DB_NAME,
  //   host: process.env.PROD_DB_HOSTNAME,
  //   port: process.env.PROD_DB_PORT,
  //   dialect: 'mysql',
  //   dialectOptions: {
  //     bigNumberStrings: true,
  //     ssl: {
  //       ca: fs.readFileSync(__dirname + '/mysql-ca-main.crt')
  //     }
  //   }
  // }
};