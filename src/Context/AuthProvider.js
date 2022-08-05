import { useState, useEffect, createContext } from "react";
// import firebase, { auth } from "../firebase/config";
import firebase, { auth } from "../firebase/config";

import { useHistory } from "react-router";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState({});

   const history = useHistory();
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      const unsubscribed = auth.onAuthStateChanged((user) => {
         if (user) {
            const { displayName, email, uid, photoURL } = user;
            setUser({
               displayName,
               email,
               uid,
               photoURL,
            });
            setIsLoading(false);
            history.push("/");
            return;
         }

         setUser({});
         if (isLoading) {
            setIsLoading(false);
         }
         history.push("/login");

         // alert(`you need login ${user}`);

         // setUser({});
         // setIsLoading(false);
         // history.push("/login");
      });

      return unsubscribed;
   }, [history]);

   return (
      <AuthContext.Provider value={{ user }}>
         {isLoading ? "Loading" : children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;
