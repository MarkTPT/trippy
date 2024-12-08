import { Destination } from "./components";
import { StyleSheet, Text, View } from "react-native";

export default function PopularDestinations() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Popular Destinations</Text>
			<Text style={styles.subtitle}>
				Tours give you the opportunity to see a lot, within a time frame.
			</Text>

			<Destination
				title="Taal Volcano, Batangas"
				description="One of the most iconic views in Luzon, Mt. Taal boasts a volcano
					inside a lake inside an island. If you fancy a closer look, the hike
					up to the crater is a mere 45 minutes, and is easy enough for
					beginners. Guides will assist you most of the way, and you'll see the
					peculiar environment found on an active volcano, including volcanic
					rocks and steam vents. The hike can be dusty and hot, so plan for an
					early morning trip, and then unwind with some bulalo before heading
					back home!"
				image1={require("@/assets/images/backgrounds/1.jpg")}
				image2={require("@/assets/images/backgrounds/2.jpg")}
			/>

			<Destination
				title="Mt. Daguldul, Batangas"
				description="If you're looking for a hike that's a little more challenging but
					still good for a beginner mountaineer, check out Mt. Daguldul in San
					Juan, Batangas. You'll start your hike from the beach and pass through
					tropical forest, different rock formations, and small streams. There's
					a small store halfway up the trail where you can take a break and
					drink buko juice, and though the summit itself may not have the best
					view, the breeze is fantastic. Once you've made it back down, head
					straight to the beach for a refreshing, well-deserved swim."
				image1={require("@/assets/images/backgrounds/5.jpg")}
				image2={require("@/assets/images/backgrounds/8.jpg")}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",

		width: "100%",

		paddingInline: 32,
	},
	title: {
		fontFamily: "Poppins",
		fontSize: 48,
		fontWeight: "bold",
		textAlign: "center",

		marginBottom: 8,

		color: "#222",
	},
	subtitle: {
		fontFamily: "Poppins",
		fontSize: 16,
		textAlign: "center",

		color: "#222",
	},
});
