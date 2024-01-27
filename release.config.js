const jsonfile = require('jsonfile');
module.exports = {
    branches: ['main'],
    plugins: [
      '@semantic-release/commit-analyzer',
      '@semantic-release/release-notes-generator',
      '@semantic-release/changelog',
      '@semantic-release/npm',
      '@semantic-release/git',
      '@semantic-release/github',
      {
        // Custom plugin for updating version.json
        async prepare(pluginConfig, { nextRelease }) {
          const versionFilePath = './version.json';
          console.log("versionFilePath", versionFilePath);
          console.log('nextRelease.version',nextRelease.version);
          await jsonfile.writeFile(versionFilePath, { version: nextRelease.version }, { spaces: 2 });
  
          return {};
        },
      },
    ],
  };
  