# Commands 
## create new project
to create run:
```shell
    npx create-expo-app {name project}
```
to install dependencies run inside your project:
```shell
    npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar
```
For the property main, use the expo-router/entry as its value in the package.json. The initial client file is app/_layout.js.
```shell
    "main": "expo-router/entry"
```
## run project
```shell
    npx expo start 
```
run and clear the bundler cache: 
```shell
    npx expo start -c
```


# Configuring a profile to build APKs

To generate an .apk, modify the eas.json by adding one of the following properties in a build profile:

* developmentClient to true (default)
* distribution to internal
* android.buildType to apk
* android.gradleCommand to :app:assembleRelease, :app:assembleDebug or any other gradle command that produces .apk

1. run this to login:
```bash
eas login
```

2. copy this in eas.json

   ```bash
   {
   "build": {
      "preview": {
         "android": {
         "buildType": "apk"
         }
      },
      "preview2": {
         "android": {
         "gradleCommand": ":app:assembleRelease"
         }
      },
      "preview3": {
         "developmentClient": true
      },
      "preview4": {
         "distribution": "internal"
      },
      "production": {}
   }
   }

   ```
   Now you can run your build with the following command:
  
   ```bash
   eas build -p android --profile preview
   ```

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.


## Comandos
1. Install java SD

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

# known errors
### Loaded "env" configuration for the "production" profile: no environment variables specified.
___
###  Solution :

In  app.jason delete:

```
      "eas": {
        "projectId": "9b2bf3c4-ea19-4c05-827a-f0e456c22edf"
      }
```

# Defaults Commands by project generate

# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

# Installer and configuration for Local Builders

# Environment Setup

Environment setup for a React Native project with Expo and CLI.

## Ubuntu
### Install and config Java
1. Install Java 17 JDK
   To install Java 17 JDK, run the following command:

   ```bash
   sudo apt-get install openjdk-17-jdk
   ```
2. Verify Java installation
   To verify that Java is installed correctly, use this command:

   ```bash
   java version
   ```
3. Check Java installation location
   To find out where Java is installed, use the following command:

   ```bash
   sudo update-alternatives --config java 
   ```
4. Set JAVA_HOME
   To set the JAVA_HOME environment variable

   ```bash
   sudo nano $HOME/.bashrc
   ```
   Add the following lines in the end file:
   ```
   export JAVA_HOME="YOUR_PATH"
   ```
   Obs: if you use zsh:
   ```bash
   sudo nano $HOME/.zshrc
   ```
   Add the following lines in the end file:
   ```
   export JAVA_HOME="YOUR_PATH"
   ``` 
   
5. Verify JAVA_HOME

   ```bash
   echo $JAVA_HOME 
   ```
### Install and config Android Studio
1. Download Android Studio
Download Android Studio from the [official website](https://developer.android.com/studio?gad_source=1&gclid=CjwKCAjwjeuyBhBuEiwAJ3vuoUMNdNAyrIQuQ-Bpb4ZCkQuYyXeJhrDg6kGSRjAGZ63nk6e0FNB8FxoCUq0QAvD_BwE&gclsrc=aw.ds&hl=pt-br).

2. Install Android Studio

   Navigate to the directory where the file was downloaded and run:

   ```bash
   sudo unzip android-studio-ide-*-linux.zip -d /opt
   ```
3. Run Android Studio

   Launch Android Studio by navigating to the bin directory and running the studio.sh script:

   ```bash
   /opt/android-studio/bin/studio.sh
   ```
4. Set up Android SDK

   Follow the on-screen instructions in Android Studio to set up the Android SDK. Make sure to install the necessary SDK packages.

5. Set ANDROID_HOME

   To set the ANDROID_HOME environment variable, edit the /etc/environment file:

   ```bash
   sudo nano $HOME/.bashrc
   ```
   Add the following lines in the end file:
   ```
   export ANDROID_HOME=$HOME/Android/Sdk
   export PATH=$PATH:$ANDROID_HOME/tools
   export PATH=$PATH:$ANDROID_HOME/platform-tools
   ```
   Obs: if you use zsh:
   ```bash
   sudo nano $HOME/.zshrc
   ```
   Add the following lines in the end file:
   ```
   export ANDROID_HOME=$HOME/Android/Sdk
   export PATH=$PATH:$ANDROID_HOME/tools
   export PATH=$PATH:$ANDROID_HOME/platform-tools
   ```

# To Run builds locally 

1. Use this command:
   ```bash
   eas build --platform android --local
   eas build --platform ios --local
   ```