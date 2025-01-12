import { usePrefetchHackerNewsStories } from "@/pages/stories/lib/hooks/usePrefetchNewsStories";
import BaseButton from "@/pages/stories/ui/buttons/BaseButton";

interface PageButtonProps {
  pageValue: number;
  displayValue: number;
  isCurrent: boolean;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function PageButton({
  displayValue,
  setPage,
  pageValue,
  isCurrent,
}: PageButtonProps) {
  const { prefetch } = usePrefetchHackerNewsStories();
  const handleClick = () => {
    setPage(pageValue);
  };

  const handleMouseEnter = () => {
    prefetch(pageValue);
  };

  return (
    <BaseButton
      isCurrent={isCurrent}
      handleClick={handleClick}
      handleMouseEnter={handleMouseEnter}
    >
      {displayValue}
    </BaseButton>
  );
}
