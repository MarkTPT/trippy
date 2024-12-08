import { Text, Dimensions, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import type { HeroProps } from "./types";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

export default function Hero({
	image,
	title,
	subtitle,
	cta,
	fillHeight = false,
}: HeroProps) {
	return (
		<View style={[styles.container, fillHeight && { height: SCREEN_HEIGHT }]}>
			<Image
				source={image}
				style={[styles.image, fillHeight && { height: SCREEN_HEIGHT }]}
			/>

			<Text style={styles.title}>{title}</Text>

			{subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}

			{cta && (
				<Pressable style={styles.button}>
					<Text style={styles.buttonText}>{cta}</Text>
				</Pressable>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: SCREEN_WIDTH,
		height: SCREEN_HEIGHT * 0.7,

		justifyContent: "center",
		alignItems: "center",

		position: "relative",

		paddingTop: 60,
	},
	image: {
		width: SCREEN_WIDTH,
		height: SCREEN_HEIGHT * 0.7,

		position: "absolute",
	},
	title: {
		fontFamily: "Poppins",
		fontSize: 48,
		fontWeight: 800,
		textAlign: "center",

		paddingBlock: 10,
		paddingInline: 20,

		color: "#fff",
	},
	subtitle: {
		fontFamily: "Poppins",
		fontSize: 18,
		textAlign: "center",

		marginBottom: 32,

		color: "#fff",
	},
	button: {
		backgroundColor: "#fff",

		paddingBlock: 10,
		paddingInline: 18,

		borderRadius: 6,
	},
	buttonText: {
		fontFamily: "Poppins",
		fontSize: 18,
		fontWeight: "bold",

		letterSpacing: 2,
		color: "#222",
	},
});
