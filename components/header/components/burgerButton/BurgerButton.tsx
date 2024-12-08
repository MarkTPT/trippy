import type { BurgerButtonProps } from "./types";
import { Pressable, StyleSheet } from "react-native";
import Fa6Icons from "@expo/vector-icons/FontAwesome6";

export default function BurgerButton({ onClick, opened }: BurgerButtonProps) {
	return (
		<Pressable
			onPress={onClick}
			style={styles.button}
		>
			{opened ? (
				<Fa6Icons
					name="xmark"
					size={28}
					color="#222"
				/>
			) : (
				<Fa6Icons
					name="bars"
					size={24}
					color="#222"
				/>
			)}
		</Pressable>
	);
}

const styles = StyleSheet.create({
	button: {
		alignItems: "center",
		justifyContent: "center",
		aspectRatio: 1,
		height: "100%",
	},
});
