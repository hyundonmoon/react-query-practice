import { useLayoutEffect, useRef, useState } from "react";
import { useHackerNewsStories } from "../../lib/hooks/useHackerNewsStories";
import Pagination from "../Pagination/Pagination";
import StoryList from "../StoryList/StoryList";
import styles from "./Stories.module.css";

export function Stories() {
  const scrollRef = useRef<HTMLUListElement>(null);
  const [page, setPage] = useState(0);
  const { data, status, isPlaceholderData } = useHackerNewsStories(page);

  useLayoutEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo(0, 0);
    }
  }, [data]);

  if (status === "pending") {
    return <div>...</div>;
  }

  if (status === "error") {
    return <div>Error fetching data</div>;
  }

  return (
    <div className={styles.stories}>
      <StoryList
        ref={scrollRef}
        stories={data.hits}
        isPlaceholderData={isPlaceholderData}
      />
      <Pagination
        currentPage={page}
        totalPages={data.nbPages}
        setPage={setPage}
      />
    </div>
  );
}
