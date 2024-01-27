const fs = require('fs');

const version = process.env.npm_package_version;
console.log("version", version);
const data = {
  version: version,
  // Add any other properties you want in version.json
};

fs.writeFileSync('version.json', JSON.stringify(data, null, 2));

console.log(`version.json updated with version: ${version}`);
