"use client";

import * as React from "react";
import { ChevronsUpDown, Search } from "lucide-react";
import emojiList from "emojilib";
import { useMemo, useRef, useState } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Input } from "./input";

const NUM_COLUMNS = 4;
const BUTTON_SIZE = 60;

type EmojiPickerProps = {
    onSelect: (emoji?: string) => void;
};

export const EmojiPicker = ({ onSelect }: EmojiPickerProps) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [searchText, setSearchText] = useState<string>();

    const filteredEmojis = useMemo(() => {
        if (!searchText) return Object.keys(emojiList);
        const filteredData = Object.entries(emojiList).filter(([_, searchTerms]) =>
            searchTerms.some(term => term.startsWith(searchText.toLowerCase())),
        );
        return filteredData.map(data => data[0]);
    }, [searchText]);

    const rowVirtualizer = useVirtualizer({
        count: Math.ceil(filteredEmojis.length / NUM_COLUMNS),
        getScrollElement: () => scrollRef.current,
        estimateSize: () => BUTTON_SIZE,
    });
    const [open, setOpen] = useState<boolean>(false);
    const [selectedEmoji, setSelectedEmoji] = useState<string>();

    const onClickEmoji = (emoji?: string) => {
        setSelectedEmoji(emoji);
        onSelect(emoji);
        setOpen(false);
    };

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between"
                >
                    {selectedEmoji ?? "Select trophy"}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0">
                <div className="flex items-center border-b px-3">
                    <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
                    <Input
                        value={searchText}
                        onChange={event => setSearchText(event.target.value)}
                        className={cn(
                            "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
                        )}
                    />
                </div>
                <div ref={scrollRef} className="h-60 overflow-auto">
                    <div
                        style={{
                            height: `${rowVirtualizer.getTotalSize()}px`,
                            width: "100%",
                        }}
                    >
                        {rowVirtualizer.getVirtualItems().map((item, rowIndex) => (
                            <div
                                key={item.key}
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: `${item.size}px`,
                                    transform: `translateY(${item.start}px)`,
                                }}
                            >
                                <div
                                    style={{
                                        position: "relative",
                                        display: "flex",
                                        flexDirection: "row",
                                        height: "100%",
                                    }}
                                >
                                    {[...Array(NUM_COLUMNS)].map((_, colIndex) => {
                                        const emoji = filteredEmojis.at(
                                            item.index * NUM_COLUMNS + colIndex,
                                        );
                                        return (
                                            <Button
                                                key={`${item.key.toString()}_${colIndex}`}
                                                className={`w-[${item.size}px] h-[${item.size}px] text-xl`}
                                                variant={
                                                    selectedEmoji === emoji ? "outline" : "ghost"
                                                }
                                            >
                                                {emoji}
                                            </Button>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    );
};
