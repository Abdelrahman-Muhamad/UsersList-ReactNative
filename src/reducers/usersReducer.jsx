export const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case "list": {
      return { ...state, list: action.payload };
    }
    case "details": {
      return { ...state, details: action.payload };
    }
    case "clear": {
      return {
        ...state,
        details: null,
      };
    }
    case "search": {
      return { list: action.payload };
    }
    default: {
      return state;
    }
  }
};
