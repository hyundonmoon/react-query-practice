import { QueryClient, queryOptions, useQuery } from "@tanstack/react-query";
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

function getHackerNewsQueryOptions(page: number) {
  return queryOptions({
    queryKey: ["stories", { page }],
    queryFn: async () => {
      const result = await getHackerNewsStories(page);
      return HNStoryApiResponseSchema.parse(result);
    },
    staleTime: 1000 * 60 * 10,
  });
}

export function prefetchHackerNewsStories(
  queryClient: QueryClient,
  page: number
) {
  return queryClient.prefetchQuery(getHackerNewsQueryOptions(page));
}

export function useHackerNewsStories(page: number) {
  return useQuery({
    ...getHackerNewsQueryOptions(page),
    placeholderData: (prev) => prev,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
}
