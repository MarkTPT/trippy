import type { CardProps } from "./types";
import { StyleSheet, Text, View } from "react-native";

export default function Card({ title, description }: CardProps) {
	return (
		<View>
			<Text style={styles.title}>{title}</Text>
			<Text style={styles.description}>{description}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	title: {
		fontFamily: "Poppins",
		fontSize: 32,
		fontWeight: "bold",

		paddingBottom: 16,
	},
	description: {
		fontFamily: "Poppins",
		fontSize: 16,

		paddingBottom: 32,
	},
});
