const fs = require('fs');

try {
  const version = process.env.npm_package_version || 'fallback version';

  const data = {
    version: version,
  };

  fs.writeFileSync('version.json', JSON.stringify(data, null, 2));

  console.log('version.json updated with version:', version);
} catch (error) {
  console.error('Error updating version.json:', error.message);
}
