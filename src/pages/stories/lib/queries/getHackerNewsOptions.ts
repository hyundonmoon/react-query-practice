import getHackerNewsStories from "@/pages/stories/api/getHackerNewsStories";
import { HNStoryApiResponseSchema } from "@/pages/stories/lib/schema";
import { queryOptions } from "@tanstack/react-query";

export default function getHackerNewsQueryOptions(page: number) {
  return queryOptions({
    queryKey: ["stories", { page }],
    queryFn: async () => {
      const result = await getHackerNewsStories(page);
      return HNStoryApiResponseSchema.parse(result);
    },
    staleTime: Infinity,
  });
}
