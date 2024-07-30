"use client";
import { GlobeIcon, MenuIcon, SearchIcon } from "lucide-react";
import Link from "next/link";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import AirbnbLogo from "~/svgs/airbnb-logo";
import { Button } from "../ui/button";
import AirbnbSearchMobile from "./airbnb-mobile-search";
import AirbnbSearch from "./airbnb-search";
import { useState, useEffect } from "react";
import IconsCategories from "./icons-categories";
import { cn } from "~/lib/utils";
import { Separator } from "../ui/separator";

export default function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showDesktopSearch, setShowDesktopSearch] = useState(true);
  const [forceShowSearch, setForceShowSearch] = useState(false);
  const [initialForceScrollPosition, setInitialForceScrollPosition] =
    useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
      if (position > 130 && !forceShowSearch) {
        setShowDesktopSearch(false);
      } else if (forceShowSearch && position > initialForceScrollPosition) {
        setShowDesktopSearch(false);
        setForceShowSearch(false);
      } else {
        setShowDesktopSearch(true);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [forceShowSearch, initialForceScrollPosition]);

  useEffect(() => {
    if (scrollPosition <= 130) {
      setForceShowSearch(false);
    }
  }, [scrollPosition]);
  return (
    <div>
      <header className="fixed left-0 right-0 z-[3] flex flex-col bg-background tracking-tight text-airbnb-dark">
        <nav className="hidden h-20 items-center justify-between px-10 md:flex">
          <Link href="/">
            <AirbnbLogo />
          </Link>

          <Button
            className={cn(
              "invisible hidden h-12 scale-0 items-center gap-3 rounded-[2rem] text-base shadow hover:shadow-md md:flex lg:ml-28",
              {
                "visible scale-100": !showDesktopSearch,
              },
            )}
            variant={"ghost"}
            onClick={() => {
              setForceShowSearch(true);
              setShowDesktopSearch(true);
              setInitialForceScrollPosition(window.scrollY);
            }}
          >
            <span>Anywhere</span>
            <div className="flex h-full items-center justify-center">
              <Separator orientation="vertical" className="h-[70%]" />
            </div>
            <span>Anyweek</span>
            <div className="flex h-full items-center justify-center">
              <Separator orientation="vertical" className="h-[70%]" />
            </div>
            <div className="flex items-center justify-between gap-7">
              <span className="text-airbnb-light">Add guests</span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary">
                <SearchIcon className="h-4 w-4 text-background" />
              </span>
            </div>
          </Button>

          <div className="flex items-center gap-3">
            <Button
              variant={"ghost"}
              className="rounded-3xl text-sm font-semibold tracking-tight text-airbnb-dark"
            >
              Airbnb your home
            </Button>
            <Button variant={"ghost"} className="rounded-full">
              <span className="sr-only">Translate</span>{" "}
              <span>
                <GlobeIcon className="h-4 w-4" />
              </span>
            </Button>
            <PopoverHeader />
          </div>
        </nav>
        <AirbnbSearch showDesktopSearch={showDesktopSearch} />
        <AirbnbSearchMobile />
        <div
          className={cn(
            "translate-y-[5.5rem] duration-200 md:translate-y-28 lg:translate-y-24",
            {
              "translate-y-[5.5rem] md:-translate-y-2 lg:translate-y-0":
                scrollPosition > 130 && !forceShowSearch,
              hidden: forceShowSearch,
            },
          )}
        >
          <IconsCategories />
        </div>
        {/* <div className="pt-24"></div> */}
      </header>
    </div>
  );
}

function PopoverHeader() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="flex h-12 items-center gap-2 rounded-3xl px-[14px] py-2"
        >
          <span>
            <MenuIcon className="h-4 w-4 text-airbnb-dark" />
          </span>
          <span className="h-8 w-8 rounded-full">
            <UserSVG />
          </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 -translate-x-5 rounded-md px-0 text-sm">
        <ul className="grid gap-1">
          <div className="space-y-[2px]">
            <li className="px-3 py-2 hover:bg-secondary">Sign Up</li>
            <li className="px-3 py-2 hover:bg-secondary">Log in</li>
          </div>
          <Separator />
          <div className="space-y-[2px]">
            <li className="px-3 py-2 hover:bg-secondary">Gift Card</li>
            <li className="px-3 py-2 hover:bg-secondary">Airbnb Your home</li>
            <li className="px-3 py-2 hover:bg-secondary">Help Center</li>
          </div>
        </ul>
      </PopoverContent>
    </Popover>
  );
}

function UserSVG() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      aria-hidden="true"
      role="presentation"
      focusable="false"
      className="block h-full w-full fill-airbnb-light"
    >
      <path d="M16 .7C7.56.7.7 7.56.7 16S7.56 31.3 16 31.3 31.3 24.44 31.3 16 24.44.7 16 .7zm0 28c-4.02 0-7.6-1.88-9.93-4.81a12.43 12.43 0 0 1 6.45-4.4A6.5 6.5 0 0 1 9.5 14a6.5 6.5 0 0 1 13 0 6.51 6.51 0 0 1-3.02 5.5 12.42 12.42 0 0 1 6.45 4.4A12.67 12.67 0 0 1 16 28.7z"></path>
    </svg>
  );
}
