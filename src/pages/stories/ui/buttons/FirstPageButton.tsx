import { usePrefetchHackerNewsStories } from "@/pages/stories/lib/hooks/usePrefetchNewsStories";
import BaseButton from "@/pages/stories/ui/buttons/BaseButton";
import DoubleAngleLeft from "@/pages/stories/ui/icons/DoubleAngleLeft";

interface FirstPageButtonProps {
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function FirstPageButton({ setPage }: FirstPageButtonProps) {
  const { prefetch } = usePrefetchHackerNewsStories();

  const handleClick = () => {
    setPage(0);
  };

  const handleMouseEnter = () => {
    prefetch(0);
  };

  return (
    <BaseButton handleClick={handleClick} handleMouseEnter={handleMouseEnter}>
      <DoubleAngleLeft />
    </BaseButton>
  );
}
