import { HeartIcon, SearchIcon, UserRoundIcon } from "lucide-react";

export default function FixedFooter() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-10 flex h-20 items-center justify-center gap-3 bg-background text-airbnb-light shadow md:hidden">
      <div className="gap--1 flex flex-col items-center justify-center text-sm">
        <span>
          <SearchIcon className="h-4 w-4" />
        </span>
        <span>Explore</span>
      </div>
      <div className="gap--1 flex flex-col items-center justify-center text-sm">
        <span>
          <HeartIcon className="h-4 w-4" />
        </span>
        <span>WishList</span>
      </div>
      <div className="gap--1 flex flex-col items-center justify-center text-sm text-primary">
        <span>
          <UserRoundIcon className="h-4 w-4 text-primary" />
        </span>
        <span>Sign up</span>
      </div>
    </div>
  );
}
