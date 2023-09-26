import { TrophyAvatarFragment$key } from "@/generated/TrophyAvatarFragment.graphql";
import { Tooltip, Text } from "@primer/react";
import { graphql, useFragment } from "react-relay";

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
    <Tooltip aria-label={data.game.name}>
      <Text>{data.game.symbol}</Text>
    </Tooltip>
  );
};
