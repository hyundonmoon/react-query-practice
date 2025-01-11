import { useQueryClient } from "@tanstack/react-query";
import { prefetchHackerNewsStories } from "../../hooks/useHackerNewStories";
import FirstPageButton from "./FirstPageButton";
import LastPageButton from "./LastPageButton";
import NextPageGroupButton from "./NextPageGroupButton";
import PrevPageGroupButton from "./PrevPageGroupButton";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function Pagination({
  currentPage,
  totalPages,
  setPage,
}: PaginationProps) {
  const queryClient = useQueryClient();

  const pageGroupIdx = Math.floor(currentPage / 5);
  const lastPageGroupIdx = Math.floor(totalPages / 5);
  const pages = Array.from({ length: 5 }, (_, i) => ({
    pageValue: pageGroupIdx * 5 + i,
    displayValue: pageGroupIdx * 5 + i + 1,
    isCurrent: pageGroupIdx * 5 + i === currentPage,
  }));

  const handleMouseEnter = (page: number) => {
    if (page >= 0 && page < totalPages) {
      prefetchHackerNewsStories(queryClient, page);
    }
  };

  const isNotFirstPageGroup = pageGroupIdx > 0;
  const isNotLastPageGroup = pageGroupIdx < lastPageGroupIdx;

  return (
    <div className="pagination">
      {isNotFirstPageGroup && (
        <>
          <FirstPageButton setPage={setPage} />
          <PrevPageGroupButton
            setPage={setPage}
            currentPageGroupIdx={pageGroupIdx}
          />
        </>
      )}

      {pages.map(
        (page) =>
          page.pageValue < totalPages && (
            <button
              key={page.pageValue}
              onClick={() => {
                setPage(page.pageValue);
              }}
              onMouseEnter={() => handleMouseEnter(page.pageValue)}
              style={{
                fontWeight: page.isCurrent ? "bold" : "normal",
              }}
            >
              {page.displayValue}
            </button>
          )
      )}

      {isNotLastPageGroup && (
        <>
          <NextPageGroupButton
            setPage={setPage}
            currentPageGroupIdx={pageGroupIdx}
          />
          <LastPageButton totalPages={totalPages} setPage={setPage} />
        </>
      )}
    </div>
  );
}
