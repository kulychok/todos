import * as React from 'react';
import { useCallback, memo } from 'react';

interface IPaginatorProps {
  count: number;
  pageLimit: number;
  currentPage: number;
  onClick(page: number): void;
}

const Paginator = (props: IPaginatorProps) => {
  const { count, pageLimit, currentPage, onClick } = props;

  const btns = Array(Math.floor(count / pageLimit + 1) || 0);

  const clickHandler = useCallback(onClick, [currentPage]);

  return (
    <div className='page-buttons'>
      {btns.length > 1 &&
        [...btns].map((el, idx) => (
          <button
            key={idx}
            className={`page-button ${idx === currentPage ? 'current' : ''}`}
            onClick={() => clickHandler(idx)}
          >
            {idx + 1}
          </button>
        ))}
    </div>
  );
};

export default memo(Paginator);
