"use server";

export async function test() {
  return "test";
}

// const contentful = require("contentful");

// if (!process.env.CONTENTFUL_ACCESS_TOKEN || !process.env.CONTENTFUL_SPACE_ID) {
//   throw new Error("Missing Contentful Credentials");
// }
// export const contentfulClient = contentful.createClient({
//   accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
//   space: process.env.CONTENTFUL_SPACE_ID,
// });

// export type Listing = {
//   location: string;
//   title: string;
//   images: string[];
//   startDate: Date;
//   endDate: Date;
//   price: number;
//   rating: number;
//   category: string;
//   region: string;
//   id: string;
// }[];
