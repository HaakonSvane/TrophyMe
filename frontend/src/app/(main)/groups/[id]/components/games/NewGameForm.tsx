import { NewGameFormMutation } from "@/__generated__/NewGameFormMutation.graphql";
import { Button } from "@/components/ui/button";
import { EmojiPicker } from "@/components/ui/emojiPicker";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { newGameSchema } from "@/schemas/gameSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { graphql, useMutation } from "react-relay";
import { z } from "zod";

const NewGameFormMutation = graphql`
    mutation NewGameFormMutation($input: CreateGameInput!, $connections: [ID!]!) {
        createGame(input: $input)
            @prependNode(connections: $connections, edgeTypeName: "GamesEdge") {
            game {
                id
                symbol
                name
                description
            }
        }
    }
`;

type NewGameFormProps = {
    groupId: string;
    connectionId: string;
    onSuccess?: () => void;
};

export const NewGameForm = ({ groupId, connectionId, onSuccess }: NewGameFormProps) => {
    const form = useForm<z.infer<typeof newGameSchema>>({
        resolver: zodResolver(newGameSchema),
    });

    const [commitMutation, isMutationInFlight] =
        useMutation<NewGameFormMutation>(NewGameFormMutation);

    const onSubmit = (data: z.infer<typeof newGameSchema>) => {
        commitMutation({
            variables: {
                input: {
                    groupId,
                    ...data,
                },
                connections: [connectionId],
            },
        });
        onSuccess?.();
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Group name</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormDescription>
                                This is your group's name. It will be displayed to other users.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="symbol"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Trophy</FormLabel>
                            <EmojiPicker onSelect={field.onChange} />
                            {/* <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select model..." />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="DEMOCRACY" leadingIcon={Users}>
                                        Democracy
                                    </SelectItem>
                                    <SelectItem value="DICTATORSHIP" leadingIcon={Crown}>
                                        Dictatorship
                                    </SelectItem>
                                </SelectContent>
                            </Select> */}
                            <FormDescription className={"flex flex-1 flex-row"}>
                                Select the emoji that will be awarded winners of this game
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Textarea {...field} />
                            </FormControl>
                            <FormDescription>
                                Enter something descriptive to make inviting your friends easier.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" disabled={isMutationInFlight} aria-busy={isMutationInFlight}>
                    Create game
                </Button>
            </form>
        </Form>
    );
};
