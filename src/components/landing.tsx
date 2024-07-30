import { Suspense } from "react";
import HeroGrid from "./hero-grid";
import { Skeleton } from "./ui/skeleton";

export const dynamic = "force-dynamic";

export default function Landing({
  category,
  region,
}: {
  category?: string;
  region?: string;
}) {
  const categoryKey = category ? category : "key";
  const regionKey = region ? region : "region";
  return (
    <div className="bg-background">
      {/* <div className="bg-background pt-24"></div> */}

      <div className="relative px-6 pt-44 md:px-10 md:pt-72 lg:pt-64">
        <h2 className="mb-4 text-xl font-semibold md:text-3xl">Icon</h2>
        <Suspense key={categoryKey + regionKey} fallback={<SkeletonGrid />}>
          <HeroGrid category={category} region={region} />
        </Suspense>
      </div>
      <div className="px-6 pt-10 md:px-10">
        <h2 className="mb-4 text-xl font-semibold md:text-3xl">
          Past Experiences
        </h2>
        <Suspense fallback={<SkeletonGrid />}>
          <HeroGrid />
        </Suspense>
      </div>
    </div>
  );
}

function SkeletonGrid() {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => {
          return (
            <div key={`skeeleton${i}`} className="flex flex-col space-y-3">
              <Skeleton className="h-[267px] w-full rounded-xl" />
              <div className="flex items-center justify-between">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="1/4 h-4" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
