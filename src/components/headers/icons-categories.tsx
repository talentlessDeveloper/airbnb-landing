"use client";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { useRouter } from "next/navigation";

const iconsData = [
  {
    icon: "https://a0.muscache.com/im/pictures/mediaverse/category_icon/original/3e5243c8-4d15-4c6b-97e3-7ba2bb7bb880.png",
    name: "All",
  },
  {
    icon: "https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg",
    name: "Rooms",
  },
  {
    icon: "https://a0.muscache.com/pictures/c0fa9598-4e37-40f3-b734-4bd0e2377add.jpg",
    name: "New",
  },
  {
    icon: "https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg",
    name: "Trending",
  },
  {
    icon: "https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg",
    name: "OMG",
  },
  {
    icon: "https://a0.muscache.com/pictures/5ed8f7c7-2e1f-43a8-9a39-4edfc81a3325.jpg",
    name: "Breakfast",
  },
  {
    icon: "https://a0.muscache.com/pictures/6b639c8d-cf9b-41fb-91a0-91af9d7677cc.jpg",
    name: "Golfing",
  },
  {
    icon: "https://a0.muscache.com/pictures/248f85bf-e35e-4dc3-a9a1-e1dbff9a3db4.jpg",
    name: "Country",
  },
  {
    icon: "https://a0.muscache.com/pictures/ed8b9e47-609b-44c2-9768-33e6a22eccb2.jpg",
    name: "Cities",
  },
  {
    icon: "https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg",
    name: "Amazing Views",
  },
  {
    icon: "https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg",
    name: "Country",
  },
  {
    icon: "https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg",
    name: "Trending",
  },
  {
    icon: "https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg",
    name: "Trending",
  },
  {
    icon: "https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg",
    name: "Trending",
  },
];

export default function IconsCategories() {
  const router = useRouter();
  return (
    <>
      <div className="sticky top-24 z-[5] flex h-[78px] flex-col justify-center border-t border-solid border-t-border bg-background px-6 shadow-sm md:top-52">
        <Carousel className="">
          <CarouselContent className="-ml-4 flex h-full items-center">
            {iconsData.map((ic, i) => (
              <CarouselItem
                key={i}
                className="grow-1 h-full max-w-[80px] shrink-0 basis-full pl-4 md:max-w-[120px] md:pl-8"
              >
                <button
                  onClick={() => {
                    console.log(ic.name);
                    router.push(`?category=${ic.name.toLowerCase()}`);
                  }}
                  className="flex flex-col items-center gap-1 opacity-70 duration-200 hover:opacity-100"
                >
                  <img src={ic.icon} alt={ic.name} className="h-6 w-6" />
                  <span className="whitespace-nowrap text-sm font-semibold tracking-tight">
                    {ic.name}
                  </span>
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute -left-6" />
          <CarouselNext className="absolute -right-3" />
        </Carousel>
      </div>
    </>
  );
}
