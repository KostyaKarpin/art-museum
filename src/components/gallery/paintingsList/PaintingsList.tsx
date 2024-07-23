import useFetch from "@/hooks/useFetch";
import { getPagesAmount } from "@/utils/getPagesAmount";
import { useCallback, useState } from "react";
import {
  PaginationWrapper,
  PaintingsWrapper,
  Wrapper,
} from "./PaintingsListStyles";
import Pagination from "../pagination/Pagination";
import GalleryCard from "@/components/cards/galleryCard/GalleryCard";

const PaintingsList = () => {
  const paintingsPerPage = 3;
  const totalPages = 21;

  const [page, setPage] = useState(1);
  const [data] = useFetch(
    "https://api.artic.edu/api/v1",
    page,
    paintingsPerPage
  );

  const handleNextPageClick = useCallback(() => {
    const current = page;
    const next = current + 1;
    const total = data ? getPagesAmount(totalPages, paintingsPerPage) : current;
    setPage(next <= total ? next : current);
  }, [page, data]);
  const handlePrevPageClick = useCallback(() => {
    const current = page;
    const prev = current - 1;
    setPage(prev > 0 ? prev : current);
  }, [page]);

  return (
    <Wrapper>
      <PaintingsWrapper>
        {data &&
          data.map((painting, index) => {
            return <GalleryCard key={index} painting={painting} />;
          })}
      </PaintingsWrapper>
      <PaginationWrapper>
        <Pagination
          onNextPageClick={handleNextPageClick}
          onPrevPageClick={handlePrevPageClick}
          disable={{
            left: page === 1,
            right: page === getPagesAmount(totalPages, paintingsPerPage),
          }}
          nav={{
            current: page,
            total: getPagesAmount(totalPages, paintingsPerPage),
          }}
        />
      </PaginationWrapper>
    </Wrapper>
  );
};

export default PaintingsList;
