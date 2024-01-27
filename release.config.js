const jsonfile = require('jsonfile');
module.exports = {
    branches: ['main'],
    plugins: [
      '@semantic-release/commit-analyzer',
      '@semantic-release/release-notes-generator',
      '@semantic-release/changelog',
      '@semantic-release/npm', 
      '@semantic-release/github',
      '@semantic-release/git',
      {
        "path": "@semantic-release/exec",
        "cmd": "node update-version ${nextRelease.version}",
      },
       
    ],
  };
  