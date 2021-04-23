import { connect } from 'react-redux';
import * as React from 'react';
import { useCallback, useState, memo } from 'react';
import STATUS from '../../constants/todoStatus';
import {
  addTodo,
  changeCurrentPage,
  changeNewTodoTitle,
  patchToActive,
  patchToCompleted,
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
  patchToActive(): void;
  patchToCompleted(): void;
}

const CreateTodoField = (props: ICreateTodoFieldProps) => {
  const {
    newTodoTitle,
    countAll,
    addTodo,
    changeNewTodoTitle,
    changeCurrentPage,
    patchToActive,
    patchToCompleted,
  } = props;

  const [toggleAllStatus, setToggleAllStatus] = useState(
    STATUS.COMPLETED.label
  );

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

  const toggleAllHandler = useCallback(() => {
    if (toggleAllStatus === STATUS.COMPLETED.label) {
      patchToCompleted();
      setToggleAllStatus(STATUS.ACTIVE.label);
    } else {
      patchToActive();
      setToggleAllStatus(STATUS.COMPLETED.label);
    }
  }, [toggleAllStatus]);

  let className = '';
  countAll > 0 && (className = 'with-todo-list');

  return (
    <div className='create-todo-panel'>
      <div
        className={`toggle-all ${toggleAllStatus}`}
        onClick={toggleAllHandler}
      >
        ❯
      </div>
      <input
        className={`input-field ${className}`}
        placeholder='What needs to be done?'
        type='text'
        value={newTodoTitle}
        autoFocus
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      ></input>
    </div>
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
    patchToActive: () => dispatch(patchToActive(0, filterType)),
    patchToCompleted: () => dispatch(patchToCompleted(0, filterType)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(memo(CreateTodoField));
