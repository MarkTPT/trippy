import { ContactForm, Hero } from "@/sections";

export default function Index() {
	return (
		<>
			<Hero
				image={require("../assets/images/backgrounds/2.jpg")}
				title="Contact"
			/>

			<ContactForm />
		</>
	);
}
