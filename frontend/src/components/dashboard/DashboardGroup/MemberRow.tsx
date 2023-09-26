import { TrophyStack } from "@/components/trophies/TrophyStack";
import { MemberRowFragment$key } from "@/generated/MemberRowFragment.graphql";
import { Tooltip, Text } from "@primer/react";
import { graphql, useFragment } from "react-relay";

const DashboardGroupMemberRowFragment = graphql`
  fragment MemberRowFragment on User {
    username
    userProfile {
      firstName
      lastName
    }
    ...TrophyStackFragment
  }
`;

type MemberRowProps = {
  queryReference: MemberRowFragment$key;
  groupId: string;
};

export const MemberRow = ({ queryReference, groupId }: MemberRowProps) => {
  const data = useFragment(DashboardGroupMemberRowFragment, queryReference);

  const UserNameText = () => (
    <div className="px-1 py-1">
      <Text>{data.username}</Text>
    </div>
  );
  return (
    <div className="flex flex-auto flex-row justify-between">
      <>
        {data.userProfile ? (
          <Tooltip
            aria-label={`${data.userProfile.firstName} ${data.userProfile.lastName}`}
          >
            {UserNameText()}
          </Tooltip>
        ) : (
          UserNameText()
        )}
      </>
      <div>
        <TrophyStack groupId={groupId} queryReference={data} />
      </div>
    </div>
  );
};
