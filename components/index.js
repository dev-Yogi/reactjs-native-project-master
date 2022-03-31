import Button from './Button';
import Card from './Card';
import DrawerItem from './DrawerItem';
import Icon from './Icon';
import Header from './Header';
import Input from './Input';
import Switch from './Switch';
import Select from './Select';
import { AppRegistry, Platform } from 'react-native';
import App from '../App';

AppRegistry.registerComponent('X', () => App);

if (Platform.OS === 'web') {
    const rootTag = document.getElementById('root') || document.getElementById('X');
    AppRegistry.runApplication('X', { rootTag });
}

export { Button, Card, DrawerItem, Icon, Input, Header, Switch, Select };
