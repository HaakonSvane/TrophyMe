import Image from "next/image";
import { MidScreenContent } from "@/components/containers/MidScreenContent";
import { SectionHeader } from "@/components/labels/SectionHeader";
import { OutlinedBox } from "@/components/containers/OutlinedBox";
import { Logo } from "@/components/Header/Logo";
import { LoginButton } from "@/components/auth/LoginButton";

const SignInPage = () => {
    return (
        <div>
            <MidScreenContent style={{ gap: 8 }}>
                <Image src="/trojiLogo.png" alt="Troji Logo" width={200} height={200} />
                <Logo />

                <SectionHeader title="Sign in" />
                <OutlinedBox className="py-8">
                    <LoginButton />
                </OutlinedBox>
            </MidScreenContent>
        </div>
    );
};

export default SignInPage;
