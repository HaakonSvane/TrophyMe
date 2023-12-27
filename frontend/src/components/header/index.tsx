import { UserMenu } from "./UserMenu";
import { Logo } from "./Logo";
import { Container } from "./Container";
import { Navigator } from "./Navigator";
import { UserButton } from "@/components/buttons/UserButton";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { PreloadedQuery } from "react-relay";
import { pageDashboardQuery } from "@/__generated__/pageDashboardQuery.graphql";

type HeaderProps = {
    queryRef: PreloadedQuery<pageDashboardQuery>;
};

export const Header = ({ queryRef }: HeaderProps) => {
    return (
        <Container logo={<Logo />}>
            <div className="flex flex-1">
                <Navigator />
            </div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <UserButton />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <UserMenu />
                </DropdownMenuContent>
            </DropdownMenu>
        </Container>
    );
};
