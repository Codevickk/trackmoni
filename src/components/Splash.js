import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Splash = () => {
	return (
		<View style={styles.container}>
			<Image source={require('../images/app_icon.png')} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#FAFAFA',
		display: 'flex',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export default Splash;
