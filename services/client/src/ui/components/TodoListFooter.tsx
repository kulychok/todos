import * as React from 'react';
import { memo } from 'react';
import { ReactElement, useCallback } from 'react';
import FILTERS from '../../constants/filters';
import { ICount } from '../../types';

interface IFilterProps {
  count: ICount;
  filters: IFilters;
  filterType: string;
  getTodoList(page: number, filterType: string): void;
  changeFilterType(filterType: string): void;
  changeCurrentPage(page: number): void;
  delCompleted(page: number, filterType: string): void;
}

interface IFilters {
  ALL: { value: string; label: string };
  ACTIVE: { value: string; label: string };
  COMPLETED: { value: string; label: string };
}

const Filters = (props: IFilterProps) => {
  const {
    count,
    filters,
    filterType,
    getTodoList,
    changeFilterType,
    changeCurrentPage,
    delCompleted,
  } = props;

  const handleClick = useCallback((value) => {
    changeFilterType(value);
    getTodoList(0, value);
    changeCurrentPage(0);
  }, []);

  const handleBtnClick = useCallback(() => {
    changeFilterType(FILTERS.ALL.value);
    delCompleted(0, filterType);
  }, []);

  const hiddenClass = count.completed ? '' : 'hidden';

  return (
    <div className='todo-list-footer'>
      <div className='counter'>{`${count.all} items left`}</div>
      <div className='filters'>
        {Object.values(filters).map(({ value, label }) => (
          <div
            key={label}
            className={`
            filter-button
            ${filterType === value ? 'current' : ''}
          `}
            onClick={() => handleClick(value)}
          >
            {label}
          </div>
        ))}
      </div>
      <button
        className={`clear-completed-button ${hiddenClass}`}
        onClick={handleBtnClick}
      >
        Clear completed
      </button>
    </div>
  );
};

export default memo(Filters);
