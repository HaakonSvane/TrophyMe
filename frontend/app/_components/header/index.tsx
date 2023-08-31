"use client";

import { ActionMenu, Header as PrimerHeader } from "@primer/react";
import { useRef, useState } from "react";
import { UserMenu } from "./UserMenu";
import { Logo } from "./Logo";
import { Container } from "./Contianer";
import { Navigator } from "./Navigator";
import { UserButton } from "../buttons/UserButton";

export const Header = () => {
  const [isActionMenuOpen, setIsActionMenuOpen] = useState<boolean>(false);
  const anchorRef = useRef(null);
  return (
    <>
      <Container logo={<Logo />}>
        <PrimerHeader.Item full>
          <Navigator />
        </PrimerHeader.Item>

        <PrimerHeader.Item>
          <ActionMenu>
            <ActionMenu.Anchor>
              <UserButton />
            </ActionMenu.Anchor>

            <ActionMenu.Overlay>
              <UserMenu />
            </ActionMenu.Overlay>
          </ActionMenu>
        </PrimerHeader.Item>
      </Container>
    </>
  );
};
