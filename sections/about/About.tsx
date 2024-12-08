import { Card } from "./components";
import { AboutCards } from "./constants";
import { StyleSheet, View } from "react-native";

export default function About() {
	return (
		<View style={styles.container}>
			{AboutCards.map((card, index) => (
				<Card
					key={index}
					title={card.title}
					description={card.description}
				/>
			))}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingBlock: 64,
		paddingInline: 32,
	},
});
