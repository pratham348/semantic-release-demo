let fs = require('fs');
let semver = require('semver');

if (fs.existsSync('./version.json')) {
    var versionFile = require('./version.json');
    let currentVersion = versionFile.version;
    let type = process.argv[2];
    if (!['major', 'minor', 'patch'].includes(type)) {
        type = 'patch';
    }

    let newVersion = semver.inc(versionFile.version, type);
    versionFile.version = newVersion;
    fs.writeFileSync('./version.json', JSON.stringify(versionFile, null, 2));

    console.log('Version updated', currentVersion, '=>', newVersion);
}