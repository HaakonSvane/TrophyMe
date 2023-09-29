"use client";

import { MidScreenContent } from "@/components/containers/MidScreenContent";
import { SectionHeader } from "@/components/labels/SectionHeader";
import { Button, Text } from "@primer/react";
import Link from "next/link";

const LandingPage = () => {
  return (
    <MidScreenContent className="justify-center">
      <SectionHeader title="TROJI.ME" />
      <div className="flex flex-col gap-8">
        <Text>
          Welcome to Troji.me! This is a website where you can track your wins
          and losses in games and compete with your friends.
        </Text>
        <Text>To begin, please sign in. It's free!</Text>
        <Button as={Link} href={"/auth/signIn"} variant="primary">
          Sign in
        </Button>
      </div>
    </MidScreenContent>
  );
};

export default LandingPage;
