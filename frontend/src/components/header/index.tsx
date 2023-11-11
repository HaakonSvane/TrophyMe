import { UserMenu } from "./UserMenu";
import { Logo } from "./Logo";
import { Container } from "./Container";
import { Navigator } from "./Navigator";
import { UserButton } from "@/components/buttons/UserButton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export const Header = () => {
  return (
    <Container logo={<Logo />}>
      <div className="flex flex-1">
        <Navigator />
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <UserButton />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <UserMenu />
        </DropdownMenuContent>
      </DropdownMenu>
    </Container>
  );
};
