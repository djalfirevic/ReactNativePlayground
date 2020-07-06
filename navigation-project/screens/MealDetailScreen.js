import React from 'react';
import { View, StyleSheet } from 'react-native';

const MealDetailScreen = () => {
	return <View style={styles.screen}>The Meal Detail Screen!</View>;
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default MealDetailScreen;
