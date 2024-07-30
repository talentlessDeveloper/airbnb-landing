export async function fetchGraphQL(
  query: string,
  preview = false,
): Promise<any> {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },

      next: { tags: ["airbnbLanding"] },
    },
  )
    .then((response) => response.json())
    .catch((e) => console.log(e));
}
