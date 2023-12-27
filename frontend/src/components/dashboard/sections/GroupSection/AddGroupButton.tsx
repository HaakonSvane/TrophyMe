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
import { useState } from "react";
import { toast } from "sonner";

type AddGroupButtonProps = {
    groupsConnectionId: string;
};

export const AddGroupButton = ({ groupsConnectionId }: AddGroupButtonProps) => {
    const [isShowingDialog, setIsShowingDialog] = useState<boolean>(false);

    const onCreateGroup = () => {
        toast.success("Successfully created a new group!");
        setIsShowingDialog(false);
    };

    return (
        <Dialog open={isShowingDialog} onOpenChange={newVal => setIsShowingDialog(newVal)}>
            <DialogTrigger asChild>
                <Button
                    variant="outline"
                    leadingIcon={<Plus />}
                    onClick={() => setIsShowingDialog(true)}
                >
                    Add
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create a new group</DialogTitle>
                    <DialogDescription>
                        After creating a group, you can invite your friends to join it, create games
                        and earn trophies!
                    </DialogDescription>
                </DialogHeader>
                <NewGroupForm connectionId={groupsConnectionId} onSuccess={onCreateGroup} />
            </DialogContent>
        </Dialog>
    );
};
