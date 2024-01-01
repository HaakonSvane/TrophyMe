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
        games(first: 10) @connection(key: "GroupGamesPanel_games") {
            edges {
                node {
                    id
                    symbol
                    name
                    description
                }
            }
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
                {data.games?.edges?.map(game => (
                    <TableRow key={game.node.id}>
                        <TableCell className="text-center">{game.node.symbol}</TableCell>
                        <TableCell className="font-medium">{game.node.name}</TableCell>
                        <TableCell>{game.node.description}</TableCell>
                        <TableCell>{"[IMPL]"}</TableCell>
                        <TableCell className="text-right">{"[IMPL]"}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};
