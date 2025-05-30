# Sunce mobile apps

## Development

Install the dependencies:

```
npm install
```

Navigate to cordova folder:

```
cd cordova/
```

Install cordova dependencies:

```
npm install
```

### Android

Create the Android platform:

```
npm run install:android
```

Create the development build:

```
# Note the script should be executed from roo package, not cordova
cd ..
npm run dev:android
```

Follow the steps in [Cordova Android - Installing the Requirements](https://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html#installing-the-requirements) to setup your development environment.

In Android Studio choose "Import project" and select the `cordova/platforms/android` folder.
You should now be able to run the app on device or emulator.

### iOS

Create the iOS platform:

```
npm run install:ios
```

Create the development build:

```
cd ..
npm run dev:ios
```

Troubleshooting: In case you see the infamous `error: tool 'xcodebuild' requires Xcode, but active developer directory '/Library/Developer/CommandLineTools' is a command line tools instance`, you need to run:

```
sudo xcode-select -switch /Applications/Xcode.app/Contents/Developer
```

Follow the steps in [Cordova iOS - Installing the Requirements](https://cordova.apache.org/docs/en/latest/guide/platforms/ios/index.html#installing-the-requirements) to setup your development environment.

Open the Project folder in Xcode:

```
open ./platforms/ios/Sunce.xcworkspace/
```

You can now select a device from the dropdown in the upper-left corner and run the application.

## Production build

Follow the setup of the development builds but instead of `npm run dev:android/ios` use:

```
# Android
cd ..
npm run build:android

# iOS
cd ..
npm run build:ios
```

## Creating signed builds

### Android

Make sure that you have access to the required `.keystore` file.

Create a `signing.env` file inside of the `cordova/` directory. Insert the path to the keystore file and the alias of the signing key.

```
KEYSTORE_LOCATION=/location/of/my.keystore
SIGNINGKEY_ALIAS=AliasOfMyKey
```

Specify PACKAGE_TYPE (apk, bundle) and run the following npm script to start the build process of the signed apk.

```
cd ..
npm run prebuild:android
cd cordova
PACKAGE_TYPE=apk npm run build:android:signed:manual
```

Enter the passwords for keystore and key when prompted. The location of the generated .apk file will appear in the output log once the build process succeeds.

## Troubleshooting

### General build issues

If the build fails, try pruning and re-installing all platform-specific code first.

```sh
cd cordova/
rm -rf plugins/
npm run remove:android && npm run remove:ios
npm run install:ios    # or `install:android`
```

Now try building the app again.

### Xcode does not support iOS version

You can hack your way around a local Xcode version that does not support your attached iPhone's OS version. Patch your Xcode using the device support files from here:

<https://github.com/iGhibli/iOS-DeviceSupport>
