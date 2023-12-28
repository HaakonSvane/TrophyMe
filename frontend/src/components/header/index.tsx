import { UserMenu } from "./UserMenu";
import { Logo } from "./Logo";
import { Container } from "./Container";
import { Navigator } from "./Navigator";
import { UserButton } from "@/components/buttons/UserButton";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { PreloadedQuery, graphql, usePreloadedQuery } from "react-relay";
import { HeaderQuery } from "@/generated/HeaderQuery.graphql";

const HeaderQuery = graphql`
    query HeaderQuery {
        me {
            ...UserMenuFragment
        }
    }
`;

type HeaderProps = {
    queryRef: PreloadedQuery<HeaderQuery>;
};

export const Header = ({ queryRef }: HeaderProps) => {
    const data = usePreloadedQuery(HeaderQuery, queryRef);

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
                    <UserMenu fragmentKey={data.me} />
                </DropdownMenuContent>
            </DropdownMenu>
        </Container>
    );
};
