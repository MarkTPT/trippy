import { StyleSheet, Text, View } from "react-native";
import type { DestinationProps } from "./types";
import { Image } from "expo-image";

export default function Destination({
	title,
	description,
	image1,
	image2,
}: DestinationProps) {
	return (
		<View style={styles.destinationContainer}>
			<View style={styles.imagesContainer}>
				<Image
					source={image1}
					style={styles.image}
				/>

				<Image
					source={image2}
					style={[styles.image, styles.secondImage]}
				/>
			</View>

			<Text style={styles.destinationTitle}>{title}</Text>
			<Text style={styles.destinationDescription}>{description}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	destinationContainer: {
		marginTop: 40,
	},
	imagesContainer: {
		flexDirection: "row",
		justifyContent: "space-between",

		marginBlock: 28,

		position: "relative",
	},
	image: {
		width: "49%",
		height: 250,

		borderRadius: 6,
	},
	secondImage: {
		position: "absolute",
		top: "-10%",
		right: 0,
	},
	destinationTitle: {
		fontFamily: "Poppins",
		fontSize: 28,
		fontWeight: "bold",

		paddingBottom: 16,

		color: "#222",
	},
	destinationDescription: {
		fontFamily: "Poppins",
		fontSize: 18,
		lineHeight: 28,

		color: "#222",
	},
});
