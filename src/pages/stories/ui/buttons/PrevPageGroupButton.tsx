import prefetchHackerNewsStories from "@/pages/stories/lib/queries/prefetchHackerNewsStories";
import SingleAngleLeft from "@/pages/stories/ui/icons/SingleAngleLeft";
import { useQueryClient } from "@tanstack/react-query";
import styles from "./Button.module.css";

interface PrevPageGroupButtonProps {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  currentPageGroupIdx: number;
}

export default function PrevPageGroupButton({
  setPage,
  currentPageGroupIdx,
}: PrevPageGroupButtonProps) {
  const queryClient = useQueryClient();
  const targetPageIdx = (currentPageGroupIdx - 1) * 5 + 4;

  const handleClick = () => {
    setPage(targetPageIdx);
  };

  const handleMouseEnter = () => {
    prefetchHackerNewsStories(queryClient, targetPageIdx);
  };

  return (
    <button
      className={styles.button}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
    >
      <SingleAngleLeft />
    </button>
  );
}
