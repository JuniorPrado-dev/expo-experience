# Commands to start a new project
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
# Commands to install and configure nativewind-v4


- To read the complete documentation access [Expo Wind](https://www.nativewind.dev/v4/getting-started/expo-router).


## installation
To install both nativewind and tailwindcss


```shell
    npx expo install nativewind@^4.0.1 react-native-reanimated tailwindcss

    npx pod-install
```
To create a tailwind.config.js file run:


```shell
   npx tailwindcss init
```


## configuration
To configure the tailwind.config.js file, add the following code:


```shell

/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Modify your babel.config.js

```shell
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
  };
};


```

create a global.css in root dir and put this:

```shell
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
```
create a metro.config.js in root dir and put this:

```shell
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname, { isCSSEnabled: true })

module.exports = withNativeWind(config, { input: './global.css' })
```

create a nativewind-env.d.ts in root dir and put this:

```shell
    /// <reference types="nativewind/types" />
```

In your _layout file put:

``` shell
    // Import your global CSS file
    import "../global.css"

```


## Example to use:
```shell
export default function App() {
 return (
  <View className="flex-1 items-center justify-center bg-white">
     <Text>Open up App.js to start working on your app!</Text>
     <StatusBar style="auto" />
   </View>
 );
}
```



