"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { newGroupSchema } from "@/schemas/groupSchemas";
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
import { Button } from "@/components/ui/button";
import { graphql, useMutation } from "react-relay";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Users, Crown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { NewGroupFormMutation } from "@/__generated__/NewGroupFormMutation.graphql";

const NewGroupMutation = graphql`
  mutation NewGroupFormMutation(
    $name: String!
    $description: String
    $desicionModel: RuleType!
  ) {
    createGroup(
      input: {
        name: $name
        description: $description
        decisionModel: $desicionModel
      }
    ) {
      group {
        id
        name
        description
      }
    }
  }
`;

export const NewGroupForm = () => {
  const form = useForm<z.infer<typeof newGroupSchema>>({
    resolver: zodResolver(newGroupSchema),
  });

  const [commitMutation, isMutationInFlight] =
    useMutation<NewGroupFormMutation>(NewGroupMutation);

  const onSubmit = (data: z.infer<typeof newGroupSchema>) => {
    commitMutation({
      variables: {
        name: data.name,
        description: data.description,
        desicionModel: data.decisionModel,
      },
      optimisticResponse: {},
    });
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
          name="decisionModel"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Decision model</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select model..." />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="DEMOCRACY" leadingIcon={<Users />}>
                    Democracy
                  </SelectItem>
                  <SelectItem value="DICTATORSHIP" leadingIcon={<Crown />}>
                    Dictatorship
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormDescription className={cn("flex flex-1 flex-row")}>
                How do you want to have the group be controlled?
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
                Enter something descriptive to make inviting your friends
                easier.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          disabled={isMutationInFlight}
          aria-busy={isMutationInFlight}
        >
          Create group
        </Button>
      </form>
    </Form>
  );
};
