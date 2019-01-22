module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.RDS_HOSTNAME || '127.0.0.1',
      user: process.env.RDS_USERNAME || 'taco',
      password: process.env.RDS_PASSWORD || 'tuesday',
      database: process.env.RDS_DB_NAME || 'twitchvid'
    },
    seeds: {
      directory: './database/seeds'
    }
  },
  production: {
    client: 'pg',
    connection: {
      host: process.env.RDS_HOSTNAME || '127.0.0.1',
      user: process.env.RDS_USERNAME || 'taco',
      password: process.env.RDS_PASSWORD || 'tuesday',
      database: process.env.RDS_DB_NAME || 'twitchvid'
    },
    seeds: {
      directory: './database/seeds'
    }
  }
};