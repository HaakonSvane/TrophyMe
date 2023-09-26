import { graphql, useFragment } from "react-relay";
import { Text } from "@primer/react";
import { OutlinedBox } from "@/components/containers/OutlinedBox";
import { DashboardGroupFragment$key } from "src/__generated__/DashboardGroupFragment.graphql";
import { MemberRow } from "./MemberRow";

const GroupFragment = graphql`
  fragment DashboardGroupFragment on Group {
    id
    name
    members {
      id
      ...MemberRowFragment
    }
  }
`;

type DashboardGroupProps = {
  queryReference: DashboardGroupFragment$key;
};

export const DashboardGroup = ({ queryReference }: DashboardGroupProps) => {
  const data = useFragment(GroupFragment, queryReference);
  return (
    <OutlinedBox title={data.name}>
      <div style={{ flexDirection: "row" }}>
        {data.members.map((member) => (
          <MemberRow
            groupId={data.id}
            key={member.id}
            queryReference={member}
          />
        ))}
      </div>
    </OutlinedBox>
  );
};
