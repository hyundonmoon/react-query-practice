import FirstPageButton from "@/pages/stories/ui/buttons/FirstPageButton";
import LastPageButton from "@/pages/stories/ui/buttons/LastPageButton";
import NextPageGroupButton from "@/pages/stories/ui/buttons/NextPageGroupButton";
import PageButton from "@/pages/stories/ui/buttons/PageButton";
import PrevPageGroupButton from "@/pages/stories/ui/buttons/PrevPageGroupButton";
import styles from "./Pagination.module.css";

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
  const pageGroupIdx = Math.floor(currentPage / 5);
  const lastPageGroupIdx = Math.floor(totalPages / 5);
  const pages = Array.from({ length: 5 }, (_, i) => ({
    pageValue: pageGroupIdx * 5 + i,
    displayValue: pageGroupIdx * 5 + i + 1,
    isCurrent: pageGroupIdx * 5 + i === currentPage,
  }));

  const isNotFirstPageGroup = pageGroupIdx > 0;
  const isNotLastPageGroup = pageGroupIdx < lastPageGroupIdx;

  return (
    <div className={styles.pagination}>
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
        ({ pageValue, displayValue }) =>
          pageValue < totalPages && (
            <PageButton
              key={pageValue}
              pageValue={pageValue}
              displayValue={displayValue}
              isCurrent={pageValue === currentPage}
              setPage={setPage}
            />
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
