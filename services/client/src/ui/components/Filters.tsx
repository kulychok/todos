import * as React from 'react';
import { memo } from 'react';
import { ReactElement, useCallback } from 'react';

interface IFilterProps {
  filters: IFilters;
  filterType: string;
  getTodoList(page: number, filterType: string): void;
  changeFilterType(filterType: string): void;
  changeCurrentPage(page: number): void;
}

interface IFilters {
  ALL: { value: string; label: string };
  ACTIVE: { value: string; label: string };
  COMPLETED: { value: string; label: string };
}

const Filters = (props: IFilterProps) => {
  const {
    filters,
    filterType,
    getTodoList,
    changeFilterType,
    changeCurrentPage,
  } = props;

  const handleClick = useCallback((value) => {
    changeFilterType(value);
    getTodoList(0, value);
    changeCurrentPage(0);
  }, []);

  return (
    <div className='filters'>
      {Object.values(filters).map(({ value, label }) => (
        <div
          key={value}
          className={`
            filter-${value.toLowerCase()}-button
            ${filterType === value ? 'current' : ''}
          `}
          onClick={() => handleClick(value)}
        >
          {label}
        </div>
      ))}
    </div>
  );
};

export default memo(Filters);
