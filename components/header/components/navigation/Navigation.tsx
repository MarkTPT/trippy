import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import type { NavigationProps } from "./types";
import { Links } from "./constants";
import { NavLink } from "./components";

export default function Navigation({ menuOpen, setMenuOpen }: NavigationProps) {
	const insets = useSafeAreaInsets();

	return (
		<View
			style={[
				styles.menu,
				{ top: insets.top + 50 },
				!menuOpen && { display: "none" },
			]}
		>
			{Links.map((link) => (
				<NavLink
					icon={link.icon}
					href={link.href}
					onPress={() => setMenuOpen(false)}
					text={link.text}
					iconLibrary={link.iconLibrary}
					key={`${link.href}-${link.text}`}
				/>
			))}

			<Pressable style={styles.signUpButton}>
				<Text style={styles.signUpButtonText}>Sign Up</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	menu: {
		position: "absolute",
		left: "50%",
		transform: [{ translateX: "-50%" }],

		alignItems: "center",

		width: "95%",
		paddingTop: 10,

		backgroundColor: "#fff",

		zIndex: 200,

		borderBottomRightRadius: 13,
		borderBottomLeftRadius: 13,
		boxShadow: "0 10px 10px 0 rgba(0, 0, 0, 0.25)",
	},
	signUpButton: {
		paddingBlock: 20,
		paddingInline: 24,
		marginTop: 15,
		marginBottom: 25,

		width: "80%",

		borderRadius: 12,

		alignItems: "center",

		backgroundColor: "#01959a",
	},
	signUpButtonText: {
		color: "#fff",
		fontFamily: "Poppins",
		fontSize: 18,
		fontWeight: 600,
	},
});
