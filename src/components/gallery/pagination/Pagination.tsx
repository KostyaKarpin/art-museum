import { Button, PageDecorate, Wrapper } from "./PaginationStyles";
import React from "react";

interface Props {
  onNextPageClick: () => void;
  onPrevPageClick: () => void;
  disable: {
    left: boolean;
    right: boolean;
  };
  nav?: {
    current: number;
    total: number;
  };
}

const Pagination = (props: Props) => {
  const { onNextPageClick, onPrevPageClick, nav = null } = props;
  const handleNextPageClick = () => {
    onNextPageClick();
  };
  const handlePrevPageClick = () => {
    onPrevPageClick();
  };
  return (
    <Wrapper>
      <Button onClick={handlePrevPageClick}>Prev</Button>
      {nav && <PageDecorate>{`${nav.current} of ${nav.total}`}</PageDecorate>}
      <Button onClick={handleNextPageClick}>Next</Button>
    </Wrapper>
  );
};

export default React.memo(Pagination);
