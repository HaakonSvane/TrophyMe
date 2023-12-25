import Image from "next/image";
import { MidScreenContent } from "@/components/containers/MidScreenContent";
import { Spinner } from "@/components/ui/spinner";
import { SectionHeader } from "@/components/labels/SectionHeader";
import { OutlinedBox } from "@/components/containers/OutlinedBox";
import { Suspense } from "react";
import { ProviderList } from "@/components/auth/ProviderList";
import { Logo } from "@/components/header/Logo";

const SignInPage = () => {
    const SignInSpinner = () => (
        <div className="flex justify-center m-auto">
            <Spinner />
        </div>
    );

    return (
        <div>
            <MidScreenContent style={{ gap: 8 }}>
                <Image src="/trojiLogo.png" alt="Troji Logo" width={200} height={200} />
                <Logo />

                <SectionHeader title="Sign in" />
                <OutlinedBox className="py-8">
                    <Suspense fallback={<SignInSpinner />}>
                        <ProviderList />
                    </Suspense>
                </OutlinedBox>
            </MidScreenContent>
        </div>
    );
};

export default SignInPage;
