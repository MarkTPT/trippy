import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function ContactForm() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Send a message to us!</Text>

			<View style={styles.form}>
				<TextInput
					style={styles.input}
					placeholder="Name"
					placeholderTextColor={"rgb(117, 117, 117)"}
				/>

				<TextInput
					style={styles.input}
					placeholder="Email"
					placeholderTextColor={"rgb(117, 117, 117)"}
				/>

				<TextInput
					style={styles.input}
					placeholder="Subject"
					placeholderTextColor={"rgb(117, 117, 117)"}
				/>

				<TextInput
					style={[styles.input, { height: 100, marginBottom: 16 }]}
					placeholder="Message"
					placeholderTextColor={"rgb(117, 117, 117)"}
					multiline={true}
				/>

				<Pressable style={styles.button}>
					<Text style={styles.buttonText}>Send Message</Text>
				</Pressable>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingBlock: 64,
		paddingInline: 32,

		alignItems: "center",
	},
	title: {
		fontFamily: "Poppins",
		fontSize: 32,
		fontWeight: "bold",

		color: "#2a2a2a",
	},
	form: {
		width: "90%",

		paddingTop: 32,

		alignItems: "stretch",
		flexDirection: "column",
	},
	input: {
		padding: 16,
		marginBottom: 32,

		borderRadius: 6,

		borderColor: "#2a2a2a",
		borderWidth: 1,

		fontFamily: "Poppins",
		fontSize: 16,
	},
	button: {
		padding: 16,
		marginTop: 15,
		marginBottom: 25,

		borderRadius: 6,

		alignItems: "center",

		backgroundColor: "rgb(239, 239, 239)",
	},
	buttonText: {
		fontFamily: "Poppins",
		fontSize: 18,
		fontWeight: 600,
	},
});
