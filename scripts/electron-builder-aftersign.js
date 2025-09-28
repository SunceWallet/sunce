// scripts/electron-builder-aftersign.js
const { notarize } = require('@electron/notarize');

module.exports = async (context) => {
  if (process.platform !== 'darwin') return;

  const { appOutDir, packager } = context;
  const appName = packager.appInfo.productFilename;
  const appPath = `${appOutDir}/${appName}.app`;

  // notarytool через API-ключ (или Apple ID как запасной вариант)
  const useApiKey = process.env.APPLE_API_KEY && process.env.APPLE_API_KEY_ID && process.env.APPLE_API_ISSUER;

  const opts = useApiKey ? {
    tool: 'notarytool',
    appPath,
    appleApiKey: process.env.APPLE_API_KEY,
    appleApiKeyId: process.env.APPLE_API_KEY_ID,
    appleApiIssuer: process.env.APPLE_API_ISSUER,
  } : {
    tool: 'notarytool',
    appPath,
    appleId: process.env.APPLE_ID,
    appleIdPassword: process.env.APPLE_APP_SPECIFIC_PASSWORD,
    teamId: process.env.APPLE_TEAM_ID,
  };

  console.log(`Notarizing with ${useApiKey ? 'API key' : 'Apple ID'}…`);
  await notarize(opts);

  // Staple
  const { execa } = await import('execa');
  await execa('xcrun', ['stapler', 'staple', appPath], { stdio: 'inherit' });
  console.log('Stapled.');
};
