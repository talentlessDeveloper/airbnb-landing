/* eslint-disable @next/next/no-img-element */
import { MinusCircleIcon, PlusCircleIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Separator } from "../ui/separator";
import { useState } from "react";

export function PopoverRegion() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"ghost"}
          className="relative flex h-full w-full grow flex-col items-start rounded-[2rem] px-6 py-[14px] data-[state=open]:z-[2] data-[state=open]:border data-[state=open]:border-solid data-[state=open]:border-border data-[state=open]:bg-background data-[state=open]:shadow data-[state=open]:shadow-border"
        >
          <span className="font-semibold">Where</span>
          <span>Search Destinations</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 md:w-[420px]">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="hidden font-medium leading-none md:block">
              Search By Regions
            </h4>
            <h4 className="block text-2xl font-semibold leading-none md:hidden">
              Where?
            </h4>
            <Input placeholder="Seach Destinations" className="md:hidden" />
          </div>
          <div className="grid grid-cols-3 gap-2">
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
      </PopoverContent>
    </Popover>
  );
}
export function PopoverStartDate() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"ghost"}
          className="relative flex h-full w-full flex-col items-start rounded-[2rem] px-6 py-[14px] data-[state=open]:z-[2] data-[state=open]:border data-[state=open]:border-solid data-[state=open]:border-border data-[state=open]:bg-background data-[state=open]:shadow data-[state=open]:shadow-border"
        >
          <span className="font-semibold">Check In</span>
          <span>Add Dates</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 md:w-[420px]">
        <Card className="rounded-3xl">
          <CardHeader>
            <CardTitle> When is your trip?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div>
              <Calendar />
            </div>
          </CardContent>
        </Card>
      </PopoverContent>
    </Popover>
  );
}
export function PopoverEndDate() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"ghost"}
          className="relative flex h-full w-full flex-col items-start rounded-[2rem] px-6 py-[14px] data-[state=open]:z-[2] data-[state=open]:border data-[state=open]:border-solid data-[state=open]:border-border data-[state=open]:bg-background data-[state=open]:shadow data-[state=open]:shadow-border"
        >
          <span className="font-semibold">Check Out</span>
          <span>Add Dates</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 md:w-[420px]">
        <Card className="rounded-3xl">
          <CardHeader>
            <CardTitle> When is your trip?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div>
              <Calendar />
            </div>
          </CardContent>
        </Card>
      </PopoverContent>
    </Popover>
  );
}
export function PopoverAddGuest() {
  const [guest, setGuests] = useState({
    adult: 0,
    children: 0,
    infant: 0,
  });
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"ghost"}
          className="relative flex h-full w-full flex-col items-start rounded-[2rem] px-6 py-[14px] data-[state=open]:z-[2] data-[state=open]:border data-[state=open]:border-solid data-[state=open]:border-border data-[state=open]:bg-background data-[state=open]:shadow data-[state=open]:shadow-border"
        >
          <span className="font-semibold">Who</span>
          <span>Add Guest</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 rounded-3xl lg:w-[420px]">
        <Card className="w-full rounded-none border-none px-0 shadow-none">
          <CardHeader>
            <CardTitle> Who is coming?</CardTitle>
          </CardHeader>
          <CardContent className="w-full space-y-2 px-0">
            <div className="flex w-full items-center justify-between pb-3">
              <div>
                <p className="text-base font-semibold text-airbnb-dark">
                  Adults
                </p>
                <p className="text-airbnb-light">Age 13 and above</p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  disabled={
                    guest.adult === 0 ||
                    (guest.infant > 0 && guest.adult === 1) ||
                    (guest.children > 0 && guest.adult === 1)
                  }
                  className="h-8 w-8 text-airbnb-light/70 disabled:text-airbnb-light/30"
                  onClick={() => {
                    if (guest.adult === 0) {
                      return;
                    }
                    setGuests((g) => ({ ...g, adult: g.adult - 1 }));
                  }}
                >
                  <span>
                    <MinusCircleIcon className="h-full w-full stroke-1 text-current" />
                  </span>
                </button>
                <span>{guest.adult}</span>
                <button
                  className="h-8 w-8"
                  onClick={() => {
                    setGuests((g) => ({ ...g, adult: g.adult + 1 }));
                  }}
                >
                  <span>
                    <PlusCircleIcon className="h-full w-full stroke-1 text-airbnb-light/70" />
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
                <button
                  className="h-8 w-8 text-airbnb-light/70 disabled:text-airbnb-light/30"
                  disabled={guest.children === 0}
                  onClick={() => {
                    if (guest.children === 0) {
                      return;
                    }
                    setGuests((g) => ({ ...g, children: g.children - 1 }));
                  }}
                >
                  <span>
                    <MinusCircleIcon className="h-full w-full stroke-1 text-current" />
                  </span>
                </button>
                <span>{guest.children}</span>
                <button
                  className="h-8 w-8"
                  onClick={() => {
                    if (guest.adult === 0) {
                      setGuests((g) => ({
                        ...g,
                        children: g.children + 1,
                        adult: g.adult + 1,
                      }));
                      return;
                    }
                    setGuests((g) => ({ ...g, children: g.children + 1 }));
                  }}
                >
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
                <button
                  className="h-8 w-8 text-airbnb-light/70 disabled:text-airbnb-light/30"
                  disabled={guest.infant === 0}
                  onClick={() => {
                    if (guest.infant === 0) {
                      return;
                    }
                    setGuests((g) => ({ ...g, infant: g.infant - 1 }));
                  }}
                >
                  <span>
                    <MinusCircleIcon className="h-full w-full stroke-1 text-current" />
                  </span>
                </button>
                <span>{guest.infant}</span>
                <button
                  className="h-8 w-8"
                  onClick={() => {
                    if (guest.adult === 0) {
                      setGuests((g) => ({
                        ...g,
                        infant: g.infant + 1,
                        adult: g.adult + 1,
                      }));
                      return;
                    }
                    setGuests((g) => ({
                      ...g,
                      infant: g.infant + 1,
                    }));
                  }}
                >
                  <span>
                    <PlusCircleIcon className="h-full w-full stroke-1 text-airbnb-light/60" />
                  </span>
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      </PopoverContent>
    </Popover>
  );
}
