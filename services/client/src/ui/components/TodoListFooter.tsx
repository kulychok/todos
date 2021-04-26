import * as React from 'react';
import { memo } from 'react';
import { ICount } from '../../types';

interface IFilterProps {
  count: ICount;
  filters: { ALL: string; ACTIVE: string; COMPLETED: string };
  filterType: string;
  onClickFilterBtn(filterType: string): void;
  onClickDeleteBtn(): void;
}

const Filters = (props: IFilterProps) => {
  const {
    count,
    filters,
    filterType,
    onClickFilterBtn,
    onClickDeleteBtn,
  } = props;

  const hiddenClass = count.completed ? '' : 'hidden';

  return (
    <div className='todo-list-footer'>
      <div className='counter'>{`${count.active} items left`}</div>
      <div className='filters'>
        {Object.values(filters).map((filter) => (
          <div
            key={filter}
            className={`
            filter-button
            ${filterType === filter ? 'current' : ''}
          `}
            onClick={() => onClickFilterBtn(filter)}
          >
            {filter}
          </div>
        ))}
      </div>
      <button
        className={`clear-completed-button ${hiddenClass}`}
        onClick={onClickDeleteBtn}
      >
        Clear completed
      </button>
    </div>
  );
};

export default memo(Filters);
