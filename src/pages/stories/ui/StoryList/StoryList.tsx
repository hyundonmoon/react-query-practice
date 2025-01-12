import { HNStory } from "@/pages/stories/lib/schema";
import StoryListItem from "@/pages/stories/ui/StoryListItem/StoryListItem";
import { forwardRef } from "react";
import styles from "./StoryList.module.css";

interface StoryListProps {
  stories: HNStory[];
  isPlaceholderData: boolean;
}

export default forwardRef(function StoryList(
  { stories, isPlaceholderData }: StoryListProps,
  ref: React.Ref<HTMLUListElement>
) {
  if (stories.length === 0) {
    return <div>No stories found</div>;
  }

  return (
    <ul
      ref={ref}
      className={styles.storyList}
      style={{ opacity: isPlaceholderData ? ".5" : "1" }}
    >
      {stories.map((story) => (
        <StoryListItem key={story.objectID ?? story.storyId} story={story} />
      ))}
    </ul>
  );
});
