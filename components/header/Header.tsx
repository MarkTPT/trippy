import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BurgerButton, Navigation } from "./components";

export default function Header() {
	const insets = useSafeAreaInsets();

	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen((s) => !s);
	};

	return (
		<>
			<View
				style={[
					styles.container,
					{ top: insets.top },
					menuOpen && {
						boxShadow: undefined,
						borderBottomRightRadius: 0,
						borderBottomLeftRadius: 0,
					},
				]}
			>
				<Text style={styles.logo}>Trippy</Text>

				<BurgerButton
					onClick={toggleMenu}
					opened={menuOpen}
				/>
			</View>

			<Navigation
				menuOpen={menuOpen}
				setMenuOpen={setMenuOpen}
			/>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",

		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",

		paddingBlock: 10,
		paddingInline: 30,
		width: "95%",
		height: 60,

		position: "absolute",
		left: "50%",
		transform: [{ translateX: "-50%" }],

		borderRadius: 13,
		boxShadow: "0 5px 15px 0 rgba(0, 0, 0, 0.25)",

		zIndex: 100,
	},
	logo: {
		color: "#222",
		fontSize: 32,
		fontFamily: "Poppins",
		fontWeight: "bold",
	},
});
