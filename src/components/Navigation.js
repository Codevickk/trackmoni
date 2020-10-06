import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from './Splash';

const Stack = createStackNavigator();
const Navigation = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="splash" component={Splash} />
		</Stack.Navigator>
	);
};

export default Navigation;
