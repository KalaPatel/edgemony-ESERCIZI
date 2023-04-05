export const mainReducer = (state, action) => {
  switch (action.type) {
    case "SET_TASKS_LIST":
      return {
        ...state,
        tasksListData: action.payload,
      };
    case "CREATE_NEW_TASK":
      return {
        ...state,
        tasksListData: [...state.tasksListData, action.payload],
      };

    case "SET_MODAL_OPEN": {
      return {
        ...state,
        isModalVisibile: !state.isModalVisibile,
      };
    }
    case "SET_USERNAME": {
      return {
        ...state,
        newToDoObj: {
          ...state.newToDoObj,
          username: action.payload,
          image: `https://robohash.org/${action.payload}`,
        },
      };
    }
    case "todoText": {
      return {
        ...state,
        newToDoObj: {
          ...state.newToDoObj,
          todo: action.payload,
        },
      };
    }
    case "completed": {
      return {
        ...state,
        newToDoObj: {
          ...state.newToDoObj,
          completed: action.payload,
        },
      };
    }
  }
};
