import { usePrefetchHackerNewsStories } from "@/pages/stories/lib/hooks/usePrefetchNewsStories";
import BaseButton from "@/pages/stories/ui/buttons/BaseButton";
import SingleAngleRight from "@/pages/stories/ui/icons/SingleAngleRight";

interface NextPageGroupButtonProps {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  currentPageGroupIdx: number;
}

export default function NextPageGroupButton({
  setPage,
  currentPageGroupIdx,
}: NextPageGroupButtonProps) {
  const { prefetch } = usePrefetchHackerNewsStories();
  const targetPageIdx = (currentPageGroupIdx + 1) * 5;

  const handleClick = () => {
    setPage(targetPageIdx);
  };

  const handleMouseEnter = () => {
    prefetch(targetPageIdx);
  };

  return (
    <BaseButton handleClick={handleClick} handleMouseEnter={handleMouseEnter}>
      <SingleAngleRight />
    </BaseButton>
  );
}
