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
