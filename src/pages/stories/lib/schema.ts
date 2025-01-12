import { z } from "zod";

const HNStorySchema = z
  .object({
    author: z.string(),
    url: z.string().default(""),
    title: z.string(),
    points: z.number(),
    num_comments: z.number(),
    created_at: z.string().datetime(),
    updated_at: z.string().datetime(),
    story_id: z.number(),
    objectID: z.string(),
  })
  .transform((story) => ({
    author: story.author,
    url: story.url,
    title: story.title,
    points: story.points,
    numComments: story.num_comments,
    createdAt: story.created_at,
    updatedAt: story.updated_at,
    storyId: story.story_id,
    objectID: story.objectID,
  }));

export type HNStory = z.infer<typeof HNStorySchema>;

export const HNStoryApiResponseSchema = z.object({
  hits: z.array(HNStorySchema),
  nbHits: z.number(),
  page: z.number(),
  nbPages: z.number(),
  hitsPerPage: z.number(),
});

export type HNStoryApiResponse = z.infer<typeof HNStoryApiResponseSchema>;
