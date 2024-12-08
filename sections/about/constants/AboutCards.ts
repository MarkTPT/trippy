import type { CardProps } from "../components/card/types";

const AboutCards: CardProps[] = [
    {
        title: "Our History",
        description: `Trippy is owned and managed by Trippy .In Pvt. Ltd., a leading brand in web designing services and e-commerce solutions. Trippy .In Pvt. Ltd. is counted for its expertise in web solutions and its top ranking business portals. Our invincible expertise and rich experience has raised our spirit to reach ahead from our client's expectation. Commendable success rate of other portals managed by Trippy is a live paradigm of our work excellence.`,
    },
    {
        title: "Our Mission",
        description: `Our mission is to touch the horizon where our capabilities may successfully meet with the requirements of our clients, that too with ultimate transparency and cost-effectiveness.`,
    },
    {
        title: "Our Vision",
        description: `To sow the seeds of par-excellence services with customer centric approach and reap the trust of worldwide clients.`,
    },
] as const;

export default AboutCards;
