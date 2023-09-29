import { UnderlineNav, UnderlineNavItemProps } from "@primer/react/drafts";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiHome, HiUsers, HiChartBar } from "react-icons/hi2";

const UnderLineNavItem = ({
  href,
  children,
  ...rest
}: UnderlineNavItemProps) => {
  const pathname = usePathname();
  const isCurrent = typeof href === "string" ? pathname === href : false;
  return (
    <UnderlineNav.Item
      as={Link}
      href={href}
      aria-current={isCurrent ? "page" : undefined}
      {...rest}
    >
      {children}
    </UnderlineNav.Item>
  );
};

export const Navigator = () => (
  <div className="flex-1">
    <UnderlineNav aria-label="MainNavigator">
      <UnderLineNavItem icon={HiHome} href="/dashboard">
        Home
      </UnderLineNavItem>
      <UnderLineNavItem icon={HiUsers} href="/groups">
        Groups
      </UnderLineNavItem>
      <UnderLineNavItem icon={HiChartBar} href="/stats">
        Stats
      </UnderLineNavItem>
    </UnderlineNav>
  </div>
);
