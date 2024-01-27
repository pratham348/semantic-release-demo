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
        async prepare(pluginConfig, context) {
          const { nextRelease } = context;
          const versionFilePath = './version.json';
  console.log('versionFilePath',versionFilePath)
          const versionData = {
            version: nextRelease.version,
          };
          console.log('versionData',versionData)
  
          await jsonfile.writeFile(versionFilePath, versionData, { spaces: 2 });
  
          return {};
        },
      },
    ],
  };
  