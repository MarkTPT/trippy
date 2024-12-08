import { Hero, PopularDestinations, RecentTrips } from "@/sections";
import { View } from "react-native";

export default function Index() {
	return (
		<>
			<Hero
				image={require("../assets/images/backgrounds/12.jpg")}
				title="Your Journey Your Story"
				subtitle="Choose Your Favourite Destination."
				cta="Travel Plan"
				fillHeight
			/>

			<View style={{ gap: 64, paddingBlock: 48 }}>
				<PopularDestinations />
				<RecentTrips />
			</View>
		</>
	);
}
