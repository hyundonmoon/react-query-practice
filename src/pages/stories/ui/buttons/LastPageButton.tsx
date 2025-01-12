import prefetchHackerNewsStories from "@/pages/stories/lib/queries/prefetchHackerNewsStories";
import BaseButton from "@/pages/stories/ui/buttons/BaseButton";
import DoubleAngleRight from "@/pages/stories/ui/icons/DoubleAngleRight";
import { useQueryClient } from "@tanstack/react-query";

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
    <BaseButton handleClick={handleClick} handleMouseEnter={handleMouseEnter}>
      <DoubleAngleRight />
    </BaseButton>
  );
}
