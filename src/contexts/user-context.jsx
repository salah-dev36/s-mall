import { createContext, useEffect, useState } from "react";
import { AuthChangeListener, createUserDocument } from "../utils/firebase/firebase-utils";

export const UserContext = createContext({
  currentUser : null,
  setCurrentUser: () => null
});

export const UserProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = {currentUser, setCurrentUser};

  useEffect(()=> {
    const unsubcribe = AuthChangeListener((user) =>{
      if (user) {
        createUserDocument(user);
      }
      setCurrentUser(user)
    });

    return unsubcribe;
  }, [])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>   
}