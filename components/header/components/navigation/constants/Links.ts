import type { NavLinkProps } from "../components/navLink/types";

const Links: Omit<NavLinkProps, 'onPress'>[] = [
    {
        href: '/',
        icon: 'house-user',
        text: 'Home',
    },
    {
        href: '/about',
        icon: 'circle-info',
        text: 'About',
    },
    {
        href: '/service',
        icon: 'briefcase',
        text: 'Service',
    },
    {
        href: '/contact',
        icon: 'address-book',
        text: 'Contact',
        iconLibrary: 'fa'
    }
] as const;

export default Links;
