import getHackerNewsQueryOptions from "@/pages/stories/lib/queries/getHackerNewsOptions";
import { QueryClient } from "@tanstack/react-query";

export default function prefetchHackerNewsStories(
  queryClient: QueryClient,
  page: number
) {
  return queryClient.prefetchQuery(getHackerNewsQueryOptions(page));
}
