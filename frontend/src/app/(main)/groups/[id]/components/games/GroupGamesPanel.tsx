import { GroupGamesPanelFragment$key } from "@/__generated__/GroupGamesPanelFragment.graphql";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { graphql, useFragment } from "react-relay";

const GroupGamesPanelFragment = graphql`
    fragment GroupGamesPanelFragment on Group {
        games {
            id
        }
    }
`;

type GroupGamesPanelProps = {
    fragmentKey: GroupGamesPanelFragment$key;
};
export const GroupGamesPanel = ({ fragmentKey }: GroupGamesPanelProps) => {
    const data = useFragment(GroupGamesPanelFragment, fragmentKey);

    return (
        <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[50px]"></TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead className="text-right">Trophies</TableHead>
                    <TableHead className="text-right">Top player</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell className="font-medium">INV001</TableCell>
                    <TableCell>Paid</TableCell>
                    <TableCell>Credit Card</TableCell>
                    <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
};
