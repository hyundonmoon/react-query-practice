import { useQuery } from "@tanstack/react-query";
import { HNStoryApiResponseSchema } from "../schema";

async function getHackerNewsStories(page: number) {
  const response = await fetch(
    `http://hn.algolia.com/api/v1/search_by_date?tags=story&hitsPerPage=30&page=${page}`
  );

  if (!response.ok) {
    throw new Error("Request failed");
  }

  return response.json();
}

export function useHackerNewsStories(page: number) {
  return useQuery({
    queryKey: ["stories", { page }],
    queryFn: async () => {
      const result = await getHackerNewsStories(page);
      return HNStoryApiResponseSchema.parse(result);
    },
  });
}
