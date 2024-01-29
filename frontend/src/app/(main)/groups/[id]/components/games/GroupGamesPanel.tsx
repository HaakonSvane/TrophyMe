import { GroupGamesPanelFragment$key } from "@/__generated__/GroupGamesPanelFragment.graphql";
import { Button } from "@/components/ui/button";
import {
    DrawerDialog,
    DrawerDialogBody,
    DrawerDialogContent,
    DrawerDialogDescription,
    DrawerDialogHeader,
    DrawerDialogTitle,
    DrawerDialogTrigger,
} from "@/components/ui/drawerDialog";
import { Input } from "@/components/ui/input";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { UserPlus2 } from "lucide-react";
import { useState } from "react";
import { graphql, useFragment } from "react-relay";
import { toast } from "sonner";
import { NewGameForm } from "./NewGameForm";

const GroupGamesPanelFragment = graphql`
    fragment GroupGamesPanelFragment on Group {
        id
        games(first: 10, order: [{ createdDate: DESC }]) @connection(key: "GroupGamesPanel_games") {
            __id
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
    const [isCreateGameDialogOpen, setIsCreateGameDialogOpen] = useState<boolean>(false);

    const onCreateNewGameSuccess = () => {
        setIsCreateGameDialogOpen(false);
        toast.success("Successfully created a new game!");
    };

    return (
        <>
            <div className="flex flex-row gap-4">
                <Input placeholder="Search for a game..." />
                <DrawerDialog
                    open={isCreateGameDialogOpen}
                    onOpenChange={setIsCreateGameDialogOpen}
                >
                    <DrawerDialogTrigger asChild>
                        <Button
                            variant="secondary"
                            leadingIcon={UserPlus2}
                            className="whitespace-nowrap"
                        >
                            Create game
                        </Button>
                    </DrawerDialogTrigger>
                    <DrawerDialogContent>
                        <DrawerDialogHeader>
                            <DrawerDialogTitle>Create a new group</DrawerDialogTitle>
                            <DrawerDialogDescription>
                                You can create new groups and invite all your friends to join and
                                compete.
                            </DrawerDialogDescription>
                        </DrawerDialogHeader>
                        <DrawerDialogBody>
                            <NewGameForm
                                groupId={data.id}
                                connectionId={data.games!.__id}
                                onSuccess={onCreateNewGameSuccess}
                            />
                        </DrawerDialogBody>
                    </DrawerDialogContent>
                </DrawerDialog>
            </div>
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
        </>
    );
};
