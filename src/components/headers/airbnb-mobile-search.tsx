/* eslint-disable @next/next/no-img-element */
"use client";
import { MinusCircleIcon, PlusCircleIcon, SearchIcon, X } from "lucide-react";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { cn } from "~/lib/utils";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { Separator } from "../ui/separator";

export default function AirbnbSearchMobile() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="fixed left-0 right-0 top-0 z-10 h-24 bg-background md:hidden">
      <Button
        variant={"ghost"}
        onClick={() => setOpenMenu(true)}
        className={cn(
          "mx-auto mt-[14px] flex h-14 w-[90%] items-center justify-start gap-1 rounded-[2rem] shadow-lg md:hidden",
          {
            hidden: openMenu,
          },
        )}
      >
        <span>
          <SearchIcon />
        </span>
        <div className="flex flex-col items-start">
          <span className="font-semibold text-airbnb-dark">Where to?</span>
          <ul className="flex list-disc items-center gap-5 text-airbnb-light">
            <li className="list-none">Anywhere</li> <li>Anyweek</li>
            <li>Add guest</li>
          </ul>
        </div>
      </Button>
      <ul
        className={cn(
          "w- absolute inset-0 z-[2] flex h-[100dvh] flex-col items-center gap-3 bg-secondary px-2 pt-0 text-airbnb-dark transition-transform duration-500 ease-out",
          {
            "-translate-y-[400%]": !openMenu,
            "translate-y-0": openMenu,
          },
        )}
      >
        <div>
          <Button
            className="absolute left-6 top-[14px] flex h-8 w-8 items-center justify-center rounded-full bg-background hover:scale-105 hover:bg-background/50"
            onClick={() => setOpenMenu(false)}
          >
            <span className="sr-only">Close Menu</span>
            <span>
              <X className="h-4 w-4 text-airbnb-dark" />
            </span>
          </Button>
        </div>
        <div className="w-full">
          <TabsDemo />
        </div>
      </ul>
    </div>
  );
}

