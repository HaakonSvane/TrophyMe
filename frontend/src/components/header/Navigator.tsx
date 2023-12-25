"use client";
import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    navigationMenuTriggerStyle,
    NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";

type NavItemProps = {
    href: string;
    children?: React.ReactNode;
};
const NavItem = ({ href, children }: NavItemProps) => {
    const pathname = usePathname();
    const isCurrent = typeof href === "string" ? pathname === href : false;
    return (
        <NavigationMenuItem>
            <Link href={href} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()} active={isCurrent}>
                    {children}
                </NavigationMenuLink>
            </Link>
        </NavigationMenuItem>
    );
};

export const Navigator = () => (
    <NavigationMenu aria-label="MainNavigator">
        <NavigationMenuList>
            <NavItem href="/dashboard">Home</NavItem>
            <NavItem href="/groups">Groups</NavItem>
            <NavItem href="/stats">Stats</NavItem>
        </NavigationMenuList>
    </NavigationMenu>
);
