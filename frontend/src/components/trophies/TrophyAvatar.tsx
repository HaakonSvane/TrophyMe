import { TrophyAvatarFragment$key } from "@/generated/TrophyAvatarFragment.graphql";
import { graphql, useFragment } from "react-relay";
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "../ui/tooltip";

const TrophyAvatarFragment = graphql`
    fragment TrophyAvatarFragment on Trophy {
        game {
            symbol
            name
        }
    }
`;

type TrophyAvatarProps = {
    queryReference: TrophyAvatarFragment$key;
};

export const TrophyAvatar = ({ queryReference }: TrophyAvatarProps) => {
    const data = useFragment(TrophyAvatarFragment, queryReference);

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <p>{data.game.symbol}</p>
                </TooltipTrigger>
                <TooltipContent>{data.game.name}</TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};
