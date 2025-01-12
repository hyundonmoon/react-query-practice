import prefetchHackerNewsStories from "@/pages/stories/lib/queries/prefetchHackerNewsStories";
import BaseButton from "@/pages/stories/ui/buttons/BaseButton";
import { useQueryClient } from "@tanstack/react-query";

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
  const queryClient = useQueryClient();
  const handleClick = () => {
    setPage(pageValue);
  };

  const handleMouseEnter = () => {
    prefetchHackerNewsStories(queryClient, pageValue);
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
