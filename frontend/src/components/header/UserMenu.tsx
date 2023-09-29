"use client";
import { signOut } from "next-auth/react";
import { FiUser, FiLogOut } from "react-icons/fi";

import { ActionList } from "@primer/react";

export const UserMenu = () => (
  <ActionList>
    <ActionList.Item>
      <ActionList.LeadingVisual>
        <FiUser />
      </ActionList.LeadingVisual>
      My profile
    </ActionList.Item>
    <ActionList.Divider />
    <ActionList.Item variant="danger" onSelect={() => signOut()}>
      <ActionList.LeadingVisual>
        <FiLogOut />
      </ActionList.LeadingVisual>
      Log out
    </ActionList.Item>
  </ActionList>
);
