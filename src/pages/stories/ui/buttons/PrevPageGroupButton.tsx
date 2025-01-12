import { usePrefetchHackerNewsStories } from "@/pages/stories/lib/hooks/usePrefetchNewsStories";
import SingleAngleLeft from "@/pages/stories/ui/icons/SingleAngleLeft";
import styles from "./Button.module.css";

interface PrevPageGroupButtonProps {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  currentPageGroupIdx: number;
}

export default function PrevPageGroupButton({
  setPage,
  currentPageGroupIdx,
}: PrevPageGroupButtonProps) {
  const { prefetch } = usePrefetchHackerNewsStories();
  const targetPageIdx = (currentPageGroupIdx - 1) * 5 + 4;

  const handleClick = () => {
    setPage(targetPageIdx);
  };

  const handleMouseEnter = () => {
    prefetch(targetPageIdx);
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
