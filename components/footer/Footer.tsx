import { Pressable, StyleSheet, Text, View } from "react-native";
import Fa6Icons from "@expo/vector-icons/FontAwesome6";

export default function Footer() {
	return (
		<View style={styles.container}>
			<View style={styles.companyInfo}>
				<Text style={styles.companyName}>Trippy</Text>
				<Text style={styles.companySlogan}>
					Choose your favorite destination
				</Text>

				<View style={styles.socialsContainer}>
					<Pressable>
						<Fa6Icons
							name="square-facebook"
							color="#fff"
							size={32}
						/>
					</Pressable>

					<Pressable>
						<Fa6Icons
							name="square-instagram"
							color="#fff"
							size={32}
						/>
					</Pressable>

					<Pressable>
						<Fa6Icons
							name="square-behance"
							color="#fff"
							size={32}
						/>
					</Pressable>

					<Pressable>
						<Fa6Icons
							name="square-twitter"
							color="#fff"
							size={32}
						/>
					</Pressable>
				</View>
			</View>

			<View style={styles.links}>
				<View style={styles.linkGroup}>
					<Text style={styles.linkGroupTitle}>Project</Text>

					<Text style={styles.link}>Changelog</Text>
					<Text style={styles.link}>Status</Text>
					<Text style={styles.link}>License</Text>
					<Text style={styles.link}>All Versions</Text>
				</View>

				<View style={styles.linkGroup}>
					<Text style={styles.linkGroupTitle}>Community</Text>

					<Text style={styles.link}>GitHub</Text>
					<Text style={styles.link}>Issues</Text>
					<Text style={styles.link}>Project</Text>
					<Text style={styles.link}>Twitter</Text>
				</View>

				<View style={styles.linkGroup}>
					<Text style={styles.linkGroupTitle}>Help</Text>

					<Text style={styles.link}>Support</Text>
					<Text style={styles.link}>Troubleshooting</Text>
					<Text style={styles.link}>Contact Us</Text>
				</View>

				<View style={styles.linkGroup}>
					<Text style={styles.linkGroupTitle}>Others</Text>

					<Text style={styles.link}>Terms of Service</Text>
					<Text style={styles.link}>Privacy Policy</Text>
					<Text style={styles.link}>License</Text>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#000",

		paddingBlock: 64,
		paddingInline: 32,
	},

	companyInfo: {},
	companyName: {
		fontFamily: "Poppins",
		fontSize: 36,
		fontWeight: "bold",

		color: "#fff",
	},
	companySlogan: {
		fontFamily: "Poppins",
		fontSize: 18,

		color: "#fff",
	},

	socialsContainer: {
		flexDirection: "row",

		gap: 16,
		marginTop: 16,
	},

	links: {
		paddingTop: 32,

		flexDirection: "row",
		flexWrap: "wrap",
	},
	linkGroup: {
		width: "50%",
	},
	linkGroupTitle: {
		fontFamily: "Poppins",
		fontSize: 28,
		fontWeight: "bold",

		paddingTop: 16,
		paddingBottom: 14,

		color: "#fff",
	},
	link: {
		fontFamily: "Poppins",
		fontSize: 18,

		paddingBottom: 8,

		color: "#fafafa",
	},
});
