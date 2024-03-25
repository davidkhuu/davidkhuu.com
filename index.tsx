import 'expo-router/entry';

import './global.css';

import { LogBox } from 'react-native';

if (__DEV__) {
  LogBox.ignoreLogs(['"transform" style array value is deprecated.']);
} else {
  LogBox.ignoreAllLogs();
}

