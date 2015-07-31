var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'demo'
    },
    port: 3000,
    db: 'mongodb://localhost/demo-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'demo'
    },
    port: 3000,
    db: 'mongodb://localhost/demo-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'demo'
    },
    port: 3000,
    db: 'mongodb://localhost/demo-production'
  }
};

module.exports = config[env];
