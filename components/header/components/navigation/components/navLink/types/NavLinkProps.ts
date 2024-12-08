import type { ExpoRouter } from "expo-router";

type NavLinkProps = {
    href: ExpoRouter.__routes['href'];
    onPress: () => void;
    iconLibrary?: "fa" | "fa6";
    icon: string;
    text: string;
}

export default NavLinkProps;
