const fs = require('fs');
const path = require('path');

const versionJsonPath = path.join(process.cwd(), 'version.json');
console.log('versionJsonPath',versionJsonPath);
const incrementVersion = newVersion => {
  const versionJson = JSON.parse(fs.readFileSync(versionJsonPath, 'utf8'));
  versionJson.version = newVersion;
  fs.writeFileSync(versionJsonPath, JSON.stringify(versionJson, null, 2) + '\n', 'utf8');
  console.log(`Version forcefully updated to: ${newVersion}`);
};

const newVersion = process.argv[2];

if (!newVersion) {
  console.error('Error: Please provide a new version number.');
  process.exit(1);
}

incrementVersion(newVersion);
