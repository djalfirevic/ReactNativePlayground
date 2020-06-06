import React from 'react';
import { StyleSheet, TextInput, Button, View } from 'react-native';

export default function App() {
	return (
		<View style={styles.screen}>
			<View style={styles.inputContainer}>
				<TextInput placeholder="Course Goal" style={styles.input} />
				<Button title="Add" />
			</View>
			<View></View>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		padding: 50,
	},
	inputContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	input: {
		borderBottomColor: 'black',
		borderWidth: 1,
		padding: 10,
		width: '80%',
	},
});