const jsonfile = require('jsonfile');
module.exports = {
    branches: ['main'],
    plugins: [
      '@semantic-release/commit-analyzer',
      '@semantic-release/release-notes-generator',
      '@semantic-release/changelog',
      '@semantic-release/npm', 
      '@semantic-release/github',
      ["@semantic-release/git", {
        "assets": [
          "package.json",
          "package-lock.json",
          "version.json"
        ],
        "message": "chore(release): cut the ${nextRelease.version} release\n\n${nextRelease.notes}"
      }],
      [
        '@semantic-release/exec',
        {
          prepareCmd: 'npm run update-version',
          verifyReleaseCmd: "echo ${nextRelease.version} > .VERSION"
        },
      ],
    ],
  };
  