"use client";

import { Avatar, Header, Heading, Octicon } from "@primer/react";

export const HeaderComponent = () => (
  <Header>
    <Header.Item>
      <Heading>Testing</Heading>
    </Header.Item>
    <Header.Item full>Menu</Header.Item>
    <Header.Item
      sx={{
        mr: 0,
      }}
    >
      <Avatar
        src="https://github.com/octocat.png"
        size={20}
        square
        alt="@octocat"
      />
    </Header.Item>
  </Header>
);
