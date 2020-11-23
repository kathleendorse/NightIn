import React, {
  createContext,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";
import Axios, { AxiosResponse } from "axios";

export const myContext = createContext({});
export default function Context(props) {
  const [user, setUser] = useState();
  useEffect(() => {
    Axios.get("http://localhost:3000/user", { withCredentials: true }).then(
      (res) => {
        setUser(res.data);
      }
    );
  }, []);

  return <myContext.Provider value={user}>{props.children}</myContext.Provider>;
}
