import { MidScreenContent } from "@/components/containers/MidScreenContent";
import { SectionHeader } from "@/components/labels/SectionHeader";
import { Button } from "@/components/ui/button";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";

const LandingPage = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);
  if (session) {
    redirect("/dashboard");
  }
  return (
    <MidScreenContent className="justify-center">
      <SectionHeader title="TROJI.ME" />
      <div className="flex flex-col gap-8">
        <p>
          Welcome to Troji.me! This is a website where you can track your wins
          and losses in games and compete with your friends.
        </p>
        <p>To begin, please sign in. It's free!</p>
        <Button asChild>
          <Link href={"/auth/signIn"}>Sign in</Link>
        </Button>
      </div>
    </MidScreenContent>
  );
};

export default LandingPage;
