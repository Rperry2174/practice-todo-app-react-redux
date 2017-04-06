const initialState = {
  searchTerm: '',
  todos: []
};

const setSearchTerm = (state, action) => {
  const newState = {};
  Object.assign(newState, state, {searchTerm: action.searchTerm});

  console.log('(before) state: ', state)
  console.log('(after) state: ', newState)

  return newState;
};

const addTodos = (state, action) => {
  const {todos} = state;
  const newState = {};
  Object.assign(newState, state, {todos: todos.concat(action.todo)})

  console.log('(before) state: ', state)
  console.log('(after) state: ', newState)
  return newState
  // return Object.assign({}, state, {todos: todos.concat(action.todo)})
};

const removeTodo = (state, action) => {
  const {todos} = state;
  const newState = {};
  Object.assign(newState, state, {todos: todos.filter((todo) => todo._id !== action.id)})

  console.log('(before) state: ', state)
  console.log('(after) state: ', newState)
  return newState
  // return Object.assign({}, state, {todos: todos.filter((todo) => todo._id !== action.id)})
};

function reducer(state = initialState, action) {
  console.log('reducer.js - Reducer called');
  console.log('current action: ', action)
  switch (action.type) {
    case 'SET_SEARCH_TERM':
      return setSearchTerm(state, action);
    case 'ADD_TODO':
      return addTodos(state, action);
    case 'REMOVE_TODO':
      return removeTodo(state, action);
    default:
      return state
  }
}

export default reducer;