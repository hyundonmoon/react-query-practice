import prefetchHackerNewsStories from "@/pages/stories/lib/queries/prefetchHackerNewsStories";
import BaseButton from "@/pages/stories/ui/buttons/BaseButton";
import SingleAngleRight from "@/pages/stories/ui/icons/SingleAngleRight";
import { useQueryClient } from "@tanstack/react-query";

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
    <BaseButton handleClick={handleClick} handleMouseEnter={handleMouseEnter}>
      <SingleAngleRight />
    </BaseButton>
  );
}
