import { Hero, RecentTrips } from "@/sections";
import { View } from "react-native";

export default function Index() {
	return (
		<>
			<Hero
				image={require("../assets/images/backgrounds/night.jpg")}
				title="Service"
			/>

			<View style={{ paddingBlock: 48 }}>
				<RecentTrips />
			</View>
		</>
	);
}
