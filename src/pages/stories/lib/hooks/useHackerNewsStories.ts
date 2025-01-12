import getHackerNewsQueryOptions from "@/pages/stories/lib/queries/getHackerNewsOptions";
import { useQuery } from "@tanstack/react-query";

export function useHackerNewsStories(page: number) {
  return useQuery({
    ...getHackerNewsQueryOptions(page),
    placeholderData: (prev) => prev,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
}
