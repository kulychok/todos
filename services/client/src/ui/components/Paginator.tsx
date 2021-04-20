import * as React from 'react';
import { useCallback, memo } from 'react';
import sha256 = require('crypto-js/sha256');

interface IPaginatorProps {
  count: number;
  pageLimit: number;
  filterType: string;
  currentPage: number;
  changeCurrentPage(page: number): void;
  getTodoList(page: number, filterType: string): void;
}

const Paginator = (props: IPaginatorProps) => {
  const {
    count,
    pageLimit,
    filterType,
    changeCurrentPage,
    currentPage,
    getTodoList,
  } = props;

  const btns = Array(Math.floor(count / pageLimit + 1) || 0);

  const clickHandler = useCallback(
    (page: number) => {
      changeCurrentPage(page);
      getTodoList(page, filterType);
    },
    [currentPage]
  );

  return (
    <div className='page-buttons'>
      {btns.length > 1 &&
        [...btns].map((el, idx) => {
          return (
            <button
              key={sha256(idx + '') + ''}
              className={`page-button ${idx === currentPage ? 'current' : ''}`}
              onClick={() => clickHandler(idx)}
            >
              {idx + 1}
            </button>
          );
        })}
    </div>
  );
};

export default memo(Paginator);
