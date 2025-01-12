import getHackerNewsQueryOptions from "@/pages/stories/lib/queries/getHackerNewsOptions";
import { useQueryClient } from "@tanstack/react-query";
import { useCallback } from "react";

export function usePrefetchHackerNewsStories() {
  const queryClient = useQueryClient();

  const prefetch = useCallback((page: number) => {
    queryClient.prefetchQuery(getHackerNewsQueryOptions(page));
  }, []);

  return { prefetch };
}
