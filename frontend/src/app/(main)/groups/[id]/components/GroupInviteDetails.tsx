"use client";

import { Button } from "@/components/ui/button";
import {
    DrawerDialog,
    DrawerDialogBody,
    DrawerDialogContent,
    DrawerDialogHeader,
    DrawerDialogTitle,
    DrawerDialogTrigger,
} from "@/components/ui/drawerDialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Copy, QrCode } from "lucide-react";
import { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import { toast } from "sonner";

type GroupInviteQRCodeProps = {
    inviteCode: string;
};
export const GroupInviteDetails = ({ inviteCode }: GroupInviteQRCodeProps) => {
    const [isClient, setIsClient] = useState(false);
    const [inviteUrl, setInviteUrl] = useState<string>();

    useEffect(() => {
        setIsClient(true);
        if (typeof window === "undefined") return;
        const fullPathName = window.location.href;
        const baseUrl = new URL(fullPathName).host;
        setInviteUrl(`https://www.${baseUrl}/groups/join?inviteCode=${inviteCode}`);
    }, [inviteCode]);

    const onCopyCodeClick = () => {
        if (!inviteUrl) return;
        navigator.clipboard.writeText(inviteUrl);
        toast("Copied invite link to clipboard!");
    };

    if (!isClient || !inviteUrl) return null;
    return (
        <div>
            <Label htmlFor="invite-code">Invite code</Label>
            <div className="flex flex-row gap-2">
                <Input id="invite-code" readOnly disabled value={inviteCode} />
                <Button variant="outline" onClick={onCopyCodeClick}>
                    <Copy />
                </Button>
                <DrawerDialog>
                    <DrawerDialogTrigger asChild>
                        <Button variant="outline">
                            <QrCode />
                        </Button>
                    </DrawerDialogTrigger>
                    <DrawerDialogContent>
                        <DrawerDialogHeader>
                            <DrawerDialogTitle>Join my group in troji</DrawerDialogTitle>
                        </DrawerDialogHeader>
                        <DrawerDialogBody className="flex justify-center">
                            <div className="p-2 bg-white rounded-lg">
                                <QRCode value={inviteUrl} size={256} />
                            </div>
                        </DrawerDialogBody>
                    </DrawerDialogContent>
                </DrawerDialog>
            </div>
        </div>
    );
};
