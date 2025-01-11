import { useQueryClient } from "@tanstack/react-query";
import { prefetchHackerNewsStories } from "../../hooks/useHackerNewStories";
import SingleAngleRight from "../icons/SingleAngleRight";

interface NextPageGroupButtonProps {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  currentPageGroupIdx: number;
}

export default function NextPageGroupButton({
  setPage,
  currentPageGroupIdx,
}: NextPageGroupButtonProps) {
  const queryClient = useQueryClient();
  const targetPageIdx = (currentPageGroupIdx + 1) * 5;

  const handleClick = () => {
    setPage(targetPageIdx);
  };

  const handleMouseEnter = () => {
    prefetchHackerNewsStories(queryClient, targetPageIdx);
  };

  return (
    <button onClick={handleClick} onMouseEnter={handleMouseEnter}>
      <SingleAngleRight />
    </button>
  );
}
