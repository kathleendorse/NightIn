import React, { createContext, useReducer, useContext } from "react";

const UserContext = createContext();
const { Provider } = UserContext;

const reducer = (state, action) => {
  switch (action.type) {
    case "setCurrentUser":
      return {
        ...state,
        _id: action._id,
        email: action.email,
        favs: action.favs,
        loading: false,
      };
    
    case "updateFavs":
      return {
        ...state,
        favs: [...state.favs, action.favs],
        loading: false,
      };

    case "loading":
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};

const UserProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    _id: "",
    email: "",
    favs: [],
    loading: false,
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useUserContext = () => {
  return useContext(UserContext);
};

export { UserProvider, useUserContext };
