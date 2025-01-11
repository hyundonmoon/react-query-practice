import { formatDistanceToNow } from "date-fns";
import { HNStory } from "../schema";

export default function StoryListItem({ story }: { story: HNStory }) {
  return (
    <li className="story-list-item">
      <a href={story.url} target="_blank" className="story-title">
        {story.title}
      </a>
      <p>
        {story.points} points by {story.author} | {story.numComments} comments |{" "}
        {formatDistanceToNow(story.createdAt)} ago
      </p>
    </li>
  );
}
