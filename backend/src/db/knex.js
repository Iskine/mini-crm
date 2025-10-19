import knexConfig from '../config/knexfile.js';
import knex from 'knex';

const db = knex(knexConfig);
export default db;
