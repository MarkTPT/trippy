import type { TripCardProps } from "../components/tripCard/types";

const Trips: TripCardProps[] = [
    {
        title: "Trip in Indonesia",
        description: `Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea.`,
        image: require("../../../assets/images/backgrounds/5.jpg")
    },
    {
        title: "Trip in Malaysia",
        description: `Malaysia is a Southeast Asian country occupying parts of the Malay Peninsula and the island of Borneo. It's known for its beaches, rainforests and mix of Malay, Chinese, Indian and European cultural influences.`,
        image: require("../../../assets/images/backgrounds/8.jpg")
    },
    {
        title: "Trip in France",
        description: `France, in Western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches. Paris, its capital, is famed for its fashion houses, classical art museums including the Louvre and monuments like the Eiffel Tower.`,
        image: require("../../../assets/images/backgrounds/6.jpg")
    }
] as const;

export default Trips;
