import { HNStory } from "../schema";
import StoryListItem from "./StoryListItem";

interface StoryListProps {
  stories: HNStory[];
  isPlaceholderData: boolean;
}

export default function StoryList({
  stories,
  isPlaceholderData,
}: StoryListProps) {
  if (stories.length === 0) {
    return <div>No stories found</div>;
  }

  return (
    <ul
      className="story-list"
      style={{ opacity: isPlaceholderData ? ".5" : "1" }}
    >
      {stories.map((story) => (
        <StoryListItem key={story.objectID ?? story.storyId} story={story} />
      ))}
    </ul>
  );
}
