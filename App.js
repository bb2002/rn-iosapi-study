/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet
} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DatePickerComponent from './components/DatePicker.component';
import PickerComponent from './components/Picker.component';
import ProgressViewComponent from './components/ProgressView.component';
import SegementedComponent from './components/Segemented.component';
import ActionSheetComponent from './components/ActionSheet.component';

const Drawer = createDrawerNavigator()

const App = () => {
	return (
		<NavigationContainer>
			<Drawer.Navigator>
				<Drawer.Screen name="DatePicker" component={DatePickerComponent} options={{ title: "날짜선택" }}/>
				<Drawer.Screen name="Picker" component={PickerComponent} options={{ title: "선택" }}/>
				<Drawer.Screen name="Progress" component={ProgressViewComponent} options={{ title: "진행바" }}/>
				<Drawer.Screen name="Segement" component={SegementedComponent} options={{ title: "세그먼트바" }}/>
				<Drawer.Screen name="ActionSheet" component={ActionSheetComponent} options={{ title: "액션시트" }}/>
			</Drawer.Navigator>
		</NavigationContainer>
	);
};

const styles = StyleSheet.create({
  
});

export default App;
