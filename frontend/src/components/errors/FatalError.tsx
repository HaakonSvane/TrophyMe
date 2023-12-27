import { MidScreenContent } from "@/components/containers/MidScreenContent";
import { SectionHeader } from "../labels/SectionHeader";

type FatalErrorProps = {
    error?: any;
};

export const FatalError = ({ error }: FatalErrorProps) => {
    const niceError = error?.toString();
    return (
        <MidScreenContent>
            <div className="grid gap-8">
                <div>
                    <SectionHeader title="fatal application error :(" />
                    <p>Whoops! It seems the application has met with a terrible fate</p>
                    <p>Contact a grown up if the problem persists</p>
                </div>
                {error && (
                    <div>
                        <code>{niceError}</code>
                    </div>
                )}
            </div>
        </MidScreenContent>
    );
};
