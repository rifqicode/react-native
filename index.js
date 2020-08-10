/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Basic from './app/basic/Basic.js';
import Flex from './app/flex/Flex.js';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Flex);
