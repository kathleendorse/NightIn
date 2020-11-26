import React, {
  createContext,
  //  PropsWithChildren,
  useEffect,
  useState,
} from "react";
import Axios, { AxiosResponse } from "axios";

export const myContext = createContext({});
export default function Context(props) {
  const [user, setUser] = useState();
  useEffect(() => {
    Axios.get("http://localhost:3001/api/user/login", {
      withCredentials: true,
    }).then((res) => {
      setUser(res.data);
    });
  }, [user]);
  //updated second argument from [] to [user so that whenever this state changes, this will run again]

  return <myContext.Provider value={user}>{props.children}</myContext.Provider>;
}
