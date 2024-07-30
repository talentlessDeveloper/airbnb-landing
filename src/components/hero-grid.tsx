import {
  AirbnbListing,
  getAirbnbListings,
  getEntriesByCategory,
  getEntriesByRegion,
} from "~/lib/contentful/client";
import SingleHero from "./single-hero";

export const dynamic = "force-dynamic";

export default async function HeroGrid({
  category,
  region,
}: {
  category?: string;
  region?: string;
}) {
  // const heroData = await getAirbnbListings();

  let heroData: AirbnbListing[] = [];
  if (category || !region) {
    heroData = await getEntriesByCategory(category ?? "all");
  }
  if (region) {
    heroData = await getEntriesByRegion(region);
  }
  console.log("category:", category, region);
  return (
    <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {heroData && heroData.length > 0 ? (
        heroData.map((m) => {
          return <SingleHero key={m.title} m={m} />;
        })
      ) : (
        <div className="flex justify-center">
          <p className="text-center text-lg">No Data Available</p>
        </div>
      )}
    </div>
  );
}
