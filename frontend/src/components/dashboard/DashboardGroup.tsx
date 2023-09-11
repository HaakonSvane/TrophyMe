import { graphql, useFragment } from "react-relay";
import { Text } from "@primer/react";
import { OutlinedBox } from "@/components/containers/OutlinedBox";
import { DashboardGroupFragment$key } from "src/__generated__/DashboardGroupFragment.graphql";

const GroupFragment = graphql`
  fragment DashboardGroupFragment on Group {
    name
  }
`;

type DashboardGroupProps = {
  queryReference: DashboardGroupFragment$key;
};

export const DashboardGroup = ({ queryReference }: DashboardGroupProps) => {
  const data = useFragment(GroupFragment, queryReference);
  return (
    <OutlinedBox title={data.name}>
      <Text>Some content!</Text>
    </OutlinedBox>
  );
};
