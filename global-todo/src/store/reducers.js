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
    case "todoText": {
      return {
        ...state,
        newToDoObj: {
          id: state.tasksListData.length + 1,
          todo: action.payload,
          completed: state.newToDoObj.completed,
          userId: 1,
        },
      };
    }
    case "completed": {
      return {
        ...state,
        newToDoObj: {
          id: state.newToDoObj.id,
          todo: state.newToDoObj.todo,
          completed: action.payload,
          userId: 1,
        },
      };
    }
  }
};

// export const modalReducer = (state, action) => {
//   switch (action.type) {
//     case "SET_MODAL_OPEN": {
//       return {
//         ...state,
//         isModalVisibile: !state.isModalVisibile,
//       };
//     }
//   }
// };

// Per esercizio avanzato!! (04/04/2023)
// dispatch({type: 'CREATE_NEW_TASK', payload: {
//   "id": 31,
//   "todo": "Do something nice for someone I care about",
//   "completed": true,
//   "userId": 26
// }})
