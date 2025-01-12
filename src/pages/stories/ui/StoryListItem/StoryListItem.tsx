import { HNStory } from "@/pages/stories/lib/schema";
import { formatDistanceToNow } from "date-fns";
import styles from "./StoryListItem.module.css";

export default function StoryListItem({ story }: { story: HNStory }) {
  return (
    <li>
      <a href={story.url} target="_blank" className={styles.storyTitle}>
        {story.title}
      </a>
      <p className={styles.storyDetails}>
        {story.points} points by {story.author} | {story.numComments} comments |{" "}
        {formatDistanceToNow(story.createdAt)} ago
      </p>
    </li>
  );
}
