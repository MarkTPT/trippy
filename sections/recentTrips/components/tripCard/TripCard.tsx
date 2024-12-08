import type { TripCardProps } from "./types";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

export default function TripCard({ title, description, image }: TripCardProps) {
	return (
		<View style={styles.tripCard}>
			<Image
				source={image}
				style={styles.tripImage}
			/>

			<Text style={styles.tripTitle}>{title}</Text>

			<Text style={styles.tripDescription}>{description}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	tripCard: {
		paddingBlock: 16,
		paddingInline: 12,

		borderRadius: 8,

		boxShadow: "0 5px 25px 2px rgba(0, 0, 0, 0.11)",
	},
	tripImage: {
		height: 200,
		borderRadius: 8,
	},
	tripTitle: {
		fontFamily: "Poppins",
		fontSize: 28,
		fontWeight: "bold",

		paddingTop: 14,
		paddingBottom: 8,

		color: "#222",
	},
	tripDescription: {
		fontFamily: "Poppins",
		fontSize: 16,
		lineHeight: 26,

		color: "#222",
	},
});
