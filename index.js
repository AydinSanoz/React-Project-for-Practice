/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Login from './src/Login';
import News from './src/News';
import MyNewsPage from './src/MyNewsPage';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => MyNewsPage);
