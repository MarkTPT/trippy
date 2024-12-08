import { About, Hero } from "@/sections";

export default function Index() {
	return (
		<>
			<Hero
				image={require("../assets/images/backgrounds/night.jpg")}
				title="About"
			/>

			<About />
		</>
	);
}
