import { createClient } from "contentful";

if (!process.env.CONTENTFUL_ACCESS_TOKEN || !process.env.CONTENTFUL_SPACE_ID) {
  throw new Error("Missing Contentful Credentials");
}

export const contentfulClient = createClient({
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  space: process.env.CONTENTFUL_SPACE_ID,
});

export type AirbnbListing = {
  location: string;
  title: string;
  date: string;
  images: string[];
  rating: number;
  price: number;
  endDate: string;
  region: string;
  category: string;
};

export const getAirbnbListings = async (): Promise<AirbnbListing[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const contentData = await contentfulClient.getEntries({
    content_type: "airbnbLanding",
  });

  return contentData.items.map((item: any) => {
    const {
      location,
      title,
      date,
      images,
      rating,
      price,
      endDate,
      region,
      category,
    } = item.fields;
    return {
      location,
      title,
      date,
      images,
      rating,
      price,
      endDate,
      region,
      category,
    };
  });
};

export const getEntriesByCategory = async (
  category: string,
): Promise<AirbnbListing[] | []> => {
  try {
    const contentData = await contentfulClient.getEntries({
      content_type: "airbnbLanding",
      "fields.category": category,
    });
    return contentData.items.map((item: any) => {
      const {
        location,
        title,
        date,
        images,
        rating,
        price,
        endDate,
        region,
        category,
      } = item.fields;
      return {
        location,
        title,
        date,
        images,
        rating,
        price,
        endDate,
        region,
        category,
      };
    });
  } catch (error) {
    return [];
  }
};
export const getEntriesByRegion = async (
  region: string,
): Promise<AirbnbListing[] | []> => {
  try {
    if (region === "all") {
      const contentData = await contentfulClient.getEntries({
        content_type: "airbnbLanding",
        "fields.category": region,
      });

      return contentData.items.map((item: any) => {
        const {
          location,
          title,
          date,
          images,
          rating,
          price,
          endDate,
          region,
          category,
        } = item.fields;
        return {
          location,
          title,
          date,
          images,
          rating,
          price,
          endDate,
          region,
          category,
        };
      });
    }
    const contentData = await contentfulClient.getEntries({
      content_type: "airbnbLanding",
      "fields.region": region,
    });

    return contentData.items.map((item: any) => {
      const {
        location,
        title,
        date,
        images,
        rating,
        price,
        endDate,
        region,
        category,
      } = item.fields;
      return {
        location,
        title,
        date,
        images,
        rating,
        price,
        endDate,
        region,
        category,
      };
    });
  } catch (error) {
    return [];
  }
};
