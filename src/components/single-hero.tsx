/* eslint-disable @next/next/no-img-element */
"use client";
import { HeartIcon, StarIcon } from "lucide-react";
import { Fragment, useEffect, useState } from "react";
import { AirbnbListing } from "~/lib/contentful/client";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

import dayjs from "dayjs";
import { cn } from "~/lib/utils";

export default function SingleHero({ m }: { m: AirbnbListing }) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const formattedStartDate = dayjs(m.date).format("MMM D");
  const formattedEndDate = dayjs(m.endDate).format("D");

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <div key={m.title} className="w-full">
      <Carousel setApi={setApi} className="relative w-full">
        <div className="absolute left-3 right-3 top-2 z-[1] flex items-center justify-between tracking-tight">
          <span className="flex items-center justify-center rounded-2xl bg-background px-3 py-1 text-sm font-semibold">
            Guest Favorite
          </span>
          <span>
            <HeartIcon className="fill-foreground stroke-background" />
          </span>
        </div>
        <CarouselContent className="h-[267px]">
          {m.images.map((m, i) => (
            <Fragment key={i}>
              <CarouselItem className="">
                <img
                  width={280}
                  height={280}
                  alt=""
                  src={m}
                  className="h-full w-full rounded-xl object-cover"
                />
                {current}
              </CarouselItem>
            </Fragment>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
        <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-[2px]">
          {m.images.map((m, y) => {
            const active = y + 1;
            return (
              <span
                key={`ispan${y}`}
                className={cn("h-3 w-3 rounded-full bg-secondary/50", {
                  "bg-secondary": current === active,
                })}
              ></span>
            );
          })}
        </div>
      </Carousel>
      <div className="mt-2 tracking-tight">
        <div className="flex items-center justify-between">
          <p className="font-semibold text-airbnb-dark">{m.location}</p>
          <p className="flex items-center">
            <span>
              <StarIcon className="h-4 w-4 fill-airbnb-dark" />
            </span>
            <span>{m.rating ? m.rating : ""}</span>
          </p>
        </div>
        <div className="leading-[1.125rem] text-airbnb-light">
          <p className="">{m.title}</p>
          <p className="">
            {formattedStartDate} - {formattedEndDate}
          </p>
        </div>
        <p className="mt-[3px] font-semibold">${m.price} night</p>
      </div>
    </div>
  );
}
