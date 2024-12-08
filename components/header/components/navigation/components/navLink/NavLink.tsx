import { Link, usePathname } from "expo-router";
import type { NavLinkProps } from "./types";
import { StyleSheet, Text, View } from "react-native";
import {
	FontAwesome as FaIcons,
	FontAwesome6 as Fa6Icons,
} from "@expo/vector-icons";

export default function NavLink({
	href,
	onPress,
	iconLibrary = "fa6",
	icon,
	text,
}: NavLinkProps) {
	const pathName = usePathname();

	const IconComponent = iconLibrary === "fa6" ? Fa6Icons : FaIcons;

	const isActive = pathName === href;

	return (
		<Link
			href={href}
			onPress={onPress}
		>
			<View style={[styles.container, isActive && styles.activeContainer]}>
				<View style={styles.icon}>
					<IconComponent
						name={icon}
						size={20}
					/>
				</View>

				<Text style={[styles.text, isActive && styles.activeText]}>{text}</Text>
			</View>
		</Link>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingBlock: 16,
		paddingInline: 24,

		width: "100%",
		gap: 5,

		flexDirection: "row",
		alignItems: "center",
	},
	activeContainer: {
		backgroundColor: "#01959a",
	},
	icon: {
		width: 30,

		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		color: "#222",
		fontFamily: "Poppins",
		fontSize: 18,
		fontWeight: 600,
	},
	activeText: {
		color: "#fff",
	},
});
