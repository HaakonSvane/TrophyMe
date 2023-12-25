import { Loader2 } from "lucide-react";
type SpinnerProps = {
    size?: number;
};

export const Spinner = ({ size }: SpinnerProps) => {
    return <Loader2 scale={size} />;
};
