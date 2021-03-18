const convict = require('convict');

const config = convict({
  env: {
    doc: 'The application environment.',
    format: ['local', 'test-docker'],
    default: 'local',
    env: 'NODE_ENV',
  },
  port: {
    doc: 'The port to bind.',
    format: 'port',
    default: 8080,
    env: 'PORT',
  },
  db: {
    host: {
      doc: 'Database host name/IP',
      format: '*',
      default: 'localhost',
      env: 'DB_HOST',
    },
    name: {
      doc: 'Database name',
      format: String,
      default: 'postgres',
      env: 'DB_NAME',
    },
    user: {
      doc: 'Database user',
      format: String,
      default: 'postgres',
      env: 'DB_USER',
    },
    port: {
      doc: 'database port',
      format: 'port',
      default: 5432,
      env: 'DB_PORT',
    },
    password: {
      doc: 'database password',
      format: '*',
      default: null,
      env: 'DB_PASSWORD',
      sensitive: true,
    },
  },
});

const env = config.get('env');
config.loadFile(`./config/${env}.json`);
config.validate({ allowed: 'strict' });

module.exports = {
  ...config.getProperties(),
};
