import { connect } from 'react-redux';
import * as React from 'react';
import { memo } from 'react';
import { useCallback } from 'react';
import STATUS from '../../constants/todoStatus';
import {
  addTodo,
  changeCurrentPage,
  changeNewTodoTitle,
} from '../../app/todo/actionCreators';
import { AppDispatch, RootState } from '../../types';

interface ICreateTodoFieldProps {
  newTodoTitle: string;
  countAll: number;
  filterType: string;
  lastPage: number;
  addTodo(title: string): void;
  changeNewTodoTitle(newTodoTitle: string): void;
  changeCurrentPage(): void;
}

const CreateTodoField = (props: ICreateTodoFieldProps) => {
  const {
    newTodoTitle,
    countAll,
    addTodo,
    changeNewTodoTitle,
    changeCurrentPage,
  } = props;

  const handleChange = useCallback(
    (event: React.SyntheticEvent<HTMLInputElement>) => {
      changeNewTodoTitle((event.target as HTMLTextAreaElement).value);
    },
    []
  );

  const handleKeyPress = useCallback(
    (event) => {
      if (event.key === 'Enter') {
        addTodo(newTodoTitle);
        changeCurrentPage();
      }
    },
    [newTodoTitle]
  );

  let className = '';
  countAll > 0 && (className = 'change-edges');

  return (
    <input
      className={`input-field ${className}`}
      type='text'
      value={newTodoTitle}
      autoFocus
      onChange={handleChange}
      onKeyPress={handleKeyPress}
    ></input>
  );
};

const mapStateToProps = (state: RootState) => ({
  newTodoTitle: state.todo.newTodoTitle,
  countAll: state.todo.count.all,
});

//own props?

const mapDispatchToProps = (dispatch: AppDispatch, ownProps) => {
  const { lastPage, filterType } = ownProps;
  return {
    addTodo: (title: string) =>
      dispatch(addTodo(title, STATUS.ACTIVE.value, lastPage, filterType)),
    changeNewTodoTitle: (newTodoTitle: string) =>
      dispatch(changeNewTodoTitle(newTodoTitle)),
    changeCurrentPage: () => {
      dispatch(changeCurrentPage(lastPage));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(memo(CreateTodoField));
