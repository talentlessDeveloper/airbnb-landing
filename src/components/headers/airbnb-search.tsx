"use client";
import { Button } from "~/components/ui/button";

import { MenuIcon, SearchIcon } from "lucide-react";
import { Separator } from "../ui/separator";
import { cn } from "~/lib/utils";
import { useEffect, useState } from "react";
import {
  PopoverAddGuest,
  PopoverEndDate,
  PopoverRegion,
  PopoverStartDate,
} from "./search-popovers";
export default function AirbnbSearch({
  showDesktopSearch,
}: {
  showDesktopSearch: boolean;
}) {
  const [activeTab, setActiveTab] = useState<
    "destination" | "add-date" | "end-date" | "guest" | "idle"
  >("idle");

  return (
    <div
      className={cn(
        "absolute left-1/2 z-[5] hidden w-[90%] max-w-[55.5rem] grow -translate-x-1/2 items-center justify-center gap-8 pt-5 md:top-8 md:flex md:flex-col lg:top-0",
        {
          "md:hidden": !showDesktopSearch,
        },
      )}
    >
      {/* <span className="text-3xl">{scrollPosition}</span> */}
      <div
        className={cn("flex gap-2", {
          "md:hidden": !showDesktopSearch,
        })}
      >
        <Button variant={"ghost"} className="rounded-2xl text-lg">
          Stays
        </Button>
        <Button variant={"ghost"} className="rounded-2xl text-lg">
          Experiences
        </Button>
      </div>
      <div
        className={cn(
          "hidden h-16 w-full rounded-[2rem] border border-solid border-border bg-secondary shadow-lg md:flex",
          {
            "-translate-y-14": !showDesktopSearch,
          },
        )}
      >
        <div className="h-full w-1/3">
          <PopoverRegion />
        </div>
        <div className="flex items-center justify-center">
          <Separator orientation="vertical" className="h-[70%]" />
        </div>
        <div className="flex w-1/3">
          <PopoverStartDate />
          <div className="flex items-center justify-center">
            <Separator orientation="vertical" className="h-[70%]" />
          </div>
          <PopoverEndDate />
          <div className="flex items-center justify-center">
            <Separator orientation="vertical" className="h-[70%]" />
          </div>
        </div>
        <div className="relative w-1/3">
          <PopoverAddGuest />
          <div className="absolute right-0 top-0 z-[3] flex h-full items-center pr-3">
            <Button
              className={cn(
                "flex h-12 items-center justify-center gap-2 rounded-3xl text-lg font-semibold",
                {},
              )}
            >
              <span>
                <SearchIcon className="h-5 w-5" />
              </span>
              <span>Search</span>
            </Button>
          </div>
        </div>
      </div>
      {/* <div className="w-full max-w-[52.5rem] h-full rounded-[2rem] border border-solid border-border absolute">
      </div> */}
    </div>
  );
}
