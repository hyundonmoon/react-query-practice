import { useQueryClient } from "@tanstack/react-query";
import { prefetchHackerNewsStories } from "../../hooks/useHackerNewStories";
import DoubleAngleRight from "../icons/DoubleAngleRight";

interface LastPageButtonProps {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
}

export default function LastPageButton({
  setPage,
  totalPages,
}: LastPageButtonProps) {
  const queryClient = useQueryClient();
  const lastPageIdx = totalPages - 1;

  const handleClick = () => {
    setPage(lastPageIdx);
  };
  const handleMouseEnter = () => {
    prefetchHackerNewsStories(queryClient, lastPageIdx);
  };

  return (
    <button onClick={handleClick} onMouseEnter={handleMouseEnter}>
      <DoubleAngleRight />
    </button>
  );
}