export function TabsDemo() {
  const [activeTab, setActiveTab] = useState<"region" | "date" | "guest">(
    "region",
  );
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const disableDatesBeforeToday = (date: Date) => {
    return date < today;
  };
  return (
    <Tabs defaultValue="stay" className="w-full tracking-tight">
      <TabsList className="flex w-full justify-center bg-transparent">
        <TabsTrigger value="stay" className="bg-transparent text-lg">
          Stay
        </TabsTrigger>
        <TabsTrigger value="experience" className="bg-transparent text-lg">
          Experience
        </TabsTrigger>
      </TabsList>
      <TabsContent value="stay" className="flex flex-col gap-3">
        {activeTab === "region" ? (
          <Card className="rounded-3xl">
            <CardHeader>
              <CardTitle> Where To?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 overflow-x-hidden">
              <div className="grid gap-4">
                <div className="relative space-y-2">
                  <span className="absolute left-4 top-[25px]">
                    <SearchIcon />
                  </span>
                  <Input
                    placeholder="Search Destinations"
                    className="h-14 pl-11 placeholder:text-lg md:hidden"
                  />
                </div>
                <div className="no-scrollbar flex gap-2 overflow-x-auto">
                  {[
                    {
                      src: "https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg?im_w=320",
                      continent: "I'm flexible",
                    },
                    {
                      src: "https://a0.muscache.com/im/pictures/7b5cf816-6c16-49f8-99e5-cbc4adfd97e2.jpg?im_w=320",
                      continent: "europe",
                    },
                    {
                      src: "https://a0.muscache.com/im/pictures/dbb2b5ef-2efe-4099-81ac-c7b957f384ed.jpg?im_w=320",
                      continent: "United Kingdom",
                    },
                    {
                      src: "https://a0.muscache.com/im/pictures/4e762891-75a3-4fe1-b73a-cd7e673ba915.jpg?im_w=320",
                      continent: "United States",
                    },
                    {
                      src: "https://a0.muscache.com/im/pictures/cd9f2bf0-eefc-4980-b7cb-9c8ca3dae883.jpg?im_w=320",
                      continent: "Canada",
                    },
                    {
                      src: "https://a0.muscache.com/im/pictures/d2309871-490d-452f-a61c-35b19ad3d75e.jpg?im_w=320",
                      continent: "South Africa",
                    },
                  ].map((m, i) => {
                    return (
                      <div key={i}>
                        <button className="flex aspect-square w-[123px] shrink-0 flex-col gap-[0.625rem] rounded-xl duration-200 hover:border hover:border-solid hover:border-airbnb-dark">
                          <img
                            src={m.src}
                            alt="europe"
                            className="aspect-square h-full w-full rounded-xl object-cover"
                          />
                          <span className="sr-only">Europe</span>
                        </button>
                        <p className="capitalize">{m.continent}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Button
            variant={"ghost"}
            className="flex h-14 w-full items-center justify-between rounded-2xl shadow-lg"
            onClick={() => setActiveTab("region")}
          >
            <span className="text-base text-airbnb-light">Where</span>{" "}
            <span className="text-base font-semibold text-airbnb-dark">
              I am Flexible
            </span>
          </Button>
        )}
        {activeTab === "date" ? (
          <Card className="rounded-3xl">
            <CardHeader>
              <CardTitle> When is your trip?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div>
                <Calendar disabled={disableDatesBeforeToday} />
              </div>
            </CardContent>
          </Card>
        ) : (
          <Button
            variant={"ghost"}
            className="flex h-14 w-full items-center justify-between rounded-2xl shadow-lg"
            onClick={() => setActiveTab("date")}
          >
            <span className="text-base text-airbnb-light">When</span>{" "}
            <span className="text-base font-semibold text-airbnb-dark">
              Add Dates
            </span>
          </Button>
        )}
        {activeTab === "guest" ? (
          <Card className="w-full rounded-3xl">
            <CardHeader>
              <CardTitle> Who is coming?</CardTitle>
            </CardHeader>
            <CardContent className="w-full space-y-2">
              <div className="flex w-full items-center justify-between pb-3">
                <div>
                  <p className="text-base font-semibold text-airbnb-dark">
                    Adults
                  </p>
                  <p className="text-airbnb-light">Age 13 and above</p>
                </div>
                <div className="flex items-center gap-3">
                  <button className="h-8 w-8">
                    <span>
                      <MinusCircleIcon className="h-full w-full stroke-1 text-airbnb-light/60" />
                    </span>
                  </button>
                  <span>0</span>
                  <button className="h-8 w-8">
                    <span>
                      <PlusCircleIcon className="h-full w-full stroke-1 text-airbnb-light/60" />
                    </span>
                  </button>
                </div>
              </div>
              <Separator />
              <div className="flex w-full items-center justify-between pb-3">
                <div>
                  <p className="text-base font-semibold text-airbnb-dark">
                    Children
                  </p>
                  <p className="text-airbnb-light">Ages 2 - 12</p>
                </div>
                <div className="flex items-center gap-3">
                  <button className="h-8 w-8">
                    <span>
                      <MinusCircleIcon className="h-full w-full stroke-1 text-airbnb-light/60" />
                    </span>
                  </button>
                  <span>0</span>
                  <button className="h-8 w-8">
                    <span>
                      <PlusCircleIcon className="h-full w-full stroke-1 text-airbnb-light/60" />
                    </span>
                  </button>
                </div>
              </div>
              <Separator />
              <div className="flex w-full items-center justify-between">
                <div>
                  <p className="text-base font-semibold text-airbnb-dark">
                    Infant
                  </p>
                  <p className="text-airbnb-light">Under 2</p>
                </div>
                <div className="flex items-center gap-3">
                  <button className="h-8 w-8">
                    <span>
                      <MinusCircleIcon className="h-full w-full stroke-1 text-airbnb-light/60" />
                    </span>
                  </button>
                  <span>0</span>
                  <button className="h-8 w-8">
                    <span>
                      <PlusCircleIcon className="h-full w-full stroke-1 text-airbnb-light/60" />
                    </span>
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Button
            variant={"ghost"}
            className="flex h-14 w-full items-center justify-between rounded-2xl shadow-lg"
            onClick={() => setActiveTab("guest")}
          >
            <span className="text-base text-airbnb-light">Who</span>{" "}
            <span className="text-base font-semibold text-airbnb-dark">
              Add Guest
            </span>
          </Button>
        )}
      </TabsContent>
      <TabsContent value="experience" className="flex flex-col gap-3">
        {activeTab === "region" ? (
          <Card className="rounded-3xl">
            <CardHeader>
              <CardTitle> Where To?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 overflow-x-hidden">
              <div className="grid gap-4">
                <div className="relative space-y-2">
                  <span className="absolute left-4 top-[25px]">
                    <SearchIcon />
                  </span>
                  <Input
                    placeholder="Search Destinations"
                    className="h-14 pl-11 placeholder:text-lg md:hidden"
                  />
                </div>
                <div className="no-scrollbar flex gap-2 overflow-x-auto">
                  {[
                    {
                      src: "https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg?im_w=320",
                      continent: "I'm flexible",
                    },
                    {
                      src: "https://a0.muscache.com/im/pictures/7b5cf816-6c16-49f8-99e5-cbc4adfd97e2.jpg?im_w=320",
                      continent: "europe",
                    },
                    {
                      src: "https://a0.muscache.com/im/pictures/dbb2b5ef-2efe-4099-81ac-c7b957f384ed.jpg?im_w=320",
                      continent: "United Kingdom",
                    },
                    {
                      src: "https://a0.muscache.com/im/pictures/4e762891-75a3-4fe1-b73a-cd7e673ba915.jpg?im_w=320",
                      continent: "United States",
                    },
                    {
                      src: "https://a0.muscache.com/im/pictures/cd9f2bf0-eefc-4980-b7cb-9c8ca3dae883.jpg?im_w=320",
                      continent: "Canada",
                    },
                    {
                      src: "https://a0.muscache.com/im/pictures/d2309871-490d-452f-a61c-35b19ad3d75e.jpg?im_w=320",
                      continent: "South Africa",
                    },
                  ].map((m, i) => {
                    return (
                      <div key={i}>
                        <button className="flex aspect-square w-[123px] shrink-0 flex-col gap-[0.625rem] rounded-xl duration-200 hover:border hover:border-solid hover:border-airbnb-dark">
                          <img
                            src={m.src}
                            alt="europe"
                            className="aspect-square h-full w-full rounded-xl object-cover"
                          />
                          <span className="sr-only">Europe</span>
                        </button>
                        <p className="capitalize">{m.continent}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Button
            variant={"ghost"}
            className="flex h-14 w-full items-center justify-between rounded-2xl shadow-lg"
            onClick={() => setActiveTab("region")}
          >
            <span className="text-base text-airbnb-light">Where</span>{" "}
            <span className="text-base font-semibold text-airbnb-dark">
              I am Flexible
            </span>
          </Button>
        )}
        {activeTab === "date" ? (
          <Card className="rounded-3xl">
            <CardHeader>
              <CardTitle> When is your trip?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div>
                <Calendar disabled={disableDatesBeforeToday} />
              </div>
            </CardContent>
          </Card>
        ) : (
          <Button
            variant={"ghost"}
            className="flex h-14 w-full items-center justify-between rounded-2xl shadow-lg"
            onClick={() => setActiveTab("date")}
          >
            <span className="text-base text-airbnb-light">When</span>{" "}
            <span className="text-base font-semibold text-airbnb-dark">
              Add Dates
            </span>
          </Button>
        )}
        {activeTab === "guest" ? (
          <Card className="w-full rounded-3xl">
            <CardHeader>
              <CardTitle> Who is coming?</CardTitle>
            </CardHeader>
            <CardContent className="w-full space-y-2">
              <div className="flex w-full items-center justify-between pb-3">
                <div>
                  <p className="text-base font-semibold text-airbnb-dark">
                    Adults
                  </p>
                  <p className="text-airbnb-light">Age 13 and above</p>
                </div>
                <div className="flex items-center gap-3">
                  <button className="h-8 w-8">
                    <span>
                      <MinusCircleIcon className="h-full w-full stroke-1 text-airbnb-light/60" />
                    </span>
                  </button>
                  <span>0</span>
                  <button className="h-8 w-8">
                    <span>
                      <PlusCircleIcon className="h-full w-full stroke-1 text-airbnb-light/60" />
                    </span>
                  </button>
                </div>
              </div>
              <Separator />
              <div className="flex w-full items-center justify-between pb-3">
                <div>
                  <p className="text-base font-semibold text-airbnb-dark">
                    Children
                  </p>
                  <p className="text-airbnb-light">Ages 2 - 12</p>
                </div>
                <div className="flex items-center gap-3">
                  <button className="h-8 w-8">
                    <span>
                      <MinusCircleIcon className="h-full w-full stroke-1 text-airbnb-light/60" />
                    </span>
                  </button>
                  <span>0</span>
                  <button className="h-8 w-8">
                    <span>
                      <PlusCircleIcon className="h-full w-full stroke-1 text-airbnb-light/60" />
                    </span>
                  </button>
                </div>
              </div>
              <Separator />
              <div className="flex w-full items-center justify-between">
                <div>
                  <p className="text-base font-semibold text-airbnb-dark">
                    Infant
                  </p>
                  <p className="text-airbnb-light">Under 2</p>
                </div>
                <div className="flex items-center gap-3">
                  <button className="h-8 w-8">
                    <span>
                      <MinusCircleIcon className="h-full w-full stroke-1 text-airbnb-light/60" />
                    </span>
                  </button>
                  <span>0</span>
                  <button className="h-8 w-8">
                    <span>
                      <PlusCircleIcon className="h-full w-full stroke-1 text-airbnb-light/60" />
                    </span>
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Button
            variant={"ghost"}
            className="flex h-14 w-full items-center justify-between rounded-2xl shadow-lg"
            onClick={() => setActiveTab("guest")}
          >
            <span className="text-base text-airbnb-light">Who</span>{" "}
            <span className="text-base font-semibold text-airbnb-dark">
              Add Guest
            </span>
          </Button>
        )}
      </TabsContent>
    </Tabs>
  );
}
