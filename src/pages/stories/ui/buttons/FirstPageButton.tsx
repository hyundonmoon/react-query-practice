import prefetchHackerNewsStories from "@/pages/stories/lib/queries/prefetchHackerNewsStories";
import BaseButton from "@/pages/stories/ui/buttons/BaseButton";
import DoubleAngleLeft from "@/pages/stories/ui/icons/DoubleAngleLeft";
import { useQueryClient } from "@tanstack/react-query";

interface FirstPageButtonProps {
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function FirstPageButton({ setPage }: FirstPageButtonProps) {
  const queryClient = useQueryClient();
  const handleClick = () => {
    setPage(0);
  };
  const handleMouseEnter = () => {
    prefetchHackerNewsStories(queryClient, 0);
  };

  return (
    <BaseButton handleClick={handleClick} handleMouseEnter={handleMouseEnter}>
      <DoubleAngleLeft />
    </BaseButton>
  );
}
