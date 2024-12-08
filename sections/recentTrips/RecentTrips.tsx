import { TripCard } from "./components";
import { StyleSheet, Text, View } from "react-native";
import { Trips } from "./constants";

export default function RecentTrips() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Recent Trips</Text>
			<Text style={styles.subtitle}>
				You can discover unique destinations using Google Maps.
			</Text>

			<View style={styles.tripsContainer}>
				{Trips.map((trip, index) => (
					<TripCard
						key={index}
						title={trip.title}
						description={trip.description}
						image={trip.image}
					/>
				))}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",

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

	tripsContainer: {
		marginTop: 48,
		marginBottom: 24,

		gap: 24,
	},
});
