const { notarize } = require('@electron/notarize');
const path = require('path');
const fs = require('fs');

exports.default = async function notarizing(context) {
  const { electronPlatformName, appOutDir, packager } = context;

  if (electronPlatformName !== 'darwin') return;
  if (!process.env.NOTARIZE || process.env.NOTARIZE.toLowerCase() === 'false') {
    console.log('Skipping notarization. Set NOTARIZE=true to enable it.');
    return;
  }

  const appName = packager.appInfo.productFilename;
  const appPath = path.join(appOutDir, `${appName}.app`);

  if (!fs.existsSync(appPath)) {
    throw new Error(`App not found at ${appPath}`);
  }

  console.log(`Notarizing app: ${appPath}`);

  await notarize({
    appBundleId: 'org.montelibero.sunce',
    appPath,
    appleId: process.env.APPLE_ID,
    appleIdPassword: process.env.APPLE_APP_SPECIFIC_PASSWORD,
    teamId: process.env.APPLE_TEAM_ID,
    tool: 'notarytool',
  });

  console.log('Notarization completed.');
};
