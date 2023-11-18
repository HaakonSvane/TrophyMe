import { NewGroupForm } from "@/components/group/NewGroupForm";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";

export const AddGroupButton = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline" leadingIcon={<Plus />}>
        Add
      </Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Create a new group</DialogTitle>
        <DialogDescription>
          After creating a group, you can invite your friends to join it, create
          games and earn trophies!
        </DialogDescription>
      </DialogHeader>
      <NewGroupForm />
    </DialogContent>
  </Dialog>
);
