const { notarize } = require('@electron/notarize');
const path = require('path');
const fs = require('fs');
const { execSync } = require('child_process');

function signFile(file) {
  console.log(`Signing: ${file}`);
  execSync(`codesign --force --deep --options runtime --sign "${process.env.CSC_NAME}" "${file}"`, {
    stdio: 'inherit'
  });
}

function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.lstatSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (file.endsWith('.dylib') || file.endsWith('.so') || file.endsWith('Helper') || file === 'chrome_crashpad_handler') {
      signFile(fullPath);
    }
  }
}

exports.default = async function notarizing(context) {
  const { electronPlatformName, appOutDir, packager } = context;

  if (electronPlatformName !== 'darwin') return;
  if (!process.env.NOTARIZE || process.env.NOTARIZE.toLowerCase() === 'false') return;

  const appName = packager.appInfo.productFilename;
  const appPath = path.join(appOutDir, `${appName}.app`);
  const contentsPath = path.join(appPath, 'Contents');

  // Рекурсивно подписываем вложенные бинарники
  walk(contentsPath);

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
