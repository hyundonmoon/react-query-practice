import { useQueryClient } from "@tanstack/react-query";
import { prefetchHackerNewsStories } from "../../hooks/useHackerNewStories";
import DoubleAngleLeft from "../icons/DoubleAngleLeft";

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
    <button onClick={handleClick} onMouseEnter={handleMouseEnter}>
      <DoubleAngleLeft />
    </button>
  );
}
