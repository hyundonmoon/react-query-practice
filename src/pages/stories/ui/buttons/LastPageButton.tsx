import { usePrefetchHackerNewsStories } from "@/pages/stories/lib/hooks/usePrefetchNewsStories";
import BaseButton from "@/pages/stories/ui/buttons/BaseButton";
import DoubleAngleRight from "@/pages/stories/ui/icons/DoubleAngleRight";

interface LastPageButtonProps {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
}

export default function LastPageButton({
  setPage,
  totalPages,
}: LastPageButtonProps) {
  const { prefetch } = usePrefetchHackerNewsStories();
  const lastPageIdx = totalPages - 1;

  const handleClick = () => {
    setPage(lastPageIdx);
  };

  const handleMouseEnter = () => {
    prefetch(lastPageIdx);
  };

  return (
    <BaseButton handleClick={handleClick} handleMouseEnter={handleMouseEnter}>
      <DoubleAngleRight />
    </BaseButton>
  );
}
