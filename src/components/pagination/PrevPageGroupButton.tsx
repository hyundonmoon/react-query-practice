import { useQueryClient } from "@tanstack/react-query";
import { prefetchHackerNewsStories } from "../../hooks/useHackerNewStories";
import SingleAngleLeft from "../icons/SingleAngleLeft";

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
    <button onClick={handleClick} onMouseEnter={handleMouseEnter}>
      <SingleAngleLeft />
    </button>
  );
}
